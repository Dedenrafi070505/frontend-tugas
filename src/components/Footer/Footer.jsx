import styled from "styled-components";

const FooterContainer = styled.footer`
  background: linear-gradient(to right, #ff0000, #000000); /* merah ke hitam */
  color: #f1f1f1;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.2);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
`;

const FooterTitle = styled.h2`
  font-size: 1.75rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  letter-spacing: 1px;
  color: #ffcccc; /* ubah amber ke merah muda agar cocok */
`;

const FooterAuthor = styled.p`
  font-size: 1rem;
  font-weight: 300;
  opacity: 0.85;
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterTitle>Movie App</FooterTitle>
      <FooterAuthor>Created by Deden rafi akbar</FooterAuthor>
    </FooterContainer>
  );
}

export default Footer;
