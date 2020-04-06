import express from "express";
import { friends } from "../../controllers/friend.controllers";

const router = express.Router();

router.route("/:id").post(get);
router.route("/").post(get);
export default router;
