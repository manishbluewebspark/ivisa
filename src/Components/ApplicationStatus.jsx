import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const ApplicationStatus = () => {
  const [application, setApplication] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userId, setUserId] = useState(null);

  const username = 'admin';
  const password = '1234';
  //const encodedCredentials =  btoa(`${username}:${password}`);
  const encodedCredentials = 'Basic ' + btoa(username + ':' + password);
  const headers = {
    'Authorization': encodedCredentials,
    'X-API-KEY': 'CODEX@123',
  };

  useEffect(() => {
      // Retrieve the JSON string from localStorage
      const userString = localStorage.getItem('user');
      if (userString) {
        const user = JSON.parse(userString);
        const userId = user?.data?.id;
        setUserId(userId);
      }
  }, []);

  useEffect(() => {
    if(userId){
      const fetchApplication = async () => {
          try {
              const response = await axios.get(`https://thesoftwareexperts.com/cdksolar/admin/api/application/${userId}`, { headers });
              setApplication(response.data);
              setLoading(false);
          } catch (error) {
              setError(error);
              setLoading(false);
          }
      };
      fetchApplication();
    }
  }, [userId]);

  if (loading) {
      return <div>Loading...</div>;
  }

  if (error) {
      return <div>Error: {error.message}</div>;
  }

  return (
    <div className="container mt-5" style={{'height':'50vh'}}>
      <h2 className="mb-4">Visa Application Status</h2>
      <div className="table-responsive">
        <table className="table table-bordered table-hover">
          <thead className="table-dark">
            <tr>
              <th>Application ID</th>
              <th>Applicant Name</th>
              <th>Status</th>
              <th>Last Updated</th>
            </tr>
          </thead>
          <tbody>
            {application.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.username}</td>
                <td><span>{item.status}</span></td>
                <td>{item.created_at}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApplicationStatus;