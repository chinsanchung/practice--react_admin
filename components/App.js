import React, { useEffect } from "react";
import { Admin, Resource, ListGuesser } from "react-admin";
import authProvider from "../util/authProvider";
import fakeData from "../server/fakeData";
import fakeDataProvider from "ra-data-fakerest";
import dataProvider from "../util/dataProvider";
import DashBoard from "./DashBoard";
// Shop
import shopComponents from "./Shop/index";
// Members
import PersonIcon from "@material-ui/icons/Person";
// Events
import EventIcon from "@material-ui/icons/Event";
// Announces
import AnnouncementIcon from "@material-ui/icons/Announcement";

function App() {
  useEffect(() => {}, []);
  return (
    <Admin
      dashboard={DashBoard}
      dataProvider={dataProvider("http://localhost:4000")}
    >
      <Resource name="Shops" {...shopComponents} />
    </Admin>
  );
}

export default App;
