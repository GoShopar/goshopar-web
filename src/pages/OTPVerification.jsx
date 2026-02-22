import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { 
  PageContainer, AuthCard, LogoCircle, Title, SubTitle, 
  PrimaryButton 
} from '../components/AuthLayout';

const OTPContainer = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  margin: 20px 0;
`;

const OTPInput = styled.input`
  width: 50px;
  height: 50px;
  text-align: center;
  font-size: 24px;
  border: 1px solid #E0E0E0;
  border-radius: 8px;
  background-color: #FAFAFA;
  
  &:focus {
    outline: none;
    border-color: #61797D;
    box-shadow: 0 0 0 2px rgba(97, 121, 125, 0.1);
  }
`;

const OTPVerification = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(['', '', '', '']);

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    // Focus next input
    if (element.nextSibling && element.value !== "") {
      element.nextSibling.focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Updated route to point to the Subscription Plans page
    navigate('/subscription-plans');
  };

  return (
    <PageContainer>
      <AuthCard>
        <LogoCircle>
          <img src="/images/logotext.png" alt="Logo" />
        </LogoCircle>
        
        <Title>Verification</Title>
        <SubTitle>Enter the 4-digit code sent to your email.</SubTitle>

        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
          <OTPContainer>
            {otp.map((data, index) => (
              <OTPInput
                key={index}
                type="text"
                maxLength="1"
                value={data}
                onChange={e => handleChange(e.target, index)}
                onFocus={e => e.target.select()}
                required
              />
            ))}
          </OTPContainer>

          <PrimaryButton type="submit">Verify & Register</PrimaryButton>
        </form>
      </AuthCard>
    </PageContainer>
  );
};

export default OTPVerification;