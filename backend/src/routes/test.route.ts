import express, { Request, Response } from "express";

const router = express.Router();

const resString: string = "If you see this, express server is connected!";

router.get("/", (_req: Request, res: Response) => {
  res.send(resString);
});

export default router;
