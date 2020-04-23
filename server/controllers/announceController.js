import Announces from "../model/Announces";
import paging from "../../util/paging";

export const GET_LIST = async (req, res) => {
  console.log("AnnounceController - GET_LIST()");
  const {
    query: { filter, pagination, sort },
  } = req;

  const pagination_ob = JSON.parse(pagination);
  const pageIndex = String(pagination_ob[0]);
  const perPage = String(pagination_ob[1]);
  const pageSort_ob = JSON.parse(sort);
  let name;

  try {
    if (filter === "{}") {
      const results = await Announces.find({}).sort(name);

      paging(res, results, pageIndex, perPage, "Announces");
    } else {
      const results = await Announces.find({
        title: { $regex: JSON.parse(filter).q, $options: "i" },
      }).sort(name);

      console.log(
        `AnnounceController - GET_LIST FILTER: ${JSON.parse(filter).q}`,
      );
      paging(res, results, pageIndex, perPage, "Announces");
    }
  } catch (error) {
    console.log(`Error on Announces - GET_LIST(): ${error}`);
  }
};

export const GET_ONE = async (req, res) => {
  console.log("announceController - GET_ONE()");
  const {
    params: { id },
  } = req;

  try {
    const result = await Announces.findById(id);

    res.json(result);
    res.end();
  } catch (error) {
    console.log(`Error on Announces - GET_ONE(): ${error}`);
  }
};

export const UPDATE = async (req, res) => {
  console.log("announceController - UPDATE()");
  const {
    params: { id },
    body: { title, description },
  } = req;

  try {
    const result = await Announces.updateOne(
      { _id: id },
      {
        $set: { title, description },
      },
    );

    console.log(`Announce is updated: ${result}`);
    res.json(result);
    res.end();
  } catch (error) {
    console.log(`Error on Announces - UPDATE(): ${error}`);
  }
};

export const CREATE = async (req, res) => {
  console.log("announceController - CREATE()");
  const {
    body: { title, description },
  } = req;

  try {
    const result = new Announces({ title, description });
    await result.save();

    console.log(`Announce is created: ${result}`);
    res.json(result);
    res.end();
  } catch (error) {
    console.log(`Error on announceController - CREATE(): ${error}`);
  }
};

export const DELETE = async (req, res) => {
  console.log("announceController - DELETE()");
  const {
    params: { id },
  } = req;

  await Announces.remove({ _id: id });

  console.log(`Announce is deleted`);
  res.json(req.params);
  res.end();
};
