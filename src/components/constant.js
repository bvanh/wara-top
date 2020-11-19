const headersLevel = [
  {
    text: "Game UserId",
    align: "start",
    sortable: false,
    value: "game_user_id",
  },
  { text: "Character", value: "nickname" },
  { text: "Level", value: "level" },
];
const headersNap = [
  {
    text: "Game UserId",
    align: "start",
    sortable: false,
    value: "game_user_id",
  },
  { text: "Character", value: "nickname" },
  { text: "Total Cash", value: "total_cash" },
  { text: "Times", value: "count" },
  { text: "", value: "data-table-expand" },
];
const headersNapByUser = [
  {
    text: "",
    align: "start",
    value: "",
  },
  { text: "Item", value: "ref_product_name" },
  { text: "Cash", value: "cash" },
  { text: "Times", value: "times" },
];
export { headersLevel, headersNap, headersNapByUser };
