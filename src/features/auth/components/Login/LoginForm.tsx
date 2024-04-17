import { FormField } from "../../../../components/form/FormField/FormField";
import { Form, type FormProps } from "antd";
import { CustomButton } from "../../../../components/button/CustomButton";
import * as S from "../AuthForm.styled";
import { getUser } from "../../api/getUser";
import { login, logout } from "../../../../lib/auth";
import {
  ILoginCredentials,
  ILoginResponse,
  IUserResponse,
} from "../../../../interfaces/auth.interface";
import { useDispatch } from "react-redux";
import { setUsername, AppDispatch } from "../../../../stores";
import { CustomToast } from "../../../../components/notification/CustomToast";
interface LoginFormProps {
  onSuccess: () => void;
}

export const LoginForm = ({ onSuccess }: LoginFormProps) => {
  const onFinish: FormProps<ILoginCredentials>["onFinish"] = async (values) => {
    const response: ILoginResponse = await login(values);
    console.log('response: ', response);

    if (response. data && !response.error) {
      CustomToast({ toastType: "success", message: "Login success" });
      onSuccess();
    } else {
      CustomToast({ toastType: "error", message: response.message.toString() });
    }
  };

  const onFinishFailed: FormProps<ILoginCredentials>["onFinishFailed"] = () => {
    CustomToast({ toastType: "error", message: "Login failed" });
  };
  return (
    <Form
      name="basic"
      style={{ width: "100%", display: "flex", flexDirection: "column" }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <FormField
        name="username"
        formLabel="Username :"
        rules={[{ required: true, message: "Please enter username" }]}
      >
        <S.FormInput />
      </FormField>

      <FormField
        name="password"
        formLabel="Password :"
        rules={[{ required: true, message: "Please enter password" }]}
      >
        <S.FormPassword />
      </FormField>

      <FormField
        name="company_id"
        formLabel="Factory :"
        rules={[{ required: true, message: "Please choose factory" }]}
      >
        <S.FormSelect
          placeholder="Select Factory"
          options={[
            { value: 1, label: "SBM" },
            { value: 2, label: "DMF" },
          ]}
        />
      </FormField>
      <CustomButton buttonType="login" htmlType="submit">
        Submit
      </CustomButton>
      <S.FormSubLink to="/auth/forgot-password">
        Forgot Your Password?
      </S.FormSubLink>
    </Form>
  );
};
