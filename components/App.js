import React from "react";
import { Admin, Resource } from "react-admin";
import authProvider from "../util/authProvider";
import dataProvider from "../util/dataProvider";
import DashBoard from "./DashBoard";

import shopComponents from "./Shop/index";
import memberComponents from "./Member/index";
import eventComponents from "./Event/index";
import announceComponents from "./Announce";

function App() {
  return (
    <Admin
      authProvider={authProvider}
      dashboard={DashBoard}
      dataProvider={dataProvider("http://localhost:4000")}
    >
      <Resource name="Shops" {...shopComponents} />
      <Resource name="Members" {...memberComponents} />
      <Resource name="Events" {...eventComponents} />
      <Resource name="Announces" {...announceComponents} />
    </Admin>
  );
}

export default App;
