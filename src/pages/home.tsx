
import React, { useState } from "react"

import { useQuery } from "react-query"

import { fetchCountries } from "../api"
import { Countries, Regions } from "../interfaces"

import { CountryLists } from "../components/countryLists"
import { Form } from "../components/formfieds"
import { Header } from "../components/header"

export const Home:React.FC = () => {
    const {isLoading, error, data } = useQuery<Countries[],boolean>("countries",fetchCountries);
    const [nameSearch,setNameSearch] = useState<string>("");
    const [regionSearch,setRegionSearch] = useState<Regions>({value:"",label:""});
    const mutatedData = (() => {
        let  datas = data;
        datas = datas?.filter(item=>item.name.toLowerCase().trim().includes(nameSearch.trim().toLowerCase()));
        if(regionSearch) {
            datas = datas?.filter(item=>item.region.toLowerCase().includes(regionSearch.value.toLowerCase()));
        }
        return datas
    })();

    return (
        <>
            <Header/>
            <Form nameSearch={nameSearch} setNameSearch={setNameSearch} setRegionSearch={setRegionSearch}  />
            <CountryLists data={mutatedData!} isLoading={isLoading} error={error!} />
        </>
    )
}