
import React, {useState } from 'react';
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

import './App.css'
import ProductManagement from './pages/ProductManagement'
import DeliveryLogistics from './pages/DeliveryLogistics'
import SetupLocalRider from './pages/SetupLocalRider'
import ManageGIGLogistics from './pages/ManageGIGLogistics'
import OrdersManagement from './pages/OrdersManagement'
import OrderInformation from './pages/OrderInformation'
import CustomersRetention from './pages/CustomersRetention'
import MarketingMultiChannel from './pages/MarketingMultiChannel'
import Profile from './pages/Profile'
import AddNewProduct from './pages/AddNewProduct'
import Header from './components/Header'

function App() {
  return (
    <>
    <Header />
   
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




        <Route path="/add-product" element={<AddNewProduct />} />
        <Route path="/product-management" element={<ProductManagement />} />
        <Route path="/delivery-logistics" element={<DeliveryLogistics />} />
        <Route path="/setup-local-rider" element={<SetupLocalRider />} />
        <Route path="/manage-gig-logistics" element={<ManageGIGLogistics />} />
        <Route path="/orders-management" element={<OrdersManagement />} />
        <Route path="/order-information" element={<OrderInformation />} />
        <Route path="/customers-retention" element={<CustomersRetention />} />
        <Route path="/marketing-multi-channel" element={<MarketingMultiChannel />} />
        <Route path="/profile" element={<Profile />} />
        
      </Routes>
    </Router>
     </>
  );
}

export default App;