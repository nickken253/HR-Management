import React from "react";
import {Logo} from "../../../assets/svgs";
import * as SC from './Layout.styled'
interface LayoutProps {
  children: React.ReactNode;
  title: string;
}
export const Layout = ({ children, title }: LayoutProps) => {
  return (
    <SC.Container>
      <SC.Header>
        <SC.Logo src={Logo} alt="logo" />
        <SC.Title>HR Management System</SC.Title>
      </SC.Header>
      <SC.Content>
        <SC.Title>{title}</SC.Title>
        <SC.ChildrenWrapper>
          {children}
        </SC.ChildrenWrapper>
      </SC.Content>
    </SC.Container>
  );
};
