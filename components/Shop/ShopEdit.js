import React from "react";
import { Edit, SimpleForm, TextInput } from "react-admin";

function ShopEditTitle({ record }) {
  return <span>Shop "{record && record.name}"</span>;
}

function ShopEdit(props) {
  return (
    <Edit title={<ShopEditTitle />} {...props}>
      <SimpleForm>
        <TextInput disabled source="id" />
        <TextInput source="shopType" label="분류" />
        <TextInput source="name" label="상점 이름" />
        <TextInput source="description" label="상점 소개" />
        <TextInput source="menuDescription" label="메뉴 소개" />
        <TextInput source="address" labe="주소" />
      </SimpleForm>
    </Edit>
  );
}

export default ShopEdit;
