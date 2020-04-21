import React from "react";
import { Create, SimpleForm, TextInput } from "react-admin";

function ShopCreate(props) {
  return (
    <Create {...props}>
      <SimpleForm redirect="list">
        <TextInput source="shopType" label="분류" />
        <TextInput source="name" label="상점 이름" />
        <TextInput source="description" label="상점 소개" />
        <TextInput source="menuDescription" label="메뉴 소개" />
        <TextInput source="address" label="주소" />
      </SimpleForm>
    </Create>
  );
}

export default ShopCreate;
