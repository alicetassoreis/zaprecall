import { useState } from "react";
import { cards } from "./data/cards";
import Deck from "./components/Deck";
import Footer from "./components/Footer";
import GlobalStyle from "./styles/GlobalStyle";
import styled from "styled-components";

import logo from "./assets/logo.png";

export default function App() {
  const [respostas, setRespostas] = useState([]);

  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <Header>
              <img
                src={logo} alt="Logo ZapRecall" width="40" height="46"></img>
        <Title>ZapRecall</Title>
        </Header>
        <Deck cards={cards} respostas={respostas} setRespostas={setRespostas} />
      </AppContainer>
      <Footer respondidas={respostas.length} total={cards.length} />
    </>
  );
}


const AppContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 24px;
  padding-bottom: 120px; 
`;

const Title = styled.h1`
  color: white;
  font-size: 24px;  
  font-weight: 700;
  line-height: 28px; 
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px; 
`;

