import express from "express";
import routes from "../routes";
import {
  GET_LIST,
  GET_ONE,
  CREATE,
  UPDATE,
  DELETE,
} from "../controllers/announceController";

const announceRouter = express.Router();

announceRouter.get("", GET_LIST);
announceRouter.get(`${routes.id_url}/show`, GET_ONE);
announceRouter.post("", CREATE);
announceRouter.put(routes.id_url, UPDATE);
announceRouter.delete(routes.id_url, DELETE);

export default announceRouter;
