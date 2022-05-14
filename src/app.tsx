
import React, {Suspense} from "react"
import { QueryClient, QueryClientProvider } from "react-query"
import { ReactQueryDevtools } from 'react-query/devtools'

import {BrowserRouter as Router,Routes,Route } from "react-router-dom"
import { Header } from "./components/header";
const DynamicHome = React.lazy(() => import("./pages/home"))
const DynamicDetails = React.lazy(() => import("./pages/details"))

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
                <Header/>
                <Suspense fallback={<div></div>}>
                    <Router>
                        <Routes>
                            <Route path="/" element={<DynamicHome />} />
                            <Route path="/:code" element={<DynamicDetails/>} />
                        </Routes>
                    </Router>
                </Suspense>
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