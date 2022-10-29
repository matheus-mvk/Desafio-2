import { FormContainer, MainContainer } from "./style";
import { RegisterForm } from "../../components/RegisterForm";


const Home: React.FC = () =>{
    return(
        <MainContainer>

            <FormContainer>

                <RegisterForm/>
                
            </FormContainer>
            
        </MainContainer>
    );
}
export{ Home };