import styled from "styled-components";

const FooterContainer = styled.footer`
  background: linear-gradient(to right, #1e1e2f, #2c2c3e);
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
  color: #fbbf24; /* amber-400 */
`;

const FooterAuthor = styled.p`
  font-size: 1rem;
  font-weight: 300;
  opacity: 0.85;
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterTitle>🎬 Movie App</FooterTitle>
      <FooterAuthor>Created by Lutfi Fuat Azhar</FooterAuthor>
    </FooterContainer>
  );
}

export default Footer;
