
import React, { memo } from "react"

import { Countries } from "../interfaces";
import { CountryItem } from "./countryItem";

import styled from "styled-components"

interface Props {
    data: Countries[],
    isLoading:boolean,
    error:boolean
}
export const CountryLists:React.FC<Props> = memo(({data,isLoading,error,filteredValue}) => {
    return (
        <Wrapper>
            <div className="container">
                <Container>
                    {   isLoading ? <Spinner></Spinner> :
                        error ? <Error>Error on server side, please retry </Error> :
                        filteredValue?.error ? <Error>No such countries </Error> :
                        filteredValue?.length > 0 ? filteredValue.map(item => (
                             <CountryItem {...item} key={item.name}/>
                        )) :
                        data?.pages.length > 0 && data.pages.map(page => (
                            page.map(item => (
                                <CountryItem {...item} key={item.name}/>
                            ))
                        ))
                    }        
                </Container>
            </div>
        </Wrapper>
    )
})
//<CountryItem {...item} key={item.name}/>

const Wrapper =styled.section`
    margin-top:20px;
`
const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(1,270px);
    justify-content: center;
    position:relative;
    gap:2em;
    @media(min-width:600px) {
        grid-template-columns: repeat(2,1fr);
        gap: 3em;
    }
    @media(min-width:930px) {
        grid-template-columns: repeat(3,1fr);
    }
    @media(min-width:1230px) {
        grid-template-columns: repeat(4,1fr);
    }    

`
const Spinner =styled.div`
    position: absolute;
    left:50%;
    transform: translate(-50%);
    display: inline-block;
    width: 80px;
    height: 80px;
    &:after {
        content: " ";
        display: block;
        width: 64px;
        height: 64px;
        margin: 8px;
        border-radius: 50%;
        border: 6px solid var(--color-search);
        border-color: var(--color-search) transparent var(--color-search) transparent;
        animation: lds-dual-ring 1.2s linear infinite;
    }
    @keyframes lds-dual-ring {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`
const Error = styled.p`
    position: absolute;
    left:50%;
    transform: translate(-50%);
`