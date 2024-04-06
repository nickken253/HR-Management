import { Select } from "antd";
import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 12px 30px;

  background: #ffffff;
  box-shadow: 0px 3px 15px #eceef0;

  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const Logo = styled.img`
  width: 36px;
`;

export const Title = styled.h4`
  font-weight: 300;
`;

export const LogoTitleWrapper = styled.div`
  display: flex;
  gap: 16px;
`;
export const LanguageUserWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

export const LanguageSelect = styled(Select)`
  width: 120px;
`;
