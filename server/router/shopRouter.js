import express from "express";
import routes from "../routes";
import {
  GET_LIST,
  CREATE,
  GET_ONE,
  DELETE,
  UPDATE,
} from "../controllers/shopController";

const shopRouter = express.Router();

shopRouter.get("", GET_LIST);
shopRouter.get(`${routes.id_url}/show`, GET_ONE);
shopRouter.post("", CREATE);
shopRouter.delete(routes.id_url, DELETE);
shopRouter.put(routes.id_url, UPDATE);

export default shopRouter;
