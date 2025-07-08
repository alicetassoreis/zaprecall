import styled from "styled-components";

const FooterContainer = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: #ffffff;
  padding: 16px;
  border-top: 1px solid #ccc;
  text-align: center;
  font-size: 18px;
`;

export default function Footer({ respondidas, total }) {
  return (
    <FooterContainer>
      {respondidas}/{total} CONCLUÍDOS
    </FooterContainer>
  );
}
