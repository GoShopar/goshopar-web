import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  PageContainer, AuthCard, LogoCircle, Title, SubTitle, 
  InputGroup, Input, PrimaryButton, GoogleButton, 
  Divider, LinkText, FooterText 
} from '../components/AuthLayout';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/home');
  };

  const handleGoogleLogin = () => {
    navigate('/home');
  };

  return (
    <PageContainer>
      <AuthCard>
        <LogoCircle>
          <img src="/images/logotext.png" alt="Logo" />
        </LogoCircle>
        
        <Title>Login</Title>
        <SubTitle>Login to your GoShopa account.</SubTitle>

        <form onSubmit={handleLogin} style={{ width: '100%' }}>
          <InputGroup>
            <Input type="email" placeholder="Input your email" required />
          </InputGroup>
          
          <InputGroup>
            <Input type="password" placeholder="Password" required />
            <div style={{ textAlign: 'right', marginTop: '8px' }}>
              <Link to="/forgot-password" style={{ fontSize: '12px', color: '#61797D' }}>
                Forgot password?
              </Link>
            </div>
          </InputGroup>

          <PrimaryButton type="submit">Login</PrimaryButton>
        </form>

        <Divider>
          <span>OR</span>
        </Divider>

        <GoogleButton onClick={handleGoogleLogin}>
          <img src="/images/google.png" alt="Google" />
          Continue with Google
        </GoogleButton>

        <FooterText>
          Don't have an account? <Link to="/signup"><LinkText>Register</LinkText></Link>
        </FooterText>

      </AuthCard>
    </PageContainer>
  );
};

export default Login;