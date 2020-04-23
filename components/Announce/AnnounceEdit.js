import React from "react";
import { Edit, SimpleForm, TextInput } from "react-admin";

function AnnounceEditTitle({ record }) {
  return <span>Event "${record && record.name}"</span>;
}

function AnnounceEdit(props) {
  return (
    <Edit title={<AnnounceEditTitle />} {...props}>
      <SimpleForm>
        <TextInput disabled source="id" />
        <TextInput source="title" label="제목" />
        <TextInput source="description" label="내용" />
      </SimpleForm>
    </Edit>
  );
}

export default AnnounceEdit;
