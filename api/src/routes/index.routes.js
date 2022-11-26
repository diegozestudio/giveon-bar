import { Router } from "express";
import * as Controllers from "../controllers/index.controller";

const router = Router();

router.get("/", Controllers.findAllCategories);

router.post("/", Controllers.createCategory);

export default router;
