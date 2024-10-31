// Package Imports
import express, { Application, Request, Response } from "express";
import cors from "cors";
import morgan from "morgan";
import rateLimit from "express-rate-limit";
import router from "./app/routes";
import { globalError } from "./app/middlewares/globalError";
import notFound from "./app/middlewares/notFound";
const app: Application = express();

// Rate Limiting Configuration
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 3,
  message:"meny time Request Please wait 1 minute"
});

// Middleware Configuration
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan("dev"));
app.use(limiter);

// Routes Configuration
app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    status: "OK",
    message: "Server is up and running!",
  });
});
app.use("/api/v1/", router);
// Error Handling Middleware
app.use(globalError);
// Not Found Middleware
app.use(notFound);
export default app;
