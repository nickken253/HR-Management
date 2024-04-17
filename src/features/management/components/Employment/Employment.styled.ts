import styled from "styled-components";
import { Table, Pagination } from "antd";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 23rem;
  gap: 1rem;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const RoutesLink = styled.div`
  display: flex;
  gap: 1rem;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
`;

export const SearchWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

export const SearchInput = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const TableWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const TableButtonWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

export const StyledTable = styled(Table)`
  background: white;
`;

export const StyledPagination = styled(Pagination)`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;
