import React from "react";
import { Show, SimpleShowLayout, TextField } from "react-admin";

function ShopShow(props) {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField source="shopType" label="분류" />
        <TextField source="name" label="상점 이름" />
        <TextField source="description" label="상점 소개" />
        <TextField source="menuDescription" label="메뉴 소개" />
        <TextField source="address" label="주소" />
      </SimpleShowLayout>
    </Show>
  );
}

export default ShopShow;
