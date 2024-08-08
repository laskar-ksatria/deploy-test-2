import express from "express";
import cors from "cors";
import http from "http";
import dotenv from "dotenv";
import "colors";

dotenv.config();

export const app = express();
const server = http.createServer(app);
const PORT = 4001;

const MyServer = async () => {
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use((req, res, next) => {
    res.setHeader("Cache-Control", "no-store");
    next();
  });
  app.get("/", (req, res) => {
    res.status(200).json({ message: "Hello World!" });
  });
  server.listen(PORT, () => {
    console.log(`Server Running on Port ${PORT}`.yellow.bold);
  });
};

MyServer();
