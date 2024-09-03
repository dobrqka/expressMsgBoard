const { Router } = require("express");
const indexRouter = Router();

const messages = [
  {
    id: 0,
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    id: 1,
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

let id = 2;

indexRouter.get("/", (req, res) => {
  res.render("index", { title: "Mini Messageboard", messages: messages });
});

indexRouter.get("/new", (req, res) => {
  res.render("form");
});

indexRouter.post("/new", (req, res) => {
  const messageUser = req.body.name;
  const messageText = req.body.message;
  messages.push({
    id: id,
    text: messageText,
    user: messageUser,
    added: new Date(),
  });
  id++;
  res.redirect("/");
});

indexRouter.get("/:messageId", (req, res) => {
  const messageId = req.params.messageId;
  const thisMessage = messages.filter((message) => message.id == messageId);
  res.render("message", { message: JSON.stringify(thisMessage, null, 9) });
});

module.exports = indexRouter;
