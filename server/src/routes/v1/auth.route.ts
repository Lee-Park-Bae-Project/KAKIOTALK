import express from "express";
import { auth } from "../../controllers/Auth.Controller";

const router = express.Router();
router.route("/").get(auth);

export default router;
