import express from "express";
import {
  getProfile,
  getFriendList,
  getChatList,
} from "../../controllers/dummy.controllers";
import { connectLogin } from "../../controllers/auth.controller";

const router = express.Router();

router.get("/my-profile", getProfile);
router.get("/friend-list", getFriendList);
router.get("/chat-list", getChatList);
router.route("/").post(connectLogin);

export default router;
