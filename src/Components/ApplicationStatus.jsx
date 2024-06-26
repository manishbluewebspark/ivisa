import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Badge from 'react-bootstrap/Badge';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faFileAlt, faLock, faTicketAlt, faUserPlus, faListAlt, faCheck, faHistory, faChartBar } from '@fortawesome/free-solid-svg-icons'; // Import the icons you need

const ApplicationStatus = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [stats, setStats] = useState({
    totalReceived: 0,
    totalApproved: 0,
    totalRejected: 0,
    totalProcessing: 0,
    totalCompleted: 0,
    totalOnHold: 0
  });

  const username = 'admin'; // Replace with actual username from login state
  const password = '1234'; // Replace with actual password from login state
  const encodedCredentials = 'Basic ' + btoa(username + ':' + password);
  const headers = {
    'Authorization': encodedCredentials,
    'X-API-KEY': 'CODEX@123',
  };

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const response = await axios.get(`https://thesoftwareexperts.com/cdksolar/admin/api/application`, { headers });
        setApplications(response.data);
        calculateStatistics(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchApplications();
  }, []);

  const calculateStatistics = (data) => {
    const stats = {
      totalReceived: 0,
      totalApproved: 0,
      totalRejected: 0,
      totalProcessing: 0,
      totalCompleted: 0,
      totalOnHold: 0
    };

    data.forEach(app => {
      switch (app.status) {
        case '0':
          stats.totalReceived++;
          break;
        case '1':
        case '4':
          stats.totalProcessing++;
          break;
        case '2':
          stats.totalApproved++;
          break;
        case '3':
          stats.totalRejected++;
          break;
        case '5':
          stats.totalCompleted++;
          break;
        case '6':
          stats.totalOnHold++;
          break;
        default:
          break;
      }
    });

    setStats(stats);
  };

  const getStatusLabel = (status) => {
    switch (status) {
      case '0':
        return <Badge pill bg="primary">Received</Badge>;
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
              <span>Welcome, Administrator</span>
            </div>
            <div className="top-menu bg-warning p-3 d-flex justify-content-center align-items-center rounded shadow-sm">
              <ul className="list-unstyled mb-0 d-flex">
                <li className="me-3">
                  <Link to="/my-applications" className="text-decoration-none text-dark py-2 px-3 rounded">
                    <FontAwesomeIcon icon={faFileAlt} className="me-1" /> My Apps
                  </Link>
                </li>
                <li className="me-3">
                  <Link to="/approved-applications" className="text-decoration-none text-dark py-2 px-3 rounded">
                    <FontAwesomeIcon icon={faCheck} className="me-1" /> Approved
                  </Link>
                </li>
                <li className="me-3">
                  <Link to="/new-applications" className="text-decoration-none text-dark py-2 px-3 rounded">
                    <FontAwesomeIcon icon={faListAlt} className="me-1" /> New
                  </Link>
                </li>
                <li className="me-3">
                  <Link to="/payment-history" className="text-decoration-none text-dark py-2 px-3 rounded">
                    <FontAwesomeIcon icon={faHistory} className="me-1" /> Payment
                  </Link>
                </li>
                <li className="me-3">
                  <Link to="/statistics" className="text-decoration-none text-dark py-2 px-3 rounded">
                    <FontAwesomeIcon icon={faChartBar} className="me-1" /> Stats
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-light p-3 rounded shadow-sm mb-3">
            <h5 className="mb-0">Application Statistics:</h5>
            <div className="mt-3">
              <span className="me-3"><Badge pill bg="primary">Received: {stats.totalReceived}</Badge></span>
              <span className="me-3"><Badge pill bg="success">Approved: {stats.totalApproved}</Badge></span>
              <span className="me-3"><Badge pill bg="danger">Rejected: {stats.totalRejected}</Badge></span>
              <span className="me-3"><Badge pill bg="warning" text="dark">Processing: {stats.totalProcessing}</Badge></span>
              <span className="me-3"><Badge pill bg="success">Completed: {stats.totalCompleted}</Badge></span>
              <span><Badge pill bg="secondary">On Hold: {stats.totalOnHold}</Badge></span>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-md-12">
          <h2 className="mb-4">Visa Admin Application</h2>
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
                {applications.map((item) => (
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
