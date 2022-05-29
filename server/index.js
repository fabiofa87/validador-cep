const app = require("./server");
require("dotenv").config();

const port = process.env.PORT || 5000;

app.listen(port, () => {
  if (process.env.NODE_ENV !== "jest") {
    console.log(`Servidor rodando na porta ${port}`);
  }
});
