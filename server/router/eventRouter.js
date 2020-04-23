import express from "express";
import routes from "../routes";
import {
  GET_ONE,
  GET_LIST,
  CREATE,
  UPDATE,
  DELETE,
} from "../controllers/eventController";

const eventRouter = express.Router();

eventRouter.get("", GET_LIST);
eventRouter.get(`${routes.id_url}/show`, GET_ONE);
eventRouter.post("", CREATE);
eventRouter.put(routes.id_url, UPDATE);
eventRouter.delete(routes.id_url, DELETE);

export default eventRouter;
