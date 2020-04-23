import React from "react";
import { Create, SimpleForm, TextInput } from "react-admin";

function AnnounceCreate(props) {
  return (
    <Create {...props}>
      <SimpleForm redirect="list">
        <TextInput source="title" label="제목" />
        <TextInput source="description" label="내용" />
      </SimpleForm>
    </Create>
  );
}

export default AnnounceCreate;
