import Events from "../model/Events";
import paging from "../../util/paging";

export const GET_LIST = async (req, res) => {
  console.log("EventController - GET_LIST()");
  const {
    query: { filter, pagination, sort },
  } = req;

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
    if (filter === "{}") {
      const results = await Events.find({}).sort(name);

      paging(res, results, pageIndex, perPage, "Events");
    } else {
      const results = await Events.find({
        title: { $regex: JSON.parse(filter).q, $options: "i" },
      }).sort(name);

      console.log(`eventController - GET_LIST FILTER: ${JSON.parse(filter).q}`);
      paging(res, results, pageIndex, perPage, "Events");
    }
  } catch (error) {
    console.log(`Error on Events - GET_LIST(): ${error}`);
  }
};

export const GET_ONE = async (req, res) => {
  console.log("eventController - GET_ONE()");
  const {
    params: { id },
  } = req;

  try {
    const result = await Events.findById(id);

    res.json(result);
    res.end();
  } catch (error) {
    console.log(`Error on Events - GET_ONE(): ${error}`);
  }
};

export const UPDATE = async (req, res) => {
  console.log("eventController - UPDATE()");
  const {
    params: { id },
    body: { title, description },
  } = req;

  try {
    const result = await Events.updateOne(
      { _id: id },
      {
        $set: { title, description },
      },
    );

    console.log(`Event is updated: ${result}`);
    res.json(result);
    res.end();
  } catch (error) {
    console.log(`Error on Events - UPDATE(): ${error}`);
  }
};

export const CREATE = async (req, res) => {
  console.log("eventController - CREATE()");
  const {
    body: { title, description, file_name, src },
  } = req;

  try {
    const result = Events.create({ title, description, file_name, src });

    console.log(`Event is created: ${result}`);
    res.json(result);
    res.end();
  } catch (error) {
    console.log(`Error on eventsController - CREATE(): ${error}`);
  }
};

export const DELETE = async (req, res) => {
  console.log("eventController - DELETE()");
  const {
    params: { id },
  } = req;

  await Events.findOneAndDelete({ _id: id });

  console.log(`Event is deleted`);
  res.json(req.params);
  res.end();
};
