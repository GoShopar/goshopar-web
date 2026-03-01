import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import AddProduct from './pages/AddProduct'
import ProductManagement from './pages/ProductManagement'
import DeliveryLogistics from './pages/DeliveryLogistics'
import SetupLocalRider from './pages/SetupLocalRider'
import AddRiderModal from './components/AddRiderModal'
import ManageGIGLogistics from './pages/ManageGIGLogistics'
import OrdersManagement from './pages/OrdersManagement'
import OrderInformation from './pages/OrderInformation'
import CustomersRetention from './pages/CustomersRetention'
import MarketingMultiChannel from './pages/MarketingMultiChannel'
import Profile from './pages/Profile'
import AddNewProduct from './pages/AddNewProduct'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="App">
      <Header />
     <AddNewProduct />
     <ProductManagement /> 
  <DeliveryLogistics /> 
   <SetupLocalRider /> 
  <AddRiderModal 
  isOpen={isModalOpen} 
  onClose={() => setIsModalOpen(false)} 
/>
<ManageGIGLogistics /> 
<DeliveryLogistics /> 
<OrdersManagement/> 
<OrderInformation />
<CustomersRetention/>
<MarketingMultiChannel/>
<Profile/>
    </div>
  )
}

export default App
