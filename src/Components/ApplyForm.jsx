import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'flag-icon-css/css/flag-icons.min.css';
import axios from 'axios';
import { toast } from 'react-toastify';
import Header2 from './Header/Header2';
import { Link, useParams, useNavigate, useLocation } from 'react-router-dom';

const ApplyForm = () => {
  const { visaType } = useParams();
  const decodedVisaType = decodeURIComponent(visaType);
  const location = useLocation();
  const navigate = useNavigate();

  const title = 'UAE APPLICATION FORM';
  const [formData, setFormData] = useState({
    visa: decodedVisaType || '',
    title: '',
    firstName: '',
    middleName: '',
    lastName: '',
    email: '',
    countryCode: '',
    mobileNumber: '',
    gender: '',
    dob: '',
    nationality: '',
    passportNumber: '',
    passportIssuedDate: '',
    passportExpiryDate: '',
    passportIssuedCountry: '',
    countryOfResidence: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    pincode: '',
    country: '',
    utilityBill: [],
    photo: [],
    passportScan: []
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({
        ...formData,
        [name]: Array.from(files)
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const topCountries = [
    'United States',
    'China',
    'India',
    'Brazil',
    'United Kingdom',
    'Russia',
    'France',
    'Italy',
    'Spain',
    'Mexico',
    'Germany',
    'Indonesia',
    'Turkey',
    'Netherlands',
    'Saudi Arabia'
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    const username = 'admin';
    const password = '1234';
    const encodedCredentials = 'Basic ' + btoa(username + ':' + password);
    const headers = {
      'Authorization': encodedCredentials,
      'X-API-KEY': 'CODEX@123',
    };

    const bodyFormData = new FormData();
    for (const key in formData) {
      if (Array.isArray(formData[key])) {
        formData[key].forEach(file => bodyFormData.append(key, file));
      } else {
        bodyFormData.append(key, formData[key]);
      }
    }

    try {
      const response = await axios.post('https://thesoftwareexperts.com/cdksolar/admin/api/submit_form', bodyFormData, { headers });
      localStorage.setItem('user', JSON.stringify(response.data));
      toast.success(response.data.message);
      const combinedState = {
        ...location?.state,
        user: response?.data?.data,
      };
      navigate('/checkout', { state: combinedState });
    } catch (error) {
      if (error.response) {
        console.error('Error:', error.response.data);
        toast.error(error.response.data);
      } else if (error.request) {
        console.error('Error:', error.request);
        toast.error(error.request);
      } else {
        console.error('Error:', error.message);
        toast.error(error.message);
      }
    }
  };

  return (
    <>
      <Header2 title={title}></Header2>
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="card shadow-sm">
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <h2 className="mb-4">Basic Information</h2>
                  <hr/>
                  <div>
                    <label>Visa Type :</label>
                    <h3> Entry {location.state.visa.type} Time  - {location.state.visa.duration} {location.state.visa.visa_type} - {location.state.visa.service_type} 
                      (AED {location.state.visa.price})
                    </h3>
                  </div>
                  <div className="row mb-4">
                    <div className="col-md-4 mb-3">
                      <label className="form-label">Title</label>
                      <select className="form-select" name="title" value={formData.title} onChange={handleChange} required>
                        <option value="">Select Title</option>
                        <option value="Mr">Mr</option>
                        <option value="Ms">Ms</option>
                        <option value="Mrs">Mrs</option>
                      </select>
                    </div>

                    <input type="hidden" name="id" onChange={handleChange} value={location.state.visa.id}/>
                    <input type="hidden" name="price" onChange={handleChange} value={location.state.visa.price}/>
                    <input type="hidden" name="duration" onChange={handleChange} value={location.state.visa.duration} />
                    <input type="hidden" name="visa_type" onChange={handleChange} value={location.state.visa.visa_type} />
                    <input type="hidden" name="service_type" onChange={handleChange} value={location.state.visa.service_type} />

                    <div className="col-md-4 mb-3">
                      <label className="form-label">First Name</label>
                      <input type="text" className="form-control" name="firstName" value={formData.firstName} onChange={handleChange} required />
                    </div>
                    <div className="col-md-4 mb-3">
                      <label className="form-label">Middle Name</label>
                      <input type="text" className="form-control" name="middleName" value={formData.middleName} onChange={handleChange} />
                    </div>
                    <div className="col-md-4 mb-3">
                      <label className="form-label">Last Name</label>
                      <input type="text" className="form-control" name="lastName" value={formData.lastName} onChange={handleChange} required />
                    </div>
                    <div className="col-md-4 mb-3">
                      <label className="form-label">Email</label>
                      <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} required />
                    </div>
                    <div className="col-md-4 mb-3">
                      <label className="form-label">Mobile Number with Country Code</label>
                      <div className="input-group">
                        <select className="form-select" name="countryCode" value={formData.countryCode} onChange={handleChange} required>
                          <option value="+91">🇮🇳 India +91</option>
                          <option value="+1">🇺🇸 USA +1</option>
                          <option value="+1">🇨🇦 Canada +1</option>
                          <option value="+44">🇬🇧 UK +44</option>
                        </select>
                        <input type="tel" className="form-control" name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} required />
                      </div>
                    </div>
                  </div>

                  <div className="row mb-4">
                    <div className="col-md-4 mb-3">
                      <label className="form-label">Gender</label>
                      <select className="form-select" name="gender" value={formData.gender} onChange={handleChange} required>
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                      </select>
                    </div>
                    <div className="col-md-4 mb-3">
                      <label className="form-label">Date of Birth</label>
                      <input type="date" className="form-control" name="dob" value={formData.dob} onChange={handleChange} required />
                    </div>
                    <div className="col-md-4 mb-3">
                      <label className="form-label">Nationality</label>
                      <input type="text" className="form-control" name="nationality" value={formData.nationality} onChange={handleChange} required />
                    </div>
                  </div>

                  <h2>Passport Information</h2>
                  <hr/>
                  <div className="row mb-4">
                    <div className="col-md-4 mb-3">
                      <label className="form-label">Passport Number</label>
                      <input type="text" className="form-control" name="passportNumber" value={formData.passportNumber} onChange={handleChange} required />
                    </div>
                    <div className="col-md-4 mb-3">
                      <label className="form-label">Passport Issued Date</label>
                      <input type="date" className="form-control" name="passportIssuedDate" value={formData.passportIssuedDate} onChange={handleChange} />
                    </div>
                    <div className="col-md-4 mb-3">
                      <label className="form-label">Passport Expiry Date</label>
                      <input type="date" className="form-control" name="passportExpiryDate" value={formData.passportExpiryDate} onChange={handleChange} required />
                    </div>
                    <div className="col-md-4 mb-3">
                      <label className="form-label">Passport Issued Country</label>
                      <select className="form-select" name="passportIssuedCountry" value={formData.passportIssuedCountry} onChange={handleChange} required>
                        <option value="">Select Country</option>
                        {topCountries.map((country) => (
                          <option key={country} value={country}>{country}</option>
                        ))}
                      </select>
                    </div>
                    <div className="col-md-4 mb-3">
                      <label className="form-label">Country of Residence</label>
                      <select className="form-select" name="countryOfResidence" value={formData.countryOfResidence} onChange={handleChange} required>
                        <option value="">Select Country</option>
                        {topCountries.map((country) => (
                          <option key={country} value={country}>{country}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <h2>Documents Upload</h2>
                  <hr/>
                  <div className="row mb-4">
                    <div className="col-md-4 mb-3">
                      <label className="form-label">Utility Bill</label>
                      <input type="file" className="form-control" name="utilityBill" onChange={handleChange} multiple />
                    </div>
                    <div className="col-md-4 mb-3">
                      <label className="form-label">Photo</label>
                      <input type="file" className="form-control" name="photo" onChange={handleChange} multiple />
                    </div>
                    <div className="col-md-4 mb-3">
                      <label className="form-label">Passport Scan</label>
                      <input type="file" className="form-control" name="passportScan" onChange={handleChange} multiple />
                    </div>
                  </div>

                  <div className="d-grid gap-2">
                    <button type="submit" className="btn btn-primary btn-block">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ApplyForm;
