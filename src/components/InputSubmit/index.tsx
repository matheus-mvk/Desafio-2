import { InputSub } from "./style"

const InputSubmit: React.FC = () =>{

    function handleSubmit(e:any){

        alert('Os dados foram submetidos!');
        e.preventDefault()
    }

    return(  
        <InputSub type="submit" name="register" value="Enviar" onChange={() => handleSubmit(event)}/>
    )
}
export { InputSubmit };