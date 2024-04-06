import React from "react";
import { ButtonProps } from "antd";
import * as S from "./CustomButtom.styled";
import { ButtonType } from "../../config/type";

interface CustomButtonProps extends ButtonProps {
  buttonType: ButtonType; // Loại button: default, tab, login
  icon?: React.ReactNode; // Icon của button
}

export const CustomButton: React.FC<CustomButtonProps> = (props) => {
  const { buttonType, ...rest } = props;
  return <S.CustomButton {...rest} buttonType={buttonType} />;
};
