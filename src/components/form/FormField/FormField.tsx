import React from "react";
import { Form, FormProps, FormItemProps } from "antd";
import { FormInput } from "../FormInput/FormInput";
import { FormLabel } from "../FormLabel/FormLabel";
import * as S from "./FormField.styled"; // Assuming styled components are imported here

interface IFormFieldProps {
  component?: string;
  children?: React.ReactNode;
  name?: string;
  formLabel?: string;
  rules?: any;
}
export const FormField: React.FC<IFormFieldProps> = (props) => {
  const {formLabel, name, rules, children, ...rest} = props;
  return (
    <S.Field {...rest}>
      <FormLabel label={formLabel ?? ""} />
      <S.Items
        name={name}
        rules={rules}
      >
        {children}
      </S.Items>
    </S.Field>
  );
};
