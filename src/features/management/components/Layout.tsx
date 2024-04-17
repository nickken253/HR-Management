import React, { useEffect } from 'react'
import { Header } from '../../../components/header/Header'
import { useSelector } from 'react-redux'
import { RootState } from '../../../stores'
import { IUserData } from '../../../interfaces/auth.interface';
import { Drawer } from './Drawer/Drawer';
interface LayoutProps {
    children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
    
    const { username } = useSelector<RootState, IUserData>(
        (state) => state.user
    );
    console.log('username: ',username);
    
    return (
        <div>
            <Header letterAvatar={username} />
            <main>
                <Drawer />
                {children}
            </main>
        </div>
    )
}