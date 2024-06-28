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

            <div className="mb-3 row">
              <label className="col-sm-2 col-form-label">Visa Type:</label>
              <div className="col-sm-10">
                <h3>Entry {location.state.visa.type} Time - {location.state.visa.duration} {location.state.visa.visa_type} - {location.state.visa.service_type} (AED {location.state.visa.price})</h3>
              </div>
            </div>

            <div className="mb-3 row">
              <label className="col-sm-2 col-form-label">Name</label>
              <div className="col-sm-2">
                <label className="col-form-label">Title</label>
                <select className="form-select" name="title" value={formData.title} onChange={handleChange} required>
                  <option value="">Select Title</option>
                  <option value="Mr">Mr</option>
                  <option value="Ms">Ms</option>
                  <option value="Mrs">Mrs</option>
                </select>
              </div>
              <div className="col-sm-2">
                <label className="col-form-label">First Name</label>
                <input type="text" className="form-control" name="firstName" value={formData.firstName} onChange={handleChange} required />
              </div>
              <div className="col-sm-2">
                <label className="col-form-label">Middle Name</label>
                <input type="text" className="form-control" name="middleName" value={formData.middleName} onChange={handleChange} />
              </div>
              <div className="col-sm-2">
                <label className="col-form-label">Last Name</label>
                <input type="text" className="form-control" name="lastName" value={formData.lastName} onChange={handleChange} required />
              </div>
            </div>

            <input type="hidden" name="id" onChange={handleChange} value={location.state.visa.id}/>
            <input type="hidden" name="price" onChange={handleChange} value={location.state.visa.price}/>
            <input type="hidden" name="duration" onChange={handleChange} value={location.state.visa.duration} />
            <input type="hidden" name="visa_type" onChange={handleChange} value={location.state.visa.visa_type} />
            <input type="hidden" name="service_type" onChange={handleChange} value={location.state.visa.service_type} />

            <div className="mb-3 row">
              <label className="col-sm-2 col-form-label">Email</label>
              <div className="col-sm-10">
                <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} required />
              </div>
            </div>

            <div className="mb-3 row">
              <label className="col-sm-2 col-form-label">Mobile Number with Country Code</label>
              <div className="col-sm-10">
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

            <div className="mb-3 row">
              <label className="col-sm-2 col-form-label">Gender</label>
              <div className="col-sm-4">
                <select className="form-select" name="gender" value={formData.gender} onChange={handleChange} required>
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
              <label className="col-sm-2 col-form-label">Date of Birth</label>
              <div className="col-sm-4">
                <input type="date" className="form-control" name="dob" value={formData.dob} onChange={handleChange} required />
              </div>
            </div>

            <div className="mb-3 row">
              <label className="col-sm-2 col-form-label">Nationality</label>
              <div className="col-sm-4">
                <input type="text" className="form-control" name="nationality" value={formData.nationality} onChange={handleChange} required />
              </div>
              <label className="col-sm-2 col-form-label">Country of Residence</label>
              <div className="col-sm-4">
                <select className="form-select" name="countryOfResidence" value={formData.countryOfResidence} onChange={handleChange} required>
                  <option value="">Select Country</option>
                  {topCountries.map((country) => (
                    <option key={country} value={country}>{country}</option>
                  ))}
                </select>
              </div>
            </div>

            <h2 className="mb-3">Passport Information</h2>
            <hr/>

            <div className="mb-3 row">
              <label className="col-sm-2 col-form-label">Passport Number</label>
              <div className="col-sm-4">
                <input type="text" className="form-control" name="passportNumber" value={formData.passportNumber} onChange={handleChange} required />
              </div>
              <label className="col-sm-2 col-form-label">Passport Issued Date</label>
              <div className="col-sm-4">
                <input type="date" className="form-control" name="passportIssuedDate" value={formData.passportIssuedDate} onChange={handleChange} />
              </div>
            </div>

            <div className="mb-3 row">
              <label className="col-sm-2 col-form-label">Passport Expiry Date</label>
              <div className="col-sm-4">
                <input type="date" className="form-control" name="passportExpiryDate" value={formData.passportExpiryDate} onChange={handleChange} required />
              </div>
              <label className="col-sm-2 col-form-label">Passport Issued Country</label>
              <div className="col-sm-4">
                <select className="form-select" name="passportIssuedCountry" value={formData.passportIssuedCountry} onChange={handleChange} required>
                  <option value="">Select Country</option>
                  {topCountries.map((country) => (
                    <option key={country} value={country}>{country}</option>
                  ))}
                </select>
              </div>
            </div>

            <h2 className="mb-3">Documents Upload</h2>
            <hr/>

            <div className="mb-3 row">
              <label className="col-sm-2 col-form-label">Utility Bill</label>
              <div className="col-sm-4">
                <input type="file" className="form-control" name="utilityBill" onChange={handleChange} multiple />
              </div>
              <label className="col-sm-2 col-form-label">Photo</label>
              <div className="col-sm-4">
                <input type="file" className="form-control" name="photo" onChange={handleChange} multiple />
              </div>
            </div>

            <div className="mb-3 row">
              <label className="col-sm-2 col-form-label">Passport Scan</label>
              <div className="col-sm-10">
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
