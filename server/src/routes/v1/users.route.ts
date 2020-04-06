import express from "express";
import { get } from "../../controllers/user.controllers";

const router = express.Router();

router.route("/:id").post(get);
router.route("/").post(get);
export default router;
