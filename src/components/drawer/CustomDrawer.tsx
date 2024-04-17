import * as S from "./CustomDrawer.styled";
import { Logo } from '../../assets/svgs'
import { Avatar, Button } from "antd";
import { IDrawerItemProps } from "./drawerItem/DrawerItem";
import { DrawerItem } from "./drawerItem/DrawerItem";
import "./CustomDrawer.css"

interface ICustomDrawerProps {
    children?: React.ReactNode;
    listItem: IDrawerItemProps[];
}

export const CustomDrawer = ({ listItem }: ICustomDrawerProps) => {
    return (
        <S.DrawerWrapper
            placement="left"
            closable={true}
            open={true}
            mask={false}
            key="left"
            getContainer={false}
            zIndex={1}
        // headerStyle={{ backgroundColor: "#f0f2f5", padding: "0px 16px" }}
        >
            <S.DrawerTitle>General</S.DrawerTitle>
            {listItem?.map((item, index) => (
                <DrawerItem key={index} {...item} />
            ))}
        </S.DrawerWrapper>
    );
};
