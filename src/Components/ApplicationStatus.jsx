import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Badge from 'react-bootstrap/Badge';
import { Link } from 'react-router-dom';


const ApplicationStatus = () => {
  const [application, setApplication] = useState([]);
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
        const response = await axios.get(`https://thesoftwareexperts.com/cdksolar/admin/api/application`, { headers });
        setApplication(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchApplication();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const getStatusLabel = (status) => {
    switch (status) {
      case '0':
        return  <Badge pill bg="primary">Application Received</Badge>;
      case '1':
        return  <Badge pill bg="info">Under Review</Badge>;
      case '2':
        return <Badge pill bg="success">Approved</Badge>;
      case '3':
        return <Badge pill bg="danger">Rejected</Badge>;
      case '4':
        return <Badge pill bg="warning" text="dark">Processing</Badge>;
      case '5':
        return <Badge pill bg="success">Completed</Badge>;
      case '6':
        return <Badge pill bg="secondary">On Hold</Badge>;
      default:
        return <Badge pill bg="light" text="dark">Unknown</Badge>;
    }
  };

  return (
    <div className="container mt-5" style={{ height: '100%' }}>
      <h2 className="mb-4">Visa Application Status</h2>
      <div className="table-responsive">
        <table className="table table-bordered table-hover">
          <thead className="table-dark">
            <tr>
              <th>Application ID</th>
              <th>Applicant Name</th>
              <th>Applicant Email</th>
              <th>Applicant Phone</th>
              <th>Status</th>
              <th>Created Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {application.map((item) => (
              <tr key={item.id}>
                <td>#{item.id}</td>
                <td>{item.first_name} {item.last_name}</td>
                <td>{item.email}</td>
                <td>{item.mobile_number}</td>
                <td>{getStatusLabel(item.status)}</td>
                <td>{item.created_at}</td>
                <td>
                  <Link to={`/application-view/${item.id}`} className="btn btn-link">View</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApplicationStatus;
