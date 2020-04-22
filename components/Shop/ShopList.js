import React, { useEffect } from "react";
import {
  Filter,
  TextInput,
  List,
  Datagrid,
  TextField,
  ShowButton,
  EditButton,
  DeleteButton,
} from "react-admin";

function ShopFilter(props) {
  return (
    <Filter {...props}>
      <TextInput label="검색" source="search" alwaysOn />
    </Filter>
  );
}

function ShopList(props) {
  return (
    <List title="Shop List" exporter={false} {...props}>
      <Datagrid>
        <TextField source="shopType" label="분류" />
        <TextField source="name" label="상점 이름" />
        <TextField source="description" label="상점소개" />
        <TextField source="menuDescription" label="메뉴소개" />
        <TextField source="address" label="주소" />
        <ShowButton />
        <EditButton />
        <DeleteButton />
      </Datagrid>
    </List>
  );
}

export default ShopList;
