
import React, { useState, useEffect } from "react"
import {Helmet} from "react-helmet-async";

import { useQuery,useInfiniteQuery } from "react-query"

import { Countries, Regions } from "../interfaces"

import { CountryLists } from "../components/countryLists"
import { Form } from "../components/formfieds"
import { Header } from "../components/header"

import { useInView } from 'react-intersection-observer'
import { useDebounce } from './../hooks/useDebounce';
import { getAllCountries,getCountriesByParams } from './../api/index';


const Home:React.FC = () => {
    const { ref, inView } = useInView()
    const [page,setPage] = useState(20);
    const {data, fetchNextPage, isLoading, error ,hasNextPage } = useInfiniteQuery("countries", async ({pageParam = 0}) => {
        const data = await getAllCountries(pageParam,page)
        setPage(page + 20)
        return data            
    },)

    const [nameSearch,setNameSearch] = useState<string>("");
    const debouncedValue = useDebounce(nameSearch,500)
    const [regionSearch,setRegionSearch] = useState<Regions>({value:"",label:""});
    const {data : filteredValue} = useQuery(["filteredCountries",debouncedValue,regionSearch?.value || "all"], async () => {
        if(!debouncedValue &&  !regionSearch.value) return []
        const data = getCountriesByParams(debouncedValue,regionSearch?.value)
        return data
    })

    useEffect(() => {
        if (inView && data?.pages[data.pages.length - 1].length > 0 && filteredValue.length === 0) {
            fetchNextPage({pageParam:page - 20})
        }
    },[inView])

    return (
        <>  
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Form nameSearch={nameSearch} setNameSearch={setNameSearch} setRegionSearch={setRegionSearch}  />
            <CountryLists data={data!} filteredValue={filteredValue} isLoading={isLoading} error={error!} />
            <div ref={ref}></div>
        </>
    )
}
export default Home