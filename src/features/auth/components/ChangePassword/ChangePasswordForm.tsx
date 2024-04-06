import { FormField } from "../../../../components/form/FormField/FormField";
import { Form, type FormProps } from "antd";
import { CustomButton } from "../../../../components/button/CustomButton";
import * as S from "../AuthForm.styled";
import { login } from "../../api/login";
import {
  ILoginCredentials,
  ILoginResponse,
} from "../../../../interfaces/auth.interface";
import { CustomToast } from "../../../../components/notification/CustomToast";
interface LoginFormProps {
  onSuccess: () => void;
}

export const ChangePasswordForm = ({ onSuccess }: LoginFormProps) => {
  const onFinish: FormProps<ILoginCredentials>["onFinish"] = async (values) => {
    const response: ILoginResponse = await login(values);
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
        name="newPassword"
        formLabel="New Password"
        rules={[{ required: true, message: "Please enter new password" }]}
      >
        <S.FormPassword />
      </FormField>
      <FormField
        name="confirm Password"
        formLabel="Confirm Password"
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }: { getFieldValue: (name: string) => any }) => ({
            validator(_: any, value: any) {
              if (!value || getFieldValue('newPassword') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('The confirm password do not match!'));
            },
          }),
        ]}
      >
        <S.FormPassword />
      </FormField>

      <CustomButton buttonType="login" htmlType="submit">
        Confirm
      </CustomButton>
    </Form>
  );
};
