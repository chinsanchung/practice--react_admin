import React from "react";
import { Admin } from "react-admin";
import serverProvider from "ra-data-json-server";

const dataProvider = serverProvider("https://jsonplaceholder.typicode.com");

function App() {
  return <Admin dataProvider={dataProvider}></Admin>;
}

export default App;
