const paging = (res, bbs, pageIndex, pageUnit, collection) => {
  const bbsLength = bbs.length;

  if (pageIndex === "" && pageUnit === "") {
    return bbs;
  } else {
    if (pageIndex - 1 > parseInt(bbsLength / pageUnit)) {
      console.log(
        `Error: No such pageIndex ${pageIndex} <= ${bbsLength}/${pageUnit}`,
      );
      return;
    }
    const startIndex = (pageIndex - 1) * pageUnit;
    const endIndex = pageIndex * pageUnit;
    const data = [];

    for (let i = startIndex; i < endIndex; i++) {
      if (bbs[i]) data.push(bbs[i]);
    }
    const jsonData = JSON.stringify(data);
    const res_string = `${collection}${startIndex}-${
      endIndex - 1
    }/${bbsLength}`;
    // Q: 왜 paging 으로 res.write()을 옮겨야 작동이 될까?
    // return { jsonData, res_string };
    res.writeHead(200, { "Content-Range": res_string });
    res.write(jsonData);
    res.end();
  }
};

export default paging;
