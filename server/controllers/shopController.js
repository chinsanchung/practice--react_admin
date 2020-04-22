import routes from "../routes";
import Shops from "../model/Shops";
import paging from "../../util/paging";

export const GET_LIST = async (req, res) => {
  console.log("shopController - GET_LIST()");
  const {
    query: { filter, pagination, sort },
  } = req;
  // Q: 처음 로딩이 느린 이유는?
  // const filter = req.body.filter || req.query.filter;
  // const pagination = req.body.pagination || req.query.pagination;
  // const sort = req.body.sort || req.query.sort;

  const pagination_ob = JSON.parse(pagination);
  const pageIndex = String(pagination_ob[0]);
  const perPage = String(pagination_ob[1]);
  const pageSort_ob = JSON.parse(sort);
  let name;

  if (pageSort_ob[1] === "DESC") {
    name = `-${pageSort_ob[0]}`;
  } else {
    name = pageSort_ob[0];
  }

  try {
    let paging_result;
    if (filter === "{}") {
      const results = await Shops.find({}).sort(name);
      paging(res, results, pageIndex, perPage, "shops");
    } else {
      const results = await Shops.find({
        name: JSON.parse(filter).serach,
      }).sort(name);
    }
  } catch (error) {
    console.log(`Error on Shops - GET_LIST(): ${error}`);
  }
};

export const GET_ONE = async (req, res) => {
  console.log("shopController - GET_ONE()");
  const {
    params: { id },
  } = req;
  try {
    const shops = await Shops.findById(id);
    res.json(shops);
    res.end();
  } catch (error) {
    console.log(`Error on Shops - GET_ONE() : ${error}`);
  }
};

export const UPDATE = async (req, res) => {
  console.log("shopController - UPDATE()");
  const {
    params: { id },
    body: { shopType, name, description, menuDescription, address },
  } = req;
  try {
    await Shops.updateOne(
      { _id: id },
      { $set: { shopType, name, description, menuDescription, address } },
    );
    console.log("Shops is updated");
    const shop = Shops.findById(id);
    res.json(shop);
    res.end();
  } catch (error) {
    console.log(`Error on Shops - UPDATE(): ${error}`);
  }
};

export const CREATE = async (req, res) => {
  console.log("shopController - CREATE()");
  const {
    body: { shopType, name, description, menuDescription, address },
  } = req;

  try {
    const result = new Shops({
      shopType,
      name,
      description,
      menuDescription,
      address,
    });
    await result.save();

    res.json(result);
    res.end();
  } catch (error) {
    console.log(error);
  }
};

export const DELETE = async (req, res) => {
  console.log("shopController - DELETE()");
  const {
    params: { id },
  } = req;
  await Shops.remove({ _id: id });
  console.log("Data Deleted");
  res.json(req.params);
  res.end();
};
