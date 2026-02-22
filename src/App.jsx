import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Splash from './pages/Splash';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import ForgotPassword from './pages/ForgotPassword';
import OTPVerification from './pages/OTPVerification';
import Homepage from './pages/Homepage';
import SubscriptionPlans from './pages/SubscriptionPlans';
import ChoosePaymentMethod from './pages/ChoosePaymentMethod';
import SetUpYourStore from './pages/SetUpYourStore';
import DeliveryAndPayment from './pages/DeliveryAndPayment';
import UploadLogo from './pages/UploadLogo';
import StoreTemplate from './pages/StoreTemplate';
import StoreIsReady from './pages/StoreIsReady';
import Notifications from './pages/Notifications';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/otp-verify" element={<OTPVerification />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/subscription-plans" element={<SubscriptionPlans />} />
        <Route path="/payment-method" element={<ChoosePaymentMethod />} />
        <Route path="/setup-store" element={<SetUpYourStore />} />
        <Route path="/delivery-payment" element={<DeliveryAndPayment />} />
        <Route path="/upload-logo" element={<UploadLogo />} />
        <Route path="/store-template" element={<StoreTemplate />} />
        <Route path="/store-is-ready" element={<StoreIsReady />} />
        <Route path="/notifications" element={<Notifications />} />
      </Routes>
    </Router>
  );
}

export default App;