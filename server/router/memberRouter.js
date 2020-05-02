import express from "express";
import routes from "../routes";
import {
  GET_LIST,
  CREATE,
  GET_ONE,
  DELETE,
  UPDATE,
} from "../controllers/memberController";
import { uploadAvatar } from "../middlewares";

const memberRouter = express.Router();

memberRouter.get("", GET_LIST);
memberRouter.get(`${routes.id_url}/show`, GET_ONE);
memberRouter.post("", uploadAvatar, CREATE);
memberRouter.put(routes.id_url, UPDATE);
memberRouter.delete(routes.id_url, DELETE);

export default memberRouter;
