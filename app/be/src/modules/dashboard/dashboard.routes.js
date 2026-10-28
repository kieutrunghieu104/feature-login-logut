import { Router } from "express";
import validationRequest from "../../middlewares/validateRequest.js";
import { getUserByIdSchema } from "./dashboard.validation.js";
import { getUserByIdController } from "./dashboard.controller.js";

const router = Router();
router
  .route("/:id")
  .get(validationRequest(getUserByIdSchema), getUserByIdController);

export default router;