import { useEffect, useState } from "react";
import { FieldContainer, Title2, TextP } from "./style";

import axios from "axios";

export interface ICity {
    name:string;
}

export interface ICountry {
    name:string;
}


const SelectsDestiny: React.FC = () =>{
    


    const [ countrys, setCountrys] = useState<ICountry[]>([]);
    const [ citys, setCitys] = useState<ICity[]>([]);
    const [ myCountrys, setMyCountrys] = useState<string>("");
    const [ myCitys, setMyCitys] = useState<string>("");

    

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

    function addMyCountry(event: any){
        const country = event.target.value;
        setMyCountrys((prev) => prev + country + ", ");
    }

    function addMyCitys(event: any){
        const city = event.target.value;
        setMyCitys((prev) => prev + " " + city + ";");
    }

    return(
        <>
            
                <FieldContainer>
                    <Title2>
                        Destinos de interesse
                    </Title2>
                    <select name="Countrys" required onChange={() => addMyCountry(event)}>
                        {countrys.map((country) =>{
                            return <option value={country.name}>{country.name}</option>;

                        })}
                    </select>
                    
                    <TextP>My countrys:{myCountrys}</TextP>
                    
                    <select name="City" required onChange={() => addMyCitys(event)}>
                        {citys.map((city) =>{
                            return <option value={city.name}>{city.name}</option>;

                        })}
                    </select>
                    
                    <TextP>My citys:{myCitys}</TextP>

                </FieldContainer>  
            
        </>
    );
}

export { SelectsDestiny };