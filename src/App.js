import { useState } from "react";

import axios from "axios";
import Resultado from "../src/components/Resultado";
import { MainContainer, ContentDiv, Form } from "../src/style/style";

const App = () => {
  const [cep, setCep] = useState("");
  const [result, setResult] = useState({});

  const getResultLength = Object.keys(result).length;

  const handleCep = async (e) => {
    setCep(e.target.value);
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    await axios.get(`http://localhost:4000/${cep}`).then((res) => {
      setResult(res.data);
    });
  };

  return (
    <html>
      <MainContainer>
        <title>Validador de CEP</title>
        <ContentDiv>
          <h1>VALIDADOR DE CEP</h1>
          <Form onSubmit={handleSubmitForm}>
            <label htmlFor="CEP">
              CEP:
              <input
                onChange={handleCep}
                required
                pattern="[0-9]{5}-[0-9]{3}"
                placeholder="XXXXX-XXX"
              />
            </label>
            <button type="submit">Enviar</button>
          </Form>
          <div style={{ display: getResultLength > 0 ? "" : "none" }}>
            {result.ok ? (
              <Resultado resultado={result} />
            ) : (
              <h3>CEP não encontrado.</h3>
            )}
          </div>
        </ContentDiv>
      </MainContainer>
    </html>
  );
};

export default App;
