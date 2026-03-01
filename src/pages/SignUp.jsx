import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  PageContainer, AuthCard, LogoCircle, Title, SubTitle, 
  InputGroup, Input, PrimaryButton, GoogleButton, 
  Divider, LinkText, FooterText 
} from '../components/AuthLayout';

const SignUp = () => {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    navigate('/otp-verify');
  };

  const handleGoogleRegister = () => {
    navigate('/home');
  };

  return (
    <PageContainer>
      <AuthCard>
        <LogoCircle>
          <img src="/images/logotext.png" alt="Logo" />
        </LogoCircle>
        
        <Title>Register</Title>
        <SubTitle>Create your GoShopa account.</SubTitle>

        <form onSubmit={handleRegister} style={{ width: '100%' }}>
          <InputGroup>
            <Input type="email" placeholder="Email Address" required />
          </InputGroup>
          
          <InputGroup>
            <Input type="password" placeholder="Password" required />
          </InputGroup>

          <InputGroup>
            <Input type="password" placeholder="Confirm Password" required />
          </InputGroup>

          <PrimaryButton type="submit">Register</PrimaryButton>
        </form>

        <Divider>
          <span>OR</span>
        </Divider>

        <GoogleButton onClick={handleGoogleRegister}>
          <img src="/images/google.png" alt="Google" />
          Register with Google
        </GoogleButton>

        <FooterText>
          Already have an account? <Link to="/login"><LinkText>Login</LinkText></Link>
        </FooterText>

      </AuthCard>
    </PageContainer>
  );
};

export default SignUp;