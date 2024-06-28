import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Badge from 'react-bootstrap/Badge';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faFileAlt, faLock, faTicketAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons'; // Import the icons you need

const ApplicationStatus = () => {
  const [application, setApplication] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null); // State to hold user information
  const userData = JSON.parse(localStorage.getItem('user'));

  const username = 'admin'; // Replace with actual username from login state
  const password = '1234'; // Replace with actual password from login state
  const encodedCredentials = 'Basic ' + btoa(username + ':' + password);
  const headers = {
    'Authorization': encodedCredentials,
    'X-API-KEY': 'CODEX@123',
  };

  useEffect(() => {
    if(userData.data.id){
      const fetchUser = async () => {
        try {
          // Simulate fetching user details (replace with actual logic)
          const user = { name: 'John Doe' }; // Replace with actual user object
          setUser(user);
        } catch (error) {
          console.error('Error fetching user:', error);
        }
      };
      fetchUser();
    
      const fetchApplication = async () => {

        try {
          const response = await axios.get(`https://thesoftwareexperts.com/cdksolar/admin/api/application/${userData.data.id}`, { headers });
          setApplication(response.data);
          setLoading(false);
        } catch (error) {
          setError(error.response.data.message);
          setLoading(false);
        }
      };
      fetchApplication();
    }
  }, [userData.data.id]);



  const getStatusLabel = (status) => {
    switch (status) {
      case '0':
        return <Badge pill bg="primary">Application Received</Badge>;
      case '1':
        return <Badge pill bg="info">Under Review</Badge>;
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
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-12">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <div className="d-flex align-items-center">
              <FontAwesomeIcon icon={faUser} className="me-2" size="lg" />
              {userData?.data && <span>Welcome, {userData?.data?.email}</span>}
            </div>
            <div className="top-menu bg-warning p-3 d-flex justify-content-center align-items-center rounded shadow-sm">
              <ul className="list-unstyled mb-0 d-flex">
                <li className="me-3">
                  <Link to="/my-applications" className="text-decoration-none text-dark py-2 px-3 rounded">
                    <FontAwesomeIcon icon={faFileAlt} className="me-1" /> My Applications
                  </Link>
                </li>
                <li className="me-3">
                  <Link to="/change-password" className="text-decoration-none text-dark py-2 px-3 rounded">
                    <FontAwesomeIcon icon={faLock} className="me-1" /> Change Password
                  </Link>
                </li>
                <li className="me-3">
                  <Link to="/raise-ticket" className="text-decoration-none text-dark py-2 px-3 rounded">
                    <FontAwesomeIcon icon={faTicketAlt} className="me-1" /> Raise Ticket
                  </Link>
                </li>
                <li>
                  <Link to="/add-traveler" className="text-decoration-none text-dark py-2 px-3 rounded">
                    <FontAwesomeIcon icon={faUserPlus} className="me-1" /> Add Traveler
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-md-12">
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
                      <Link to={`/application-view/${item.id}`} className="btn btn-link btn-sm text-decoration-none">View</Link>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot><tr><td colSpan={7}>{error ? error : ""}</td></tr></tfoot>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationStatus;
