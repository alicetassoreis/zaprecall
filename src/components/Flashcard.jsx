import { useState } from "react";
import styled from "styled-components";

import setaPlay from "../assets/seta_play.png";
import setaVirar from "../assets/seta_virar.png";
import iconeErro from "../assets/icone_erro.png";
import iconeQuase from "../assets/icone_quase.png";
import iconeCerto from "../assets/icone_certo.png";

const Card = styled.div`
  background: ${({ estado }) => (estado === "virado" ? "#FFFFD4" : "#FFFFFF")};
  width: 300px; 
  height: 131px; 
  border-radius: 5px;
  padding: 16px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
`;

const Texto = styled.p`
  font-weight: 700;
  font-size: 16px;
  color: ${({ estado }) => {
    if (estado === "nao") return "#FF3030";
    if (estado === "quase") return "#FF922E";
    if (estado === "zap") return "#2FBE34";
    return "#333333";
  }};
  text-decoration: ${({ riscado }) => (riscado ? "line-through" : "none")};
  margin: 0;
`;

const Botoes = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;

const Botao = styled.button`
  background-color: ${({ cor }) => cor};
  border: none;
  border-radius: 5px;
  color: white;
  font-weight: 700;
  font-size: 12px;
  padding: 8px 12px;
  flex: 1;
  cursor: pointer;

  &:hover {
    filter: brightness(0.9);
  }
`;

const IconeStatus = styled.img`
  width: 20px;
  height: 20px;
`;

const RowFechado = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

export default function Flashcard({ index, question, answer, setRespostas }) {
  const [estado, setEstado] = useState("fechado");

  function responder(valor) {
    setEstado(valor);
    setRespostas((prev) => [...prev, valor]);
  }

  // Status respondido: mostra pergunta riscada + ícone
  if (["nao", "quase", "zap"].includes(estado)) {
    const icone =
      estado === "nao" ? iconeErro : estado === "quase" ? iconeQuase : iconeCerto;
    return (
      <Card estado={estado}>
        <RowFechado>
          <Texto riscado estado={estado}>
            Pergunta {index + 1}
          </Texto>
          <IconeStatus src={icone} alt={estado} />
        </RowFechado>
      </Card>
    );
  }

  // Card fechado - só mostra número e ícone play
  if (estado === "fechado") {
    return (
      <Card estado={estado}>
        <RowFechado>
          <Texto>Pergunta {index + 1}</Texto>
          <img
            src={setaPlay}
            alt="Abrir"
            onClick={() => setEstado("aberto")}
            style={{ cursor: "pointer", width: "23px", height: "23px" }}
          />
        </RowFechado>
      </Card>
    );
  }

  // Card aberto - mostra pergunta e ícone virar
  if (estado === "aberto") {
    return (
      <Card estado={estado}>
        <RowFechado>
          <Texto>{question}</Texto>
          <img
            src={setaVirar}
            alt="Virar"
            onClick={() => setEstado("virado")}
            style={{ cursor: "pointer", width: "30px", height: "20px" }}
          />
        </RowFechado>
      </Card>
    );
  }

  // Card virado - mostra resposta e botões
  if (estado === "virado") {
    return (
      <Card estado={estado}>
        <Texto>{answer}</Texto>
        <Botoes>
          <Botao cor="#FF3030" onClick={() => responder("nao")}>
            Não lembrei
          </Botao>
          <Botao cor="#FF922E" onClick={() => responder("quase")}>
            Quase não lembrei
          </Botao>
          <Botao cor="#2FBE34" onClick={() => responder("zap")}>Zap!</Botao>
        </Botoes>
      </Card>
    );
  }
}
