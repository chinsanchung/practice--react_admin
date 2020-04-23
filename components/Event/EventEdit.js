import React from "react";
import { Edit, SimpleForm, TextInput } from "react-admin";

function EventEditTitle({ record }) {
  return <span>Event "${record && record.name}"</span>;
}

function EventEdit(props) {
  return (
    <Edit title={<EventEditTitle />} {...props}>
      <SimpleForm>
        <TextInput disabled source="id" />
        <TextInput source="title" label="제목" />
        <TextInput source="description" label="내용" />
      </SimpleForm>
    </Edit>
  );
}

export default EventEdit;
