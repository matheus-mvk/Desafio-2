import { useState } from "react";
import { FieldContainer, Title2, InputData, FormContainer, InputSub } from "./style";





const RegisterForm: React.FC = () =>{
    const [name, setName] = useState('');
    const [mail, setMail] = useState('');
    const [tel, setTel] = useState('');
    const [cpf, setCpf] = useState('');

    const handleNameChange = (e: any) =>{
        const test = e.target.value;
        console.log(test);

        setName(e.target.value);
    }
    const handleMailChange = (e: any) =>{
        const test = e.target.value;
        console.log(test);

        setMail(e.target.value);
    }
    const handleTelChange = (e: any) =>{
        const test = e.target.value;
        console.log(test);

        setTel(e.target.value);
    }
    const handleCpfChange = (e: any) =>{
        const test = e.target.value;
        console.log(test);

        setCpf(e.target.value);
    }
    
    const handleSubmit = (e: any) =>{

        alert('Os dados foram submetidos!');
        e.preventDefault()
    }
    return(
        <>
            <FormContainer>
                    
                <FieldContainer>
                    <Title2>
                    Dados pessoais
                    </Title2>

                    <label htmlFor="name">Name:</label>
                    <InputData type= "text" name="Name" placeholder="Name" value={name} onChange={(e)=>{handleNameChange(e)}}/>

                    <label htmlFor="email">Email:</label>
                    <InputData type="email" name="email" placeholder="Email" value={mail} onChange={(e)=>{handleMailChange(e)}}/>

                    <label htmlFor="telefone">Telefone:</label>
                    <InputData type="tel" name="CPF" placeholder="Telefone" value={tel} onChange={(e)=>{handleTelChange(e)}}/>

                    <label htmlFor="cpf">CPF:</label>
                    <InputData type="text" name="CPF" placeholder="000.000.000-00" value={cpf} onChange={(e)=>{handleCpfChange(e)}}/>

                </FieldContainer>
            
                

                <FieldContainer>
                    <Title2>
                        Destinos de interesse
                    </Title2>
                    <select name="Países" id="">
                        <option value="">AAAA</option>
                        <option value="">BBBB</option>
                        <option value="">BBBB</option>
                    </select>
                    
                    <select name="Cidades" id="">
                        <option value="">BBBB</option>
                    </select>
                    
                </FieldContainer>
                <InputSub type="submit" name="register" onChange={(e)=>{handleSubmit(e)}}/>
            </FormContainer>
            
        </>
    );
}

export { RegisterForm };