import './App.css';
import { BrowserRouter as Router, Route, Switch, Link, BrowserRouter, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import ContactUs from './Components/ContactUs';
import EntryVisaHeader from './Components/Header/EntryVisaHeader';
import SingleEntryFortenDay from './Components/Entryvisa/SingleEntry/SingleEntryFortenDay';
import ApplyForm from './Components/ApplyForm';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
      {/* <ApplyForm></ApplyForm> */}
      {/* <SingleEntryFortenDay></SingleEntryFortenDay> */}
      {/* <Navbar /> */}
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/contact-us" element={<ContactUs />}></Route>
          <Route path="/apply" element={<ApplyForm />}></Route>
        </Routes>
        <ToastContainer />
      </BrowserRouter>
      <Footer />


    </>
  );
}

export default App;
