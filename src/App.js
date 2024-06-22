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



          <Route path="/SingleEntryFortenDay" element={<SingleEntryFortenDay />}></Route>
          <Route path="/SingleEntry_30day" element={<SingleEntry_30day />}></Route>
          <Route path="/SingleEntry_30dayGcc" element={<SingleEntry_30dayGcc />}></Route>
          <Route path="/SingleEntryFortenDay" element={<SingleEntryFortenDay />}></Route>
          <Route path="/SingleEntryNinetySixhour" element={<SingleEntryNinetySixhour />}></Route>
          <Route path="/SingleEntrySixty" element={<SingleEntrySixty />}></Route>
          <Route path="/MultiEntry_30day" element={<MultiEntry_30day />}></Route>
          <Route path="/MultiEntry_60day" element={<MultiEntry_60day />}></Route>


          
        </Routes>
        <ToastContainer />
      </BrowserRouter>
      <Footer />


    </>
  );
}

export default App;
