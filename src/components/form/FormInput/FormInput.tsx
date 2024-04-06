import { Input, InputProps } from "antd";
import * as S from "./FormInput.styled";

interface IFormInputProps extends InputProps {
    component?: string;
}

export const FormInput: React.FC<IFormInputProps> = (props) => {
    return (
        <S.FormInput {...props} />
    );
};