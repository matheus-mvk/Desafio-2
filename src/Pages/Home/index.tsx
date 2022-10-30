import { MainContainer, FormContainer } from "./style";
import { InputData } from "../../components/InputData";
import { SelectsDestiny } from "../../components/SelectsDestiny";
import { InputSubmit } from "../../components/InputSubmit";

const Home: React.FC = () =>{
    return(
        <MainContainer>
            <FormContainer>
                <InputData/>
                <SelectsDestiny/>
                <InputSubmit/>
            </FormContainer>
        </MainContainer>
    );
}
export{ Home };