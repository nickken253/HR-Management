import * as S from './DrawerItem.styled'

export interface IDrawerItemProps {
    icon?: string;
    title: string;
    to: string;
}
export const DrawerItem = ({ icon, title, to }: IDrawerItemProps) => {
    return (
        <S.DrawerItemWrapper>
            <S.IconWrapper>
                <img src={icon} alt={title} />
            </S.IconWrapper>
            <S.Title>{title}</S.Title>
        </S.DrawerItemWrapper>
    )
}
