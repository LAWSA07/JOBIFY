import { Router } from "express";
const router = Router();
import { logout, register, login } from "../controllers/authController.js";
import {
  validateLoginInput,
  validateRegisterInput,
} from "../middleware/validationMiddleware.js";

router.post("/register", validateRegisterInput, register);
router.post("/login", validateLoginInput, login);
router.delete("/logout", logout);

export default router;
