import Flashcard from "./Flashcard";
import styled from "styled-components";

const DeckContainer = styled.div`
  width: 100%;
  max-width: 360px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

export default function Deck({ cards, respostas, setRespostas }) {
  return (
    <DeckContainer>
      {cards.map((card, index) => (
        <Flashcard
          key={index}
          index={index}
          question={card.question}
          answer={card.answer}
          setRespostas={setRespostas}
        />
      ))}
    </DeckContainer>
  );
}
