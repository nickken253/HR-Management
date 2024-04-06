import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { Employment } from '../components/Employment/Employment';
export const Employee = () => {
    const navigate = useNavigate();
  return (
    <Layout>
      <Employment/>
    </Layout>
  )
}
