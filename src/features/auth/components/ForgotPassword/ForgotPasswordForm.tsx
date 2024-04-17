import { FormField } from "../../../../components/form/FormField/FormField";
import { Form, type FormProps } from "antd";
import { CustomButton } from "../../../../components/button/CustomButton";
import * as S from "../AuthForm.styled";
import { loginWithUsernameAndPassword } from "../../api/login";
import { ILoginCredentials, ILoginResponse } from "../../../../interfaces/auth.interface";
import { CustomToast } from "../../../../components/notification/CustomToast";
interface LoginFormProps {
  onSuccess: () => void;
}


export const ForgotPasswordForm = ({ onSuccess }: LoginFormProps) => {
  const onFinish: FormProps<ILoginCredentials>["onFinish"] = async (values) => {
    const response: ILoginResponse = await loginWithUsernameAndPassword(values);
    if (response.data && !response.error) {
      CustomToast({ toastType: "success", message: "Login success" });
      // onSuccess();
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
        name="email"
        formLabel="Your Work Email :"
        rules={[{ required: true, message: "Please enter your email" }]}
      >
        <S.FormInput />
      </FormField>

      <CustomButton buttonType="login" htmlType="submit">
        Confirm & Send OTP
      </CustomButton>
      <S.FormSubLink to="/auth/login">
        Back to Sign In
      </S.FormSubLink>
    </Form>
  );
};
