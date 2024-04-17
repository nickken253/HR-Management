import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
`;

export const Title = styled.h3``;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f9f9f9;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  drop-shadow: 0 0 0.5rem rgba(215, 219, 223, 0.5);
  border-radius: 0.5rem;
`;

export const Logo = styled.img`
  width: 100px;
  height: 100px;
`;

export const ChildrenWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 24px 24px 32px;
  gap: 10px;
  min-width: 320px;
  background: #fbfcfd;
  box-shadow: 0px 10px 25px rgba(215, 219, 223, 0.5);
  border-radius: 12px;

  flex: none;
  order: 1;
  align-self: stretch;
`;

export const Link = styled.a`
  margin-top: 1rem;
  color: #000;
  text-decoration: none;
`;

export const BackgoundImage = styled.img`
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
