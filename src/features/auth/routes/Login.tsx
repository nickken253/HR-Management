import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { LoginForm } from '../components/Login/LoginForm';
export const Login = () => {
    const navigate = useNavigate();
  return (
    <Layout title='Sign In'>
      <LoginForm  onSuccess={() => navigate('/management/employee')}/>
    </Layout>
  )
}
