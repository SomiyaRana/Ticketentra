// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes,Route } from 'react-router'
import CheckAuth from "./components/check-auth.jsx"
import Tickets from "./Pages/tickets.jsx"
import TicketDetailsPage from "./Pages/ticket.jsx"
import Login from './Pages/login.jsx'
import Signup from './Pages/signup.jsx'
import Admin from './Pages/admin.jsx'
createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <BrowserRouter >
    <Routes>
      <Route
      path='/'
      element={
        <CheckAuth protected={true}>
          <Tickets/>
        </CheckAuth>
      }
      />

  
      <Route
      path="/tickets/:id"
      element={
        <CheckAuth protected={true}>
          <TicketDetailsPage/>
        </CheckAuth>
      }
      />

       <Route
      path="/login"
      element={
        <CheckAuth protected={false}>
          <Login/>
        </CheckAuth>
      }
      />

      <Route
      path="/signup"
      element={
        <CheckAuth protected={false}>
          <Signup/>
        </CheckAuth>
      }
      />

       <Route
      path="/admin"
      element={
        <CheckAuth protected={true}>
          <Admin/>
        </CheckAuth>
      }
      />

      
    </Routes>
    </BrowserRouter>
  // </StrictMode>,
)
