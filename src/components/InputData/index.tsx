import { useState } from "react";
import { FieldContainer, InputDatas, Title2 } from "./style"
const InputData: React.FC = () => {
    const [name, setName] = useState('');
    const [mail, setMail] = useState('');
    const [tel, setTel] = useState('');
    const [cpf, setCpf] = useState('');

    function handleNameChange(e: any){
        setName(e.target.value);
    }
    function handleMailChange(e: any){
       
        setMail(e.target.value);
    }
    function handleTelChange(e: any){
        
        setTel(e.target.value);
    }
    function handleCpfChange(e: any){
        
        setCpf(e.target.value);
    }
    
    
    return(
        <>
            <FieldContainer>
                        <Title2>
                        Dados pessoais
                        </Title2>

                        <label htmlFor="name">Name:</label>
                        <InputDatas type= "text" name="Name" placeholder="Name" required onChange={() => handleNameChange(event)}/>

                        <label htmlFor="email">Email:</label>
                        <InputDatas type="email" name="email" placeholder="Email" required onChange={() => handleMailChange(event)}/>

                        <label htmlFor="telefone">Telefone:</label>
                        <InputDatas type="tel" name="CPF" placeholder="Telefone" required onChange={() => handleTelChange(event)}/>

                        <label htmlFor="cpf">CPF:</label>
                        <InputDatas type="text" name="CPF" placeholder="000.000.000-00" required onChange={() => handleCpfChange(event)}/>

            </FieldContainer>
        </>
    )
}

export { InputData };