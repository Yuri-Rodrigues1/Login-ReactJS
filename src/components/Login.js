import React, { useState } from "react";

export default function Login({ onSubmit, setNameInput, setSenhaInput, url }) {
  return (
    <div className="App">
      <h2>Faça seu login</h2>
      <input
        onChange={(e) => {
          setNameInput(e.target.value);
        }}
      />
      <br /> <br />
      <input
        onChange={(e) => {
          setSenhaInput(e.target.value);
        }}
        type="password"
      />
      <br /> <br />
      <button onClick={onSubmit}>Entrar</button>
    </div>
  );
}
