import routes from "../routes";
import shopdata from "../db";

export const getShopList = (req, res) => {
  res.render("shops", shopdata);
};
