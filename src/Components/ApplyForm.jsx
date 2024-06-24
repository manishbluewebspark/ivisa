import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/flag-icon-css/css/flag-icons.min.css';
import axios from 'axios';
import { toast } from 'react-toastify';
import Header2 from './Header/Header2';
import { Link, useParams, useNavigate, useLocation} from 'react-router-dom';

const ApplyForm = () => {
  const { visaType } = useParams();
  const decodedVisaType = decodeURIComponent(visaType);
  console.log(decodedVisaType);
  const location = useLocation()


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
    utilityBill: null,
    photo: null,
    passportScan: null
  });

  const [files, setFiles] = useState({
    utilityBill: null,
    photo: null,
    passportScan: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({
        ...formData,
        [name]: files[0]
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFiles({
      ...files,
      [name]: URL.createObjectURL(files[0])
    });
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


const passporttopCountries = [


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


const visaOptions = [
  '14 Days Dubai Visit Visa',
  '30 Days Dubai Visit Visa',
  '60 Days Dubai Visit Visa',
  '30 Days For GCC Residents',
  '96 Hours Dubai Transit Visa',
  '30 Days Multiple Entry Visa',
  '60 Days Multiple Entry Visa'
];



  const handleSubmit = async (e) => {
    e.preventDefault();
    const username = 'admin';
    const password = '1234';
    //const encodedCredentials =  btoa(`${username}:${password}`);
    const encodedCredentials = 'Basic ' + btoa(username + ':' + password);
    const headers = {
      'Authorization': encodedCredentials,
      'X-API-KEY': 'CODEX@123',
    };

    const bodyFormData = new FormData();
    for (const key in formData) {
      bodyFormData.append(key, formData[key]);
    }

    try {
      const response = await axios.post('https://thesoftwareexperts.com/cdksolar/admin/api/submit_form', bodyFormData, { headers });
      console.log('Success:', response.data);
      toast.success(response.data.message);
      navigate('/checkout', { state: response.data });
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
                          <h3> Entry {location.state.visa.type} Time  - {location.state.visa.duration} {location.state.visa.visa_type}- {location.state.visa.service_type} 
                            (AED {location.state.visa.price})
                          </h3>
                          {/*   
                          <select className="form-select" name="visa"  value={formData.visa} onChange={handleChange} required >
                            <option value="">Select...</option>
                              {visaOptions.map((visa, index) => (
                            <option key={index}  value={visa}>{visa}</option>
                              ))}
                          </select> */}
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
                                        <option value="+1">ca CANADA +1</option>
                           
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
                                <input type="date" className="form-control" name="passportIssuedDate" value={formData.passportIssuedDate} onChange={handleChange} required />
                            </div>
                            <div className="col-md-4 mb-3">
                                <label className="form-label">Passport Expiry Date</label>
                                <input type="date" className="form-control" name="passportExpiryDate" value={formData.passportExpiryDate} onChange={handleChange} required />
                            </div>
                        </div>

                        <div className="row mb-4">
                            <div className="col-md-4 mb-3">
                                <label className="form-label">Passport Issued Country</label>
                               
                                <select className="form-select" name="passportIssuedCountry" value={formData.passportcountry} onChange={handleChange} required>
                                <option value="">Select Country</option>
                                {topCountries.map((passportcountry, index) => (
                                    <option key={index} value={passportcountry}>{passportcountry}</option>
                                ))}
                            </select>


                            </div>
                            <br/> <br/>                            <h2>Residence Information</h2>
                            <hr/>


                            <div className="col-md-4 mb-3">
                                <label className="form-label">Country of Residence</label>
                                <input type="text" className="form-control" name="countryOfResidence" value={formData.countryOfResidence} onChange={handleChange} required />
                            </div>
                            <div className="col-md-4 mb-3">
                                <label className="form-label">Residence Address Line 1</label>
                                <input type="text" className="form-control" name="addressLine1" value={formData.addressLine1} onChange={handleChange} required />
                            </div>
                            <div className="col-md-4 mb-3">
                                <label className="form-label">Address Line 2</label>
                                <input type="text" className="form-control" name="addressLine2" value={formData.addressLine2} onChange={handleChange} />
                            </div>
                            <div className="col-md-4 mb-3">
                                <label className="form-label">City</label>
                                <input type="text" className="form-control" name="city" value={formData.city} onChange={handleChange} required />
                            </div>
                            <div className="col-md-4 mb-3">
                                <label className="form-label">Pincode</label>
                                <input type="text" className="form-control" name="pincode" value={formData.pincode} onChange={handleChange} required />
                            </div>
                            <div className="col-md-4 mb-3">
                                <label className="form-label">Country</label>
                                <select className="form-select" name="country" value={formData.country} onChange={handleChange} required>
                                  <option value="">Select Country</option>
                                  {topCountries.map((country, index) => (
                                      <option key={index} value={country}>{country}</option>
                                  ))}
                              </select>
                            </div>
                        </div>

                        <h4 className="mt-4">Document Uploads</h4>
                        <hr/>
                        <div className="row mb-4">
                            <div className="col-md-4 mb-3">
                                <label className="form-label">Utility Bill in Last 3 Months</label>
                                <input type="file" className="form-control" name="utilityBill" onChange={handleChange} required />
                                {files.utilityBill && <img src={files.utilityBill} alt="Utility Bill Preview" className="img-preview mt-2" />}
                                <p>Instruction Details with Pic</p>
                            </div>
                            <div className="col-md-4 mb-3">
                                <label className="form-label">Photo</label>
                                <input type="file" className="form-control" name="photo" onChange={handleChange} required />
                                {files.photo && <img src={files.photo} alt="Photo Preview" className="img-preview mt-2" />}
                                <p>Instruction Details with Pic</p>
                            </div>
                            <div className="col-md-4 mb-3">
                                <label className="form-label">Passport Scan</label>
                                <input type="file" className="form-control" name="passportScan" onChange={handleChange} required />
                                {files.passportScan && <img src={files.passportScan} alt="Passport Scan Preview" className="img-preview mt-2" />}
                                <p>Instruction Details with Pic</p>
                            </div>

                            <hr/>
                            <div className="col-md-12 mb-3">
                            <input type="checkbox" className="form-check-input" /> &nbsp; &nbsp; &nbsp;
                             <label className="form-label">I have read and agree to the  <Link to='/terms' target="_blank">Terms and Conditions</Link></label>
                                
                               
                            </div>



                        </div>
                        <hr/>
                        <div className='d-flex justify-content-center'>
                        <button type="submit" className="btn btn-lg btn-warning text-center">Submit</button> </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>



    </>
  );
};

export default ApplyForm