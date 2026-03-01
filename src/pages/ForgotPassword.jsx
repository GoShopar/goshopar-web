import React from 'react';
import { Link } from 'react-router-dom';
import { 
  PageContainer, AuthCard, LogoCircle, Title, SubTitle, 
  InputGroup, Input, PrimaryButton, FooterText, LinkText 
} from '../components/AuthLayout';

const ForgotPassword = () => {
  return (
    <PageContainer>
      <AuthCard>
        <LogoCircle>
          <img src="/images/logotext.png" alt="Logo" />
        </LogoCircle>
        
        <Title>Forgot Password</Title>
        <SubTitle>Enter your email to reset your password.</SubTitle>

        <form style={{ width: '100%' }}>
          <InputGroup>
            <Input type="email" placeholder="Input your email" required />
          </InputGroup>

          <PrimaryButton type="submit">Reset Password</PrimaryButton>
        </form>

        <FooterText>
          Remembered it? <Link to="/login"><LinkText>Login</LinkText></Link>
        </FooterText>

      </AuthCard>
    </PageContainer>
  );
};

export default ForgotPassword;