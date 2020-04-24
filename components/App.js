import React, { useEffect } from "react";
import { Admin, Resource } from "react-admin";
import dotenv from "dotenv";
dotenv.config();
import authProvider from "../util/authProvider";
import dataProvider from "../util/dataProvider";
import DashBoard from "./DashBoard";

import shopComponents from "./Shop/index";
import memberComponents from "./Member/index";
import eventComponents from "./Event/index";
import announceComponents from "./Announce";

// const uploadCapableDataProvider = addUploadFeature(dataProvider('http://localhost:4000'));

function App() {
  return (
    <Admin
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
