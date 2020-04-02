import express from "express";
import { get } from "../../controllers/User.Controller";

const router = express.Router();

router.route("/").get(get);

export default router;
