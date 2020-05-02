import React from "react";
import {
  Create,
  SimpleForm,
  TextInput,
  ImageInput,
  ImageField,
} from "react-admin";

function MemberCreate(props) {
  return (
    <Create {...props}>
      <SimpleForm redirect="list">
        <ImageInput
          source="avatar"
          label="아바타"
          accept="image/*"
          name="avatar"
          encType="multipart/form-data"
        >
          <ImageField source="src" title="title" />
        </ImageInput>
        <TextInput source="member_id" label="아이디" />
        <TextInput source="name" label="회원 이름" />
        <TextInput source="phoneNumber" label="전화번호" />
        <TextInput source="email" label="이메일" />
      </SimpleForm>
    </Create>
  );
}

export default MemberCreate;

/*
<ImageInput source="avatar" label="아바타" accept="image/*">
          <ImageField source="src" title="title" />
        </ImageInput>
*/
