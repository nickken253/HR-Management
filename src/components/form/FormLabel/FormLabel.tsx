import React from "react";
import * as S from "./FormLabel.styled"; // Assuming styled components are imported here

interface IFormLabelProps {
  label: string;
}

export const FormLabel: React.FC<IFormLabelProps> = (props) => {
  return <S.FormLabel>{props.label}</S.FormLabel>;
};
