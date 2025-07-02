import styled from "styled-components";

export const Container = styled.div`
  padding: 3rem 2rem;
  background: linear-gradient(135deg, #e0f2fe, #e9d5ff, #d9f99d); 
  /* biru muda → lavender → hijau mint */
  color: #1e293b;
  border-radius: 1.5rem;
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.06);
`;

export const HeroSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2.5rem;
  flex-wrap: wrap;
`;

export const HeroLeft = styled.div`
  flex: 1;
  min-width: 300px;
`;

export const HeroRight = styled.div`
  flex: 1;
  min-width: 300px;
`;

export const HeroTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
  color: #1e40af; /* biru navy untuk judul */
`;

export const HeroGenre = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: #475569;
  margin-bottom: 1rem;
`;

export const HeroDescription = styled.p`
  font-size: 1rem;
  color: #334155;
  line-height: 1.75;
  margin-bottom: 1.5rem;
`;

export const HeroButton = styled.button`
  background: linear-gradient(to right, #3b82f6, #60a5fa);
  color: white;
  padding: 0.75rem 1.5rem;
  font-weight: 600;
  font-size: 1rem;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(to right, #2563eb, #3b82f6);
    transform: translateY(-2px);
    box-shadow: 0 6px 18px rgba(59, 130, 246, 0.25);
  }
`;

export const HeroImage = styled.img`
  width: 100%;
  max-width: 500px;
  border-radius: 1rem;
  object-fit: cover;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
`;

export const StyledHero = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  flex-wrap: wrap;

  .hero__left {
    flex: 1;
  }

  img {
    flex: 1;
    border-radius: 1rem;
    width: 100%;
    object-fit: cover;
  }
`;
