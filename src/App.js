import './App.css';
import { BrowserRouter as Router, Route, Switch, Link, BrowserRouter, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import ContactUs from './Components/ContactUs';
import EntryVisaHeader from './Components/Header/EntryVisaHeader';

import ApplyForm from './Components/ApplyForm';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

import SingleEntryFortenDay from './Components/Entryvisa/SingleEntry/SingleEntryFortenDay';
import SingleEntry_30day  from './Components/Entryvisa/SingleEntry/SingleEntry_30day';
import SingleEntrySixty  from './Components/Entryvisa/SingleEntry/SingleEntrySixty';
import SingleEntry_30dayGcc  from './Components/Entryvisa/SingleEntry/SingleEntry_30dayGcc';
import SingleEntryNinetySixhour  from './Components/Entryvisa/SingleEntry/SingleEntryNinetySixhour';
import MultiEntry_30day  from './Components/Entryvisa/MultiEntry/MultiEntry_30day';
import MultiEntry_60day from './Components/Entryvisa/MultiEntry/MultiEntry_60day'; 
import HowToApply from './Components/HowToApply';
import Blog from './Components/Blog';
import BlogOne from './Components/Blogs/BlogOne';
import BlogTwo from './Components/Blogs/BlogTwo';
import UaeVisa from './Components/UaeVisa';
import Terms from './Components/Terms';
import NavbarResponsive from './Components/NavbarResponsive';
import Login from './Components/Auth/Login';
import ApplicationStatus from './Components/ApplicationStatus';
import PrivateRoute from './Components/PrivateRoute';
import Checkout from './Components/Checkout';


function App() {
  return (
    <>
      <BrowserRouter>
      {/* <Navbar /> */}
      <NavbarResponsive></NavbarResponsive>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/contact-us" element={<ContactUs />}></Route>
          <Route path="/apply/:visaType" element={<ApplyForm />}></Route>
          <Route path="/14-days-dubai-visit-visa" element={<SingleEntryFortenDay />}></Route>
          <Route path="/30-days-dubai-visit-visa" element={<SingleEntry_30day />}></Route>
          <Route path="/60-days-dubai-visit-visa" element={<SingleEntrySixty />}></Route>
          <Route path="/30-day-gcc-residents" element={<SingleEntry_30dayGcc />}></Route>
          <Route path="/96-hours-dubai-visit-visa" element={<SingleEntryNinetySixhour />}></Route>
          <Route path="/30-days-multi-entry-visa" element={<MultiEntry_30day />}></Route>
          <Route path="/60-days-multi-entry-visa" element={<MultiEntry_60day />}></Route>
          <Route path="/how-to-apply" element={<HowToApply />}></Route>
          <Route path="/blogs" element={<Blog />}></Route>
          <Route path="/latest-UAE-Visa-Rule-Changes-in-2022-Explained" element={<BlogOne />}></Route>
          <Route path="/what-is-an-Express-Visa-and-How-to-apply" element={<BlogTwo />}></Route>
          <Route path="/uae-visa" element={<UaeVisa />}></Route>
          <Route path="/terms" element={<Terms />}></Route>
          <Route path="/application" element={<ApplicationStatus />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/checkout" element={<Checkout />}></Route>
        </Routes>
        <ToastContainer />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
