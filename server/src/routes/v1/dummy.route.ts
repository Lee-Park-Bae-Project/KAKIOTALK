import express from "express";
import {
  getProfile,
  getFriendList,
  getChatList,
} from "../../controllers/dummy.controllers";

const router = express.Router();

router.get("/my-profile", getProfile);
router.get("/friend-list", getFriendList);
router.get("/chat-list", getChatList);

export default router;
