import React from "react";
import { Title } from "react-admin";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";

function DashBoard() {
  return (
    <Card>
      <Title title="골목골목" />
      <CardHeader title="골목골목 관리자 페이지에 오신 것을 환영합니다." />
    </Card>
  );
}

export default DashBoard;
