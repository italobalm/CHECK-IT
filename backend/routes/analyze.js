import express from "express";

import Analysis from "../models/Analysis.js";

import { analyzeNews } from "../services/aiService.js";

import { calculateScore } from "../services/scoreService.js";

const router = express.Router();

router.post("/", async (req, res) => {

  try {

    const { title, content, url } = req.body;

    if (!content || !url) {

      return res.status(400).json({
        error: "Dados inválidos"
      });
    }

    // CACHE
    const existing = await Analysis.findOne({ url });

    if (existing) {

      console.log("Cache encontrado");

      return res.json({
        cached: true,
        score: existing.score,
        credibilidade: existing.credibilidade,
        detalhes: existing.detalhes
      });
    }

    // IA
    const analysis = await analyzeNews({
      title,
      content,
      url
    });

    // SCORE
    const scoreData = calculateScore(analysis);

    // SALVA CACHE
    const saved = await Analysis.create({

      url,

      score: scoreData.score,

      credibilidade: scoreData.credibilidade,

      detalhes: analysis
    });

    return res.json({
      cached: false,
      score: saved.score,
      credibilidade: saved.credibilidade,
      detalhes: saved.detalhes
    });

  } catch (error) {

    console.error(error);

    return res.status(500).json({
      error: "Erro interno"
    });
  }
});

export default router;