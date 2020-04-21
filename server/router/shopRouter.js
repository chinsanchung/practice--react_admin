import express from "express";
import routes from "../routes";
import { getShopList } from "../controllers/shopController";

const shopRouter = express.Router();

shopRouter.get(routes.shops, getShopList);

export default shopRouter;
