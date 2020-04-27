import React from "react";
import {
  Filter,
  SearchInput,
  List,
  Datagrid,
  TextField,
  FileField,
  ShowButton,
  EditButton,
  DeleteButton,
} from "react-admin";

function EventFilter(props) {
  return (
    <Filter {...props}>
      <SearchInput source="q" alwaysOn placeholder="이벤트 제목" />
    </Filter>
  );
}

function EventList(props) {
  return (
    <List
      title="이벤트 관리"
      filters={<EventFilter />}
      exporter={false}
      {...props}
    >
      <Datagrid>
        <TextField source="title" label="제목" />
        <TextField source="description" label="내용" />
        <FileField
          source="src"
          title="file_name"
          label="관련 문서"
          target="_blank"
        />
        <ShowButton />
        <EditButton />
        <DeleteButton />
      </Datagrid>
    </List>
  );
}

export default EventList;
