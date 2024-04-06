import React from 'react'
import { Header } from '../../../components/header/Header'
import { useSelector } from 'react-redux'
import { RootState } from '../../../stores'
import { IUserData } from '../../../interfaces/auth.interface';

interface LayoutProps {
    children: React.ReactNode;
}
export const Layout = ({ children }: LayoutProps) => {
    const { username } = useSelector<RootState, IUserData>(
        (state) => state.user
      );
    //   debugger;
    return (
        <div>
            <Header letterAvatar={username}/>
            {/* <Header letterAvatar='test'/> */}
            <main>
                {children}
            </main>
        </div>
    )
}