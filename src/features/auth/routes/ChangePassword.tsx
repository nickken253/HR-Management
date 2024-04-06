import { useNavigate } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { ChangePasswordForm } from '../components/ChangePassword/ChangePasswordForm';
export const ChangePassword = () => {
    const navigate = useNavigate();
  return (
    <Layout title=' Forgot Password'>
      <ChangePasswordForm  onSuccess={() => navigate('/auth/login')}/>
    </Layout>
  )
}
