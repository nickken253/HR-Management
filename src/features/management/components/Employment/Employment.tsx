import * as S from './Employment.styled';
import { getEmployeeList } from '../../api/Employee';
import { useState, useEffect } from 'react';
import { IEmployeeResponse, IEmployeeData, IEmployee } from '../../../../interfaces/employee.interface';
export const Employment = () => {
  const columns = [
    {
      title: `Gender`,
      dataIndex: `gender`,
      key: `gender`,
    },
    {
      title: `NIK`,
      dataIndex: `nik`,
      key: `nik`,
    },
    {
      title: `Name`,
      dataIndex: `name`,
      key: `name`,
    },
    {
      title: `Card Number`,
      dataIndex: `cardNumber`,
      key: `cardNumber`,
    },
    {
      title: `Account Number`,
      dataIndex: `accountNumber`,
      key: `accountNumber`,
    },
    {
      title: `Family Card No.`,
      dataIndex: `familyCardNo`,
      key: `familyCardNo`,
    },
    {
      title: `Marriage Status`,
      dataIndex: `marriageStatus`,
      key: `marriageStatus`,
    },
    {
      title: `Mother Name`,
      dataIndex: `motherName`,
      key: `motherName`,
    },
    {
      title: `Place and Date Birth`,
      dataIndex: `placeAndDateBirth`,
      key: `placeAndDateBirth`,
    },
    // Gender, NIK, Name, Card Number, Account Number, Fimily Card No., Marriage Status, Mother Name, Place and Date birth
  ]

  const [employeeList, setEmployeeList] = useState([]);
  useEffect(() => {
    getEmployeeList().then((response) => {
      console.log(response);
      // console.log(response.data.data);
      setEmployeeList(response?.data?.data);
    });
  }, []);
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: any[]) => {
      console.log('selectedRows: ', selectedRows);
    },
    getCheckboxProps: (record: any) => ({
      disabled: record.name === 'Disabled User', // Column configuration not to be checked
      name: record.name,
    }),
  };
  return (
    <S.Container>
      <S.RoutesLink></S.RoutesLink>
      <S.Header>
        <S.Title>Employment Management</S.Title>
        <S.SearchWrapper>
          <S.SearchInput type="text" placeholder="Search" />
        </S.SearchWrapper>
      </S.Header>
      <S.TableWrapper>
        <S.TableButtonWrapper>

        </S.TableButtonWrapper>
        <S.StyledTable
          rowSelection={{
            type: 'checkbox',
            ...rowSelection,
          }}
          dataSource={employeeList}
          columns={columns}>

        </S.StyledTable>
        <S.StyledPagination></S.StyledPagination>
      </S.TableWrapper>
    </S.Container>
  )
}
