import * as S from "./Header.styled";
import { Logo } from '../../assets/svgs'
import { Avatar } from "antd";
import { AvatarBackGroundColor } from "../../config/style";
import { EngFlag } from "../../assets/svgs";
import { LanguageSelect } from "../Selector/LanguageSelector/LanguageSelector";

interface HeaderProps {
  children?: React.ReactNode;
  letterAvatar: string;
  urlAvatar?: string;
}

const setLetterAvatar = (username: string | any): string => {
  if (!username) {
    return "";
  }
  const initials = username.substring(0, 2).toUpperCase();
  return initials;
};

export const Header = ({ letterAvatar, urlAvatar }: HeaderProps) => {
  return (<S.Header>

    <S.LogoTitleWrapper>
      <S.Logo src={Logo} alt="logo" />
      <S.Title>HR Management System</S.Title>
    </S.LogoTitleWrapper>

    <S.LanguageUserWrapper>
      <LanguageSelect />
      <Avatar style={{ backgroundColor: `${AvatarBackGroundColor[letterAvatar?.length % 8]}` }}>{setLetterAvatar(letterAvatar)}</Avatar>
    </S.LanguageUserWrapper>
  </S.Header>);
};
