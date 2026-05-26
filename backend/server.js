import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";

import analyzeRoute from "./routes/analyze.js";
import { connectMongo } from "./database/mongo.js";

const app = express();

console.log("Iniciando servidor...");

app.use(cors({
  origin: "*"
}));

app.use(express.json({
  limit: "5mb"
}));

app.use("/analyze", analyzeRoute);

const PORT = process.env.PORT || 3000;

async function startServer() {

  try {

    console.log("Conectando Mongo...");

    await connectMongo();

    console.log("Mongo conectado");

    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });

  } catch (error) {

    console.error("Erro ao iniciar servidor:");
    console.error(error);
  }
}

startServer();