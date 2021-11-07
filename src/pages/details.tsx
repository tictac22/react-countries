
import React from "react"

import {useParams,Link} from "react-router-dom"

import { Header } from "../components/header";
import {BsArrowLeft} from "react-icons/bs"

import { useQuery } from "react-query";
import { fetchCountriesName, fetchCountry } from "../api";

import styled from "styled-components";

export const Details:React.FC = () => {
    const {code}  = useParams<string>();
    const {isLoading, error, data } = useQuery(["country",code],()=>fetchCountry(code!));
    const countryBorders = data?.borders;
    const {isLoading:loading, data:borders } = useQuery(["countryNames",countryBorders],()=>fetchCountriesName(countryBorders),{enabled: !!countryBorders});
    return (
        <>
        <Header/>
        <Wrapper>
        <div className="container">
            <Link to="/">
                <Back>
                    <BsArrowLeft/>
                    <p>Back</p>
                </Back>
            </Link>
            <Data>
                {isLoading || loading  ? <Spinner></Spinner> :
                error ? <Error>Error on server side, please retry</Error> : 
                <>
                {console.log(data.currencies?.length && data.currencies)}
                    <Image>
                        <img src={`${data.flags.svg}`} alt={data.name}/>
                    </Image>
                    <Info>
                        <h2>{data.name}</h2>
                        <InfoText>
                            <div id="1">
                                <p>Native Name: <span>{data.nativeName}</span></p>
                                <p>Population: <span>{data.population}</span></p>
                                <p>Region: <span>{data.region}</span></p>
                                <p>Sub Region: <span>{data.subregion}</span></p>
                                <p>Capital: <span>{data.capital || "No capital"}</span></p>
                            </div>
                            <div>
                                <p>Top Level Domain: <span>{data.topLevelDomain[0]}</span></p>
                                <p>Currencies <span>{data.currencies?.length > 0 ? data.currencies[0].name : "No currency"}</span></p>
                                <p style={{maxWidth:"300px"}}>Languages: <span>{(data.languages as {name:string}[]).map(item=>item.name).join(", ")}</span></p>
                            </div>
                        </InfoText>
                        <Countries>
                                <div style={{marginRight:"4px"}}>Border Countries:</div>{
                                    borders!?.length > 0 ? borders!.map(item=>
                                        <Link to={`/${item.alpha2Code}`} key={item.name}>
                                            <LinkToCountry>{item.name}</LinkToCountry>
                                        </Link>) 
                                    :<div>There are no border countries</div>}
                        </Countries>
                    </Info>
                </>
                }
            </Data>
        </div>
        </Wrapper>
        </>
    )
}
const Wrapper = styled.div`
    margin-top:30px;

`
const Back = styled.button`
    display: flex;
    background-color: var(--color-bg);
    box-shadow: var(--shadow);
    align-items: center;
    cursor: pointer;
    border-radius: 8px;
    padding: 7px 21px;
    & p {
        margin-left: 8px;
        font-weight: 300;
        font-size: 13px;
        color: var(--color-text);

    }
    & svg {
        fill:var( --color-search);
    }
`
const Data =styled.div`
    margin-top: 40px;
    display: flex;
    align-items: flex-start;
    & img {
        width: 600px;
        height: 400px;
        @media (max-width:975px) {
            width: 400px;
            object-fit: cover;
            object-position:center;
        }
        @media(max-width:732px) {
            width: 100%;
            height: initial;
        }
    }
    @media(max-width:732px) {
        flex-direction: column;
    }
`
const Image = styled.div`
`
const Info = styled.div`
    flex: 0 1 50%;
    
    margin-top:62px;
    @media(max-width:850px) {
        margin-top: 15px;
    }
    @media(min-width:732px) {
        margin-left: 30px;
    }
    & h2 {
        color: var(--color-text);
        font-weight: 900;
        font-size: 25px;
    }

`
const InfoText = styled.div`
    display: flex;
    margin-top: 23px;
    @media(max-width:1080px) {
        flex-direction: column;
    }
    & > div[id] {
        margin-bottom: 20px;
        @media(min-width:1080px) {
            margin-right: 41px;
            margin-bottom: 0;
            
    }
    }
    & p, & span {
        color:var(--color-text);
        
    }
    & p {
        margin-top: 5px;
        font-weight:bold;
    }
    & span {
        font-weight: 300;
    }

`
const Countries =styled.div`
    color:var(--color-text);
    display: flex;
    align-items: center;
    font-weight:bold;
    max-width: 500px;
    flex-wrap: wrap;
    & div {
        margin-top: 8px;
    }
`
const LinkToCountry = styled.div`
    padding:3px 15px;
    box-shadow:var(--shadow);
    margin-right:5px;
    color:var(--color-text);
    font-weight:300;
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