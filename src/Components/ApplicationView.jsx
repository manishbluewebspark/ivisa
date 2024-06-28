import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Button, Container, Row, Col, Card, Table } from 'react-bootstrap';

const ApplicationView = () => {
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
        const response = await axios.get(`https://thesoftwareexperts.com/cdksolar/admin/api/application_show/${id}`, { headers });
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
    <Container className="mt-5">
      <h2 className="mb-4">Visa Application Details</h2>

      {/* Applicant Information */}
      <Card className="mb-4 border-primary">
        <Card.Body>
          <h4 className="mb-3">Applicant Information</h4>
          <Row>
            <Col md={6}>
              <Table striped bordered>
                <tbody>
                  <tr>
                    <td><strong>Application ID:</strong></td>
                    <td>#{application.id}</td>
                  </tr>
                  <tr>
                    <td><strong>User ID:</strong></td>
                    <td>{application.user_id}</td>
                  </tr>
                  <tr>
                    <td><strong>Title:</strong></td>
                    <td>{application.title}</td>
                  </tr>
                  <tr>
                    <td><strong>Name:</strong></td>
                    <td>{application.first_name} {application.middle_name} {application.last_name}</td>
                  </tr>
                  <tr>
                    <td><strong>Email:</strong></td>
                    <td>{application.email}</td>
                  </tr>
                  <tr>
                    <td><strong>Mobile Number:</strong></td>
                    <td>{application.country_code}-{application.mobile_number}</td>
                  </tr>
                  <tr>
                    <td><strong>Gender:</strong></td>
                    <td>{application.gender}</td>
                  </tr>
                  <tr>
                    <td><strong>Date of Birth:</strong></td>
                    <td>{application.dob}</td>
                  </tr>
                  <tr>
                    <td><strong>Nationality:</strong></td>
                    <td>{application.nationality}</td>
                  </tr>
                  <tr>
                    <td><strong>Passport Number:</strong></td>
                    <td>{application.passport_number}</td>
                  </tr>
                  <tr>
                    <td><strong>Passport Issued Date:</strong></td>
                    <td>{application.passport_issued_date}</td>
                  </tr>
                  <tr>
                    <td><strong>Passport Expiry Date:</strong></td>
                    <td>{application.passport_expiry_date}</td>
                  </tr>
                  <tr>
                    <td><strong>Passport Issued Country:</strong></td>
                    <td>{application.passport_issued_country}</td>
                  </tr>
                  <tr>
                    <td><strong>Country of Residence:</strong></td>
                    <td>{application.country_of_residence}</td>
                  </tr>
                </tbody>
              </Table>
            </Col>
            <Col md={6}>
              <Table striped bordered>
                <tbody>
                  <tr>
                    <td><strong>Address Line 1:</strong></td>
                    <td>{application.address_line1}</td>
                  </tr>
                  <tr>
                    <td><strong>Address Line 2:</strong></td>
                    <td>{application.address_line2}</td>
                  </tr>
                  <tr>
                    <td><strong>City:</strong></td>
                    <td>{application.city}</td>
                  </tr>
                  <tr>
                    <td><strong>Pincode:</strong></td>
                    <td>{application.pincode}</td>
                  </tr>
                  <tr>
                    <td><strong>Country:</strong></td>
                    <td>{application.country}</td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      {/* Documents */}
      <Card className="mb-4 border-primary">
        <Card.Body>
          <h4 className="mb-3">Documents</h4>
          <Table striped bordered>
            <tbody>
              <tr>
                <td><strong>Utility Bill:</strong></td>
                <td>{application.utility_bill}</td>
              </tr>
              <tr>
                <td><strong>Photo:</strong></td>
                <td>{application.photo}</td>
              </tr>
              <tr>
                <td><strong>Passport Scan:</strong></td>
                <td>{application.passport_scan}</td>
              </tr>
              <tr>
                <td><strong>Visa:</strong></td>
                <td>{application.visa}</td>
              </tr>
            </tbody>
          </Table>
          <Button variant="primary" onClick={() => window.open(application.utility_bill, "_blank")}>View Documents</Button>
        </Card.Body>
      </Card>

      {/* Application Status */}
      <Card className="mb-4 border-primary">
        <Card.Body>
          <h4 className="mb-3">Application Status</h4>
          <Table striped bordered>
            <tbody>
              <tr>
                <td><strong>Status:</strong></td>
                <td>{application.status}</td>
              </tr>
              <tr>
                <td><strong>Created Date:</strong></td>
                <td>{application.created_at}</td>
              </tr>
              <tr>
                <td><strong>Updated Date:</strong></td>
                <td>{application.updated_at}</td>
              </tr>
            </tbody>
          </Table>
          <Button variant="success">Verified</Button>
        </Card.Body>
      </Card>

    </Container>
  );
};

export default ApplicationView;
