import { Select, Input } from "antd";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
export const FormPassword = styled(Input.Password)`
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

export const FormSelect = styled(Select)`
  display: flex;
  flex-direction: row;
  align-items: center;
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
    background-color: green;
    background: #f1f3f5;
    border: none;
    outline: 0;
    box-shadow: none;
  }
`;

export const FormSubLink = styled(Link)`
  display: flex;
  font-family: "Sofia Pro";
  font-size: 14px;
  font-weight: 400;
  justify-content: center;
  text-decoration: none;

  gap: 10px;
  margin-top: 10px;
`;