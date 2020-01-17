import express from "express";
import { get } from "../../controllers/user.controllers";

const router = express.Router();

router.route("/").get(get);

export default router;
