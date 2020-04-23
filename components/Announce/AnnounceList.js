import React from "react";
import {
  Filter,
  SearchInput,
  List,
  Datagrid,
  TextField,
  ShowButton,
  EditButton,
  DeleteButton,
} from "react-admin";

function AnnounceFilter(props) {
  return (
    <Filter {...props}>
      <SearchInput source="q" alwaysOn placeholder="공지사항 제목" />
    </Filter>
  );
}

function AnnounceList(props) {
  return (
    <List
      title="공지사항 관리"
      filters={<AnnounceFilter />}
      exporter={false}
      {...props}
    >
      <Datagrid>
        <TextField source="title" label="제목" />
        <TextField source="description" label="내용" />
        <ShowButton />
        <EditButton />
        <DeleteButton />
      </Datagrid>
    </List>
  );
}

export default AnnounceList;
