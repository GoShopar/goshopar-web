import styled from 'styled-components';

// The main container for Auth pages
export const PageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('/images/login-image.png');
  background-size: cover;
  background-position: center;
  position: relative;
  
  /* Overlay for better text readability if needed */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.2); 
    z-index: 0;
  }

  @media (min-width: 1024px) {
    justify-content: flex-end; /* Push to right on desktop */
    padding-right: 10%;
  }
`;

export const AuthCard = styled.div`
  background: #FFFFFF;
  width: 90%;
  max-width: 400px;
  border-radius: 12px;
  padding: 40px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.15);
  z-index: 1;
  position: relative;
`;

export const LogoCircle = styled.div`
  width: 80px;
  height: 80px;
  background-color: #61797D;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  margin-top: -60px; /* Pulls it slightly out/top of the card */
  box-shadow: 0px 4px 10px rgba(97, 121, 125, 0.4);

  img {
    width: 60%;
    object-fit: contain;
  }
`;

export const Title = styled.h2`
  color: #333;
  font-size: 24px;
  margin-bottom: 8px;
  font-weight: 700;
`;

export const SubTitle = styled.p`
  color: #666;
  font-size: 14px;
  margin-bottom: 30px;
  text-align: center;
`;

export const InputGroup = styled.div`
  width: 100%;
  margin-bottom: 15px;
  position: relative;
`;

export const Input = styled.input`
  width: 100%;
  padding: 14px 16px;
  border: 1px solid #E0E0E0;
  border-radius: 8px;
  font-size: 14px;
  color: #333;
  outline: none;
  background: #FAFAFA;
  transition: all 0.3s ease;
  font-family: 'DM Sans', sans-serif;

  &:focus {
    border-color: #61797D;
    box-shadow: 0 0 0 2px rgba(97, 121, 125, 0.1);
  }
`;

export const PrimaryButton = styled.button`
  width: 100%;
  padding: 14px;
  background-color: #61797D;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 10px;
  box-shadow: 0px 4px 12px rgba(97, 121, 125, 0.3);
  transition: transform 0.2s, box-shadow 0.2s;
  font-family: 'DM Sans', sans-serif;

  &:hover {
    background-color: #4f6366;
    transform: translateY(-2px);
  }
  
  &:active {
    transform: translateY(0);
  }
`;

export const GoogleButton = styled.button`
  width: 100%;
  padding: 12px;
  background-color: white;
  color: #333;
  border: 1px solid #E0E0E0;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.05);
  transition: background 0.2s;
  font-family: 'DM Sans', sans-serif;

  &:hover {
    background-color: #f5f5f5;
  }

  img {
    width: 20px;
    height: 20px;
  }
`;

export const Divider = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin: 20px 0;
  
  span {
    color: #999;
    font-size: 12px;
    padding: 0 10px;
    text-transform: uppercase;
  }
  
  &::before, &::after {
    content: '';
    flex: 1;
    height: 1px;
    background-color: #E0E0E0;
  }
`;

export const LinkText = styled.span`
  color: #61797D;
  font-weight: 600;
  cursor: pointer;
  font-size: 14px;
  
  &:hover {
    text-decoration: underline;
  }
`;

export const FooterText = styled.p`
  margin-top: 20px;
  font-size: 14px;
  color: #666;
`;