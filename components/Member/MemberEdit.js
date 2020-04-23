import React from "react";
import { Edit, SimpleForm, TextInput } from "react-admin";

function MemberEditTitle({ record }) {
  return <span>Member "{record && record.name}"</span>;
}

function MemberEdit(props) {
  return (
    <Edit title={<MemberEditTitle />} {...props}>
      <SimpleForm>
        <TextInput disabled source="id" />
        <TextInput source="member_id" label="아이디" />
        <TextInput source="name" label="회원 이름" />
        <TextInput source="phoneNumber" label="전화번호" />
        <TextInput source="email" label="이메일" />
      </SimpleForm>
    </Edit>
  );
}

export default MemberEdit;
