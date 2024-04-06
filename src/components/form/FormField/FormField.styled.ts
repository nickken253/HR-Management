import Item from "antd/lib/form/FormItem";
import { Form, Select, Input } from "antd";
import styled from "styled-components";

export const Field = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    font-size: 16px;
    text-align: left;
    &:focus {
        outline: none;
    }
`;

export const Items = styled(Form.Item)`
  width: 100%;
  display: flex;
  flex-direction: column;
  font-size: 16px;
  text-align: left;
  &:focus {
    outline: none;
  }

  &.ant-form-item-has-error .ant-form-item-explain-error {
    font-weight: 100;
    font-size: 12px;
    padding-left: 0.5rem;
  }

  &.ant-form-item-has-error .ant-input-status-error,
  &.ant-form-item-has-error .ant-input-status-error:hover,
  &.ant-form-item-has-error .ant-input-status-error:focus {
    background-color: #ffefef;
  }
  &.ant-form-item-has-error .ant-select-status-error,
  &.ant-form-item-has-error .ant-select-status-error:hover,
  &.ant-form-item-has-error .ant-select-status-error:focus {
    background-color: #ffefef;
  }
`;

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