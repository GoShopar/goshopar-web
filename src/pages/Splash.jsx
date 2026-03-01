import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

// 1. Define the Animation (Comes from bottom)
const slideUp = keyframes`
  from {
    transform: translateY(100vh); /* Start far below screen */
    opacity: 0;
  }
  to {
    transform: translateY(0);     /* End at natural position */
    opacity: 1;
  }
`;

// 2. Styled Components
const SplashContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #61797D; /* Matches your requested background color */
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  flex-direction: column;
`;

const SplashImage = styled.img`
  width: 180px; 
  height: auto;
  /* Apply the animation: runs for 1.2s, stays at the end position */
  animation: ${slideUp} 1.2s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
`;

export default function Splash() {
  const navigate = useNavigate(); // CORRECT WAY: Use the hook

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/login');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <SplashContainer>
      <SplashImage 
        src="/images/splash-image.png" 
        alt="GoShopa Splash" 
      />
    </SplashContainer>
  );
}