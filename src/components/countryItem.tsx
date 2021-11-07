

import React from "react"

import { Link } from "react-router-dom";

import { Countries } from "../interfaces";

import { numberWithCommas } from "../api";

import styled from "styled-components"

export const CountryItem:React.FC<Countries> = ({flags,name,population,region,capital,alpha2Code}) => {
    return (
        <Link to={`/${alpha2Code}`}>
            <Wrapper>
                <Image>
                    <img alt={name} src={`${flags.png}`}/>
                </Image>
                <Info>
                    <h3>{name}</h3>
                    <Description>
                        <p>Population: <span>{numberWithCommas(population)}</span></p>
                        <p>Region: <span>{region}</span></p>
                        <p>Capital: <span>{capital}</span></p>
                    </Description>
                </Info>
            </Wrapper>
        </Link>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction:column;
    background-color: var(--color-bg);
    box-shadow:var(--shadow);
    border-radius: 9px;

`
const Image = styled.div`
    
    & img {
        width: 100%;
        object-fit: cover;
        object-position: center;
        height:160px;
    }
`
const Info = styled.div`
    padding: 20px;
    & h3 {
        font-weight:800;
        font-size: 25px;
        color:var(--color-text);
    }
`
const Description = styled.div`
    margin-top: 10px;
    & p {
        font-weight:600;
        font-size:18px;
        color:var(--color-text)
    }
    & span {
        font-weight:300;
        font-size:16px;
        color:var(--color-text)
    }
`