
import React from "react"
import { QueryClient, QueryClientProvider } from "react-query"
import { ReactQueryDevtools } from 'react-query/devtools'

import {BrowserRouter as Router,Routes,Route } from "react-router-dom"

import { Home } from "./pages/home"
import { Details } from "./pages/details"

import styled from "styled-components"
import { HelmetProvider } from "react-helmet-async"

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
        },
    },
});
export const App:React.FC = () => {
    return (
        <HelmetProvider>
            <QueryClientProvider client={queryClient}>
            <Wrapper>
                <Router>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/:code" element={<Details/>} />
                    </Routes>
                </Router>
            </Wrapper>
            <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
        </HelmetProvider>
    )
}
const Wrapper = styled.div`
    min-height: 100vh;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    background-color:var(--color-bg);
`