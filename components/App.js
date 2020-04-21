import React, { useEffect } from "react";
import { Admin, Resource, ListGuesser } from "react-admin";
// import serverProvider from "ra-data-json-server";
import authProvider from "../util/authProvider";
import fakeData from "../server/db";
import fakeDataProvider from "ra-data-fakerest";
import DashBoard from "./DashBoard";
// Shop
import ShopList from "./Shop/ShopList";
import ShopEdit from "./Shop/ShopEdit";
import ShopCreate from "./Shop/ShopCreate";
import ShopShow from "./Shop/ShopShow";
import StorefrontIcon from "@material-ui/icons/Storefront";
// Members
import PersonIcon from "@material-ui/icons/Person";
// Events
import EventIcon from "@material-ui/icons/Event";
// Announces
import AnnouncementIcon from "@material-ui/icons/Announcement";

const dataProvider = fakeDataProvider(fakeData);

function App() {
  useEffect(() => {
    console.log(dataProvider);
  });
  return (
    <Admin dashboard={DashBoard} dataProvider={dataProvider}>
      <Resource
        name="shops"
        list={ShopList}
        show={ShopShow}
        edit={ShopEdit}
        create={ShopCreate}
        icon={StorefrontIcon}
      />
    </Admin>
  );
}

export default App;

// 데이터 연결 작업중
