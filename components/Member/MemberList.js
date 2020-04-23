import React from "react";
import {
  Filter,
  SearchInput,
  List,
  Datagrid,
  TextField,
  ShowButton,
  EditButton,
  DeleteButton,
} from "react-admin";

function MemberFilter(props) {
  return (
    <Filter {...props}>
      <SearchInput source="q" alwaysOn placeholder="회원 이름" />
    </Filter>
  );
}

function MemberList(props) {
  return (
    <List
      title="회원 관리"
      filters={<MemberFilter />}
      exporter={false}
      {...props}
    >
      <Datagrid>
        <TextField source="member_id" label="아이디" />
        <TextField source="name" label="회원 이름" />
        <TextField source="phoneNumber" label="전화번호" />
        <TextField source="email" label="이메일" />
        <ShowButton />
        <EditButton />
        <DeleteButton />
      </Datagrid>
    </List>
  );
}

export default MemberList;
