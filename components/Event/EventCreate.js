import React from "react";
import {
  Create,
  SimpleForm,
  TextInput,
  FileInput,
  FileField,
} from "react-admin";

function EventCreate(props) {
  return (
    <Create {...props}>
      <SimpleForm redirect="list">
        <TextInput source="title" label="제목" />
        <TextInput source="description" label="내용" />
        <FileInput source="file" label="관련 문서" accept="application/pdf">
          <FileField source="src" title="title" />
        </FileInput>
      </SimpleForm>
    </Create>
  );
}

export default EventCreate;
