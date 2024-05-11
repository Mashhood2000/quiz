import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import Form from './components/Form'
import Auth from './components/Auth';
import BasicTable from './components/Table'
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Auth/>} />
        <Route path="/user" element={<BasicTable/>} />
      </Routes>
    </Router>
  );
}
