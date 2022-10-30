import { FieldContainer, InputDatas, Title2 } from "./style"
const InputData: React.FC = () => {
    //const [name, setName] = useState('');
    //const [mail, setMail] = useState('');
    //const [tel, setTel] = useState('');
    //const [cpf, setCpf] = useState('');

    //const handleNameChange = (e: any) =>{
    //    setName(e.target.value);
    //}
    //const handleMailChange = (e: any) =>{
       
    //    setMail(e.target.value);
    //}
    //const handleTelChange = (e: any) =>{
        
    //    setTel(e.target.value);
    //}
    //const handleCpfChange = (e: any) =>{
        
    //    setCpf(e.target.value);
    //}
    
    //const handleSubmit = (e: any) =>{

    //    alert('Os dados foram submetidos!');
    //    e.preventDefault()
    //}
    return(
        <>
            <FieldContainer>
                        <Title2>
                        Dados pessoais
                        </Title2>

                        <label htmlFor="name">Name:</label>
                        <InputDatas type= "text" name="Name" placeholder="Name" />

                        <label htmlFor="email">Email:</label>
                        <InputDatas type="email" name="email" placeholder="Email"  />

                        <label htmlFor="telefone">Telefone:</label>
                        <InputDatas type="tel" name="CPF" placeholder="Telefone"  />

                        <label htmlFor="cpf">CPF:</label>
                        <InputDatas type="text" name="CPF" placeholder="000.000.000-00"/>

            </FieldContainer>
        </>
    )
}

export { InputData };