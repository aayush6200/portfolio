import express from "express";

const router = express.Router();

import { sendHelloActivity } from "../../controllers/CRUD/sendHello/sendHello.js";

router.post("/sendHello", sendHelloActivity);
export default router;
