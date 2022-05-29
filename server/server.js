const { default: axios } = require("axios");
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

app.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    if (!id) {
      res.status(404).send("Nenhum CEP foi informado");
    }
    if (id.length < 8 || id.length > 9) {
      res.status(404).send("CEP inválido");
    }
    const response = await axios.get(
      `https://ws.apicep.com/cep.json?code=${id}`
    );
    res.status(200).json(response.data);
  } catch (err) {
    res.status(400).json({ error: "CEP não encontrado" });
  }
});

module.exports = app;
