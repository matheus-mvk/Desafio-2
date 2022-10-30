import { useEffect, useState } from "react";
import { FieldContainer, Title2 } from "./style";

import axios from "axios";

export interface ICity {
    name:string;
}

export interface ICountry {
    name:string;
}


const SelectsDestiny: React.FC = () =>{
    


    const [ countrys, setCountrys ] = useState<ICountry[]>([]);
    const [ citys, setCitys] = useState<ICity[]>([]);
    const [ myCountrys, setMyCountrys] = useState<string>("")

    

    useEffect(() => {
        axios.get("https://amazon-api.sellead.com/country")
        .then((response) => {
            setCountrys(response.data)
        })
    
        .catch(error => console.log(error))
    })

    useEffect(() => {
        axios.get("https://amazon-api.sellead.com/city")
        .then((response) => {
            setCitys(response.data)
        })
    
        .catch(error => console.log(error))
    })

    function getCountry(event: any){
        const pais = event.target.value;
        setMyCountrys((prev) => prev + pais + ", ");
        console.log(setMyCountrys);
    }
    return(
        <>
            
                <FieldContainer>
                    <Title2>
                        Destinos de interesse
                    </Title2>
                    <select name="Countrys" onChange={() => getCountry(event)}>
                        <option value="countrysSelected"selected>{myCountrys}</option>
                        {countrys.map((country) =>{
                            return <option value={country.name}>{country.name}</option>;

                        })}
                    </select>
                    
                    <select name="City" id="">
                        {citys.map((city) =>{
                            return <option value={city.name}>{city.name}</option>;

                        })}
                    </select>
                    
                </FieldContainer>  
            
        </>
    );
}

export { SelectsDestiny };