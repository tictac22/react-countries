
import React, { useEffect, useState,memo } from "react";

import {BsMoon,BsMoonFill} from 'react-icons/bs';
import styled from "styled-components";

export const Header:React.FC = memo(() => {
    console.log("hello header")
    const [theme,setTheme] = useState<string>(localStorage.getItem("theme") ?? "light");
    useEffect(()=>{
            document.body.setAttribute("data-theme",theme);
            localStorage.setItem("theme",theme)
    },[theme]);
    const toggleTheme = ():void => setTheme(theme === "light"? "dark":"light")
    return (
        <HeaderStyled>
            <div className="container">
                <Wrapper>
                    <h1>
                        Where in the world?
                    </h1>
                    <div style={{whiteSpace:"nowrap"}} onClick={toggleTheme}>
                        {theme === "light" ? <BsMoon/> : <BsMoonFill/>}
                        <p>{theme === "light" ? "Light mode" : "Dark mode"}</p>
                    </div>
                </Wrapper>
            </div>
        </HeaderStyled>
    )
})
const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding:25px 0;
    color:var(--color-text);
    & h1 {
        font-weight:bold;
        font-size:20px;
        color: inherit;
        @media(min-width:500px) {
            font-size:28px
        }
    }
    & div {
        display: flex;
        align-items: center;
        justify-content: center;
        color: inherit;
        cursor: pointer;
        & p {
            margin-left: 10px;
            font-size: 15px;
            font-weight:600;
            user-select: none;
        }
    }
`
const HeaderStyled= styled.header`
    background-color: var(--color-ui);
    box-shadow:var(--shadow);
`