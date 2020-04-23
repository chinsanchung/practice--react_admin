import React from "react";
import { Show, SimpleShowLayout, TextField } from "react-admin";

function AnnounceShow(props) {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField source="title" label="제목" />
        <TextField source="description" label="내용" />
      </SimpleShowLayout>
    </Show>
  );
}

export default AnnounceShow;
