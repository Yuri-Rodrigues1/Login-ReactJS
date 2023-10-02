import React, { useState } from "react";
import "./styles.css";
import Login from "./components/Login";
import Cadastro from "./components/Cadastro";

export default function App() {
  const [db, setDb] = useState([{}]);
  const [nameInput, setNameInput] = useState();
  const [senhaInput, setSenhaInput] = useState();

  const onSubmit = () => {
    let encontrou = false;

    db.forEach((user) => {
      if (user.name === nameInput && user.senha === senhaInput) {
        encontrou = true;
      }
    });

    if (encontrou === true) {
      alert("Login realizado com sucesso!");

      window.location.href =
        "https://www.linkedin.com/in/yuri-rodrigues-766435252/";
    } else {
      alert("Login inválido");
    }
  };

  return (
    <div className="App">
      <h4>Faça o login e tenha acesso ao meu LinkedIn!</h4>
      <Login
        setNameInput={setNameInput}
        setSenhaInput={setSenhaInput}
        setDb={setDb}
        onSubmit={onSubmit}
      />
      <Cadastro db={db} setDb={setDb} />
    </div>
  );
}
