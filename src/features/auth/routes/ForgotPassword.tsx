import { useNavigate } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { ForgotPasswordForm } from '../components/ForgotPassword/ForgotPasswordForm';
export const ForgotPassword = () => {
    const navigate = useNavigate();
  return (
    <Layout title=' Forgot Password'>
      <ForgotPasswordForm  onSuccess={() => navigate('/auth/login')}/>
    </Layout>
  )
}
