import styled from "styled-components";
import { Drawer } from "antd";

export const DrawerWrapper = styled(Drawer)`

  display: flex;
  flex-direction: column;

  width: 329px;
  height: 1018px;

  background: #fbfcfd;
`;

export const DrawerTitle = styled.div`
  width: 281px;
  height: 33px;

  font-family: "SVN-Sofia Pro";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 33px;
  text-align: left;
  color: #006adc;
`;
