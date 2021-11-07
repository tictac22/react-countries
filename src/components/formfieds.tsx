
import React from "react"

import styled from "styled-components"
import {AiOutlineSearch} from "react-icons/ai"

import { Regions } from "../interfaces"

import Select from 'react-select'

const options = [
    { value: 'Africa', label: 'Africa' },
    { value: 'America', label: 'America' },
    { value: 'Asia', label: 'Asia' },
    { value: 'Europe', label: 'Europe' },
    { value: 'Oceania', label: 'Oceania' },
]
interface Props {
    nameSearch:string,
    setNameSearch:React.Dispatch<React.SetStateAction<string>>,
    setRegionSearch:React.Dispatch<React.SetStateAction<Regions>>
}

export const Form:React.FC<Props> = ({nameSearch,setNameSearch,setRegionSearch}) => {
    return (
        <FormStyled>
            <div className="container">
                <Wrapper>
                    <InputWrapper>
                        <AiOutlineSearch/>
                        <input onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{setNameSearch(e.target.value)}} 
                        value={nameSearch} 
                        placeholder="Search for a country..." 
                        type="text"/>
                    </InputWrapper>
                    <CustomSelect
                        isSearchable={false} 
                        placeholder={"Filter by region"}
                        isClearable={true}
                        onChange={()=>{setRegionSearch}}
                        options={options}/>
                </Wrapper>
            </div>
        </FormStyled>
    )
}
const FormStyled= styled.div`
    margin-top:20px;
    @media(min-width:530px) {
        margin-top: 40px;
    }

`

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media(max-width:550px) {
        flex-direction: column;
        align-items: flex-start;
    }
`

const InputWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color:var(--color-bg);
    box-shadow:var(--shadow);
    padding: 31px;
    position: relative;
    width: 304px;
    @media(max-width:550px) {
        width: 280px;
    }
    border-radius:9px;
        & svg {
            position: absolute;
            top: 50%;
            left: 15px;
            z-index: 3;
            transform: translateY(-50%);
            fill:var( --color-search);

        }
        & input {
            background-color:var(--color-bg);
            position: absolute;
            top:0;
            left:0;
            padding-left: 45px;
            border: 1px solid var(--color-bg);
            width: 100%;
            height: 100%;
            border-radius: 9px;
            user-select: none;
            color: var(--color-text);
            ::placeholder{
                color: var(--color-text);
            }
            &:focus {
                border:1px solid#0d0709;
            }
}
`
const CustomSelect = styled(Select).attrs({
    styles: {
        option:(provided,state)=>({
            ...provided,
            cursor:"pointer",
            backgroundColor:state.isSelected ? "var(--color-bg)": "var(--color-bg)",
            color:"var(--color-text)",
            ":active": {
                ...provided[":active"],
                backgroundColor:"var(--color-bg-alpha)"
            }  
        }),
        control:(provided) => ({
            ...provided,
            border: "1px solid var(--color-bg)",
            boxShadow:"var(--shadow)",
            "&:hover" : {borderColor:"none"},
            padding:"14px",
            borderRadius:"9px",
            backgroundColor:"var(--color-bg)",
            color:"var(--color-text)",
            cursor:"pointer"
        }),
        singleValue:(base) => ({...base,color:"var(--color-text)"}),
        indicatorSeparator: () => ({display:'none'}),
        dropdownIndicator: base => ({
            ...base,
            color: "var(--color-search)"
        }),
        placeholder:(styles) => {
            return {
                ...styles,
                color:"var(--color-text)"
            }
        },
    }
})`

@media(max-width:550px) {
        margin-top:20px;
}
& > div[id] {
    background-color:var(--color-bg)
}
`