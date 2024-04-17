import { Select } from "antd";
import styled from "styled-components";

export const LanguageSelect = styled(Select)`
  /* language dropdown */

  /* Auto layout */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 10px;

  width: 98px;

  background: #f1f3f5 !important;
  border-radius: 6px;

  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const FlagWrapper = styled.img`
  margin-right: 5px;
`;

export const LanguageItem = styled.div`
padding-right: 20px;
margin-right: 20px;
`;
