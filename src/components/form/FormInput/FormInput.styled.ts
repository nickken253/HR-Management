import { Input } from "antd";
import styled from "styled-components";

export const FormInput = styled(Input)`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 12px;
  gap: 10px;

  width: 100%;
  height: 46px;

  background: #f1f3f5;
  border-radius: 6px;
  border: none;

  flex: none;
  order: 1;
  flex-grow: 0;

  &:hover,
  &:focus {
    background: #f1f3f5;
    border: none;
    outline: 0;
    box-shadow: none;
  }
`;
