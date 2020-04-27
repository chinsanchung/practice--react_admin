import express from "express";
import path from "path";
import fs from "fs";
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
    body: {
      id,
      image: { src },
      member_id,
      name,
      phoneNumber,
      email,
    },
  } = req;

  try {
    const result = await Members.findOneAndUpdate(
      { _id: id },
      {
        member_id,
        name,
        phoneNumber,
        email,
        src,
      },
    );

    console.log(
      `Member is updated: ${
        (result.member_id, result.name, result.phoneNumber, result.email)
      }`,
    );
    res.json(result);
    res.end();
  } catch (error) {
    console.log(`Error on Members - UPDATE(): ${error}`);
  }
};

export const CREATE = async (req, res) => {
  console.log("memberController - CREATE()");
  const {
    body: {
      image: { src },
      member_id,
      name,
      phoneNumber,
      email,
      file_string,
    },
  } = req;

  try {
    console.log("file_string: ", file_string);
    // FIXME: 이 파일 형식은 지원되지 않습니다.
    const imagePath = path.join(__dirname, "../../uploads/images");
    fs.writeFile(`${imagePath}/${member_id}.png`, src, "binary", (error) => {
      if (error) {
        console.log("Create imageFile Error: ", error);
      } else console.log("Created Image file");
    });
    // console.log("controller req.body: ", req.body);
    const newMember = await Members.create({
      member_id,
      name,
      phoneNumber,
      email,
      src,
    });

    res.json(newMember);
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
