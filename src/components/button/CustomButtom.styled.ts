import styled, { css } from "styled-components";
import { Button as AntdButton, ButtonProps } from "antd";
import { ButtonType } from "../../config/type";

const buttonStyles = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
  border: none;

  $.ant-btn .span {
    color: white;
  }
`;

const loginStyles = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 24px;
  height: fit-content;
  font-size: 16px;
  gap: 10px;
  color: #ffffff;
  size: 16px;
  background: #0091ff;
  border-radius: 6px;
  &:hover {
    color: #ffffff !important;
    background: #0d84df !important;
  }
`;
const defaultStyles = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 24px;
  height: fit-content;
  font-size: 16px;
  gap: 10px;
  color: #ffffff;
  size: 16px;
  background: red;
  border-radius: 6px;

`;

const tabStyles = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 24px;
  gap: 10px;
  color: #ffffff;
  text-size: 16px;
  background: #0091ff;
  border-radius: 6px;
`;

export const CustomButton = styled(AntdButton)<{ buttonType?: ButtonType }>`
  ${buttonStyles};
  ${({ buttonType }) => {
    switch (buttonType) {
      case "login":
        return loginStyles;
      case "default":
        return defaultStyles;
      case "tab":
        return tabStyles;
      default:
        return defaultStyles;
    }
  }};
`;
