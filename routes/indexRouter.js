const { Router } = require("express");
const indexRouter = Router();
const queries = require("../db/queries");
const userController = require("../controllers/userController");

indexRouter.get("/", userController.getUsers);

indexRouter.get("/new", userController.getForm);
indexRouter.post("/new", userController.newMessagePost);

indexRouter.get("/delete", userController.deleteUsers);

indexRouter.get("/:messageId", userController.newMessageGet);

module.exports = indexRouter;
