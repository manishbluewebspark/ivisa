// VisaApplicationView.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ApplicationView = ({ match }) => {
  const { id } = useParams();
  const [application, setApplication] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const username = 'admin';
  const password = '1234';
  const encodedCredentials = 'Basic ' + btoa(username + ':' + password);
  const headers = {
    'Authorization': encodedCredentials,
    'X-API-KEY': 'CODEX@123',
  };

  useEffect(() => {
    const fetchApplication = async () => {
      try {
        const response = await axios.get(`https://thesoftwareexperts.com/cdksolar/admin/api/application_show/${id}`, {headers});
        setApplication(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchApplication();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!application) {
    return <div>Application not found</div>;
  }

  return (
    <div className="container mt-5">
      <h2>Visa Application Details</h2>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Application ID: #{application.id}</h5>
          <p className="card-text"><strong>Name:</strong> {application.first_name} {application.last_name}</p>
          <p className="card-text"><strong>Email:</strong> {application.email}</p>
          <p className="card-text"><strong>Phone:</strong> {application.mobile_number}</p>
          <p className="card-text"><strong>Status:</strong> {application.status}</p>
          <p className="card-text"><strong>Created Date:</strong> {application.created_at}</p>
          <p className="card-text"><strong>Updated Date:</strong> {application.updated_at}</p>
          <p className="card-text"><strong>Comments:</strong> {application.comments}</p>
        </div>
      </div>
    </div>
  );
};

export default ApplicationView;
