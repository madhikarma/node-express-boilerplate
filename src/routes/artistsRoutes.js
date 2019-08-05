import { Router } from "express";

import artistsController from "../controllers/artistsController";
const router = Router();
const todoCtrl = new artistsController(TodoModel);

router.route("/todos").post(todoCtrl.create);

export default router;
