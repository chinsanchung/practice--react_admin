const SHOPS = "/shops";
const SHOP_DETAIL = "/:id";

const routes = {
  shops: SHOPS,
  shopDetail: (id) => {
    if (id) {
      return `/shops/${id}`;
    }
    return SHOP_DETAIL;
  },
};

export default routes;
