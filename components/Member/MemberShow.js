import React from "react";
import { Show, SimpleShowLayout, TextField } from "react-admin";

function MemberShow(props) {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField source="member_id" label="아이디" />
        <TextField source="name" label="회원 이름" />
        <TextField source="phoneNumber" label="전화번호" />
        <TextField source="email" label="이메일" />
      </SimpleShowLayout>
    </Show>
  );
}

export default MemberShow;
