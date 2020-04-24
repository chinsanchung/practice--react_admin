import Members from "../model/Members";
import paging from "../../util/paging";

export const GET_LIST = async (req, res) => {
  console.log("MemberController - GET_LIST()");
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
      const results = await Members.find({}).sort(name);

      paging(res, results, pageIndex, perPage, "Members");
    } else {
      const results = await Members.find({
        name: { $regex: JSON.parse(filter).q, $options: "i" },
      }).sort(name);

      console.log(
        `membersController - GET_LIST FILTER: ${JSON.parse(filter).q}`,
      );
      paging(res, results, pageIndex, perPage, "Members");
    }
  } catch (error) {
    console.log(`Error on Members - GET_LIST(): ${error}`);
  }
};

export const GET_ONE = async (req, res) => {
  console.log("memberController - GET_ONE()");
  const {
    params: { id },
  } = req;

  try {
    const result = await Members.findById(id);

    res.json(result);
    res.end();
  } catch (error) {
    console.log(`Error on Members - GET_ONE(): ${error}`);
  }
};

export const UPDATE = async (req, res) => {
  console.log("memberController - UPDATE()");
  const {
    params: { id },
    body: { member_id, name, phoneNumber, email },
  } = req;

  try {
    const result = await Members.updateOne(
      { _id: id },
      {
        $set: { member_id, name, phoneNumber, email },
      },
    );

    console.log(`Member is updated: ${result}`);
    res.json(result);
    res.end();
  } catch (error) {
    console.log(`Error on Members - UPDATE(): ${error}`);
  }
};

export const CREATE = async (req, res) => {
  console.log("memberController - CREATE()");
  const {
    body: { avatar, member_id, name, phoneNumber, email },
  } = req;

  try {
    const result = new Members({
      member_id,
      name,
      phoneNumber,
      email,
      avatar,
    });
    await result.save();

    res.json(result);
    res.end();
  } catch (error) {
    console.log(`Error on memberController - CREATE(): ${error}`);
  }
};

export const DELETE = async (req, res) => {
  console.log("memberController - DELETE()");
  const {
    params: { id },
  } = req;

  await Members.findOneAndRemove({ _id: id });

  console.log("Member is deleted");
  res.json(req.params);
  res.end();
};
