import React from "react";
import { Create, SimpleForm, TextInput } from "react-admin";

function MemberCreate(props) {
  return (
    <Create {...props}>
      <SimpleForm redirect="list">
        <TextInput source="member_id" label="아이디" />
        <TextInput source="name" label="회원 이름" />
        <TextInput source="phoneNumber" label="전화번호" />
        <TextInput source="email" label="이메일" />
      </SimpleForm>
    </Create>
  );
}

export default MemberCreate;
