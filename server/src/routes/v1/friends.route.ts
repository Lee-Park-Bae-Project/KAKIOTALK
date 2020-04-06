import express from "express";
import {
  friendAdd,
  friendDelete,
  friendFind,
} from "../../controllers/friends.controller";

const router = express.Router();

router.route("/:id").get(friendFind);
router.route("/").get(friendAdd);
router.route("/id").get(friendDelete);

export default router;
