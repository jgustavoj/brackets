import express from "express";
import userRoutes from "./user.route";
import testRoute from "./test.route";

const router = express.Router();

// This become a prefix for every endpoint -> base/api/users/{whatever we add in the user.route.ts}
router.use("/test", testRoute);
router.use("/users", userRoutes);

export default router;
