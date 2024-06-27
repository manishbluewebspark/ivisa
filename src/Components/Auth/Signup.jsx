import axios from 'axios';
import React, { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [message,setMessage]=useState('');
  const navigate = useNavigate();

  const username1 = 'admin';
  const password1 = '1234';
  const encodedCredentials = 'Basic ' + btoa(username1 + ':' + password1);
  const headers = {
    'Authorization': encodedCredentials,
    'X-API-KEY': 'CODEX@123',
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (password !== confirmPassword) {
  //     setError('Passwords do not match');
  //   } else {
  //     // Handle successful signup
  //     console.log('Form submitted');
  //     // You can add more code here to handle the form submission, like sending data to an API
  //   }
  // };
  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post('https://thesoftwareexperts.com/cdksolar/admin/api/register', {
            email: email,
            password: password
        }, { headers });

        if (response.data.status) {
            console.log(response.data);
            setMessage('Register successful!');
            // Save the user data or token here
            // localStorage.setItem('user', JSON.stringify(response.data));
            // You can save the user data or token here, and redirect the user
            navigate('/login');
        } else {
            setMessage('Login failed: ' + response.data.message);
        }
    } catch (error) {
        setMessage('Login failed: ' + error.message);
    }
};

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card signup-card py-4">
            <div className="card-body">
              <h2 className="card-title text-center">Signup</h2>
              <form onSubmit={handleSignUp}>
                <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password:</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                {error && <div className="alert alert-danger">{error}</div>}
                <button type="submit" className="btn btn-warning btn-block mt-4 w-100 text-white">
                  Signup
                </button>
              </form>
              <div className='not-yet-member mt-4'><p><Link to="/login" className='text-warning'>Already have an account?</Link></p></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
