import { Router } from "express";
import validationRequest from "../../middlewares/validateRequest.js";
import { loginSchema } from "./auth.validation.js";
import { loginController } from "../auth/auth.controller.js";

const router = Router();

router
  .post("/login", validationRequest(loginSchema), loginController);

export default router;