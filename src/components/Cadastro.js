import React, { useState } from "react";

export default function Cadastro({ setDb, db }) {
  const [nomeInput, setNomeInput] = useState();
  const [senhaInput, setSenhaInput] = useState();

  const onSubmit = () => {
    const updatedDb = [...db];
    updatedDb.push({ name: nomeInput, senha: senhaInput });
    setDb(updatedDb);
    alert("Cadastro realizado com sucesso!");
  };

  return (
    <div className="App">
      <h2>Cadastro</h2>
      <input
        onChange={(e) => {
          setNomeInput(e.target.value);
        }}
      />
      <br />
      <br />
      <input
        onChange={(e) => {
          setSenhaInput(e.target.value);
        }}
        type="password"
      />
      <br />
      <br />
      <button onClick={onSubmit}>Cadastrar</button>
    </div>
  );
}
