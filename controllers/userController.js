const queries = require("../db/queries");

const getUsers = async (req, res) => {
  const messages = await queries.getAll();
  res.render("index", {
    title: "Mini Messageboard",
    messages: messages,
  });
};

const getForm = (req, res) => {
  res.render("form");
};

const newMessagePost = async (req, res) => {
  const user = req.body.name;
  const text = req.body.message;
  await queries.newMessagePost(user, text);
  res.redirect("/");
};

const newMessageGet = async (req, res) => {
  const messageId = req.params.messageId;
  const messages = await queries.getAll();
  const thisMessage = messages.filter((message) => message.id == messageId);
  res.render("message", { message: JSON.stringify(thisMessage, null, 9) });
};

const deleteUsers = async (req, res) => {
  await queries.deleteAll();
  const messages = await queries.getAll();
  res.redirect("/");
};

module.exports = {
  getUsers,
  getForm,
  newMessagePost,
  newMessageGet,
  deleteUsers,
};
