import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const data = [
  { id: 1, name: 'John Doe', status: 'Under Review', updated: '2024-06-24' },
  { id: 2, name: 'Jane Smith', status: 'Approved', updated: '2024-06-23' },
  { id: 3, name: 'Michael Johnson', status: 'Rejected', updated: '2024-06-22' },
];

const getStatusClassName = (status) => {
  switch (status) {
    case 'Under Review':
      return 'badge bg-warning text-dark';
    case 'Approved':
      return 'badge bg-success';
    case 'Rejected':
      return 'badge bg-danger';
    default:
      return 'badge bg-secondary';
  }
};

const ApplicationStatus = () => {
  return (
    <div className="container mt-5">
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
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>
                  <span className={getStatusClassName(item.status)}>{item.status}</span>
                </td>
                <td>{item.updated}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApplicationStatus;