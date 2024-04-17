import styled from "styled-components";

export const DrawerItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 10px;
  gap: 10px;
  height: fit-content;
  background: #f1f3f5;
  border-radius: 8px;
`;

export const IconWrapper = styled.div`
  /* icon */

  /* Auto layout */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 8px;
  gap: 10px;

  width: 36px;
  height: 36px;

  background: #fbfdff;
  box-shadow: 0px 6px 9px rgba(148, 186, 44, 0.15);
  border-radius: 30px;
`;

export const Title = styled.div`

  font-family: "SVN-Sofia Pro";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  /* identical to box height, or 24px */
  letter-spacing: -0.01em;

  /* Text12 */
  color: #11181c;
`;
