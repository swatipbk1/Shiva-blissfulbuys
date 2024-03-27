import { useState, useEffect } from 'react';
import './EmployeeManagement.css'; // Importing CSS for styling
import axios from 'axios';

const EmployeeManagement = () => {
  const [employeeData, setEmployeeData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [departmentOptions, setDepartmentOptions] = useState([]);
  const [managerOptions, setManagerOptions] = useState([]);
  const [departmentFilter, setDepartmentFilter] = useState('');
  const [managerFilter, setManagerFilter] = useState('');
  const [showTopEarner, setShowTopEarner] = useState(false); // Renamed state variable
  const [sortOrder, setSortOrder] = useState('desc');
  const [editData, setEditData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/employees');
      setEmployeeData(response.data);
      setFilteredData(response.data);

      const uniqueDepartments = [...new Set(response.data.map(employee => employee.department_id))];
      const uniqueManagers = [...new Set(response.data.map(employee => employee.reporting_manager))];
      setDepartmentOptions(['', ...uniqueDepartments]);
      setManagerOptions(['', ...uniqueManagers]);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/api/employees/${id}`);
      fetchData(); // Fetch the updated list after deletion
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const updateUser = async () => {
    try {
      await axios.patch(`http://localhost:4000/api/employees/${editData.employee_id}`, editData);
      fetchData(); // Fetch the updated list after updating
      setEditData(null); // Reset editData state after saving
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };
  
  useEffect(() => {
    let filtered = employeeData;

    if (departmentFilter !== '') {
      filtered = filtered.filter(employee => employee.department_id === departmentFilter);
    }

    if (managerFilter !== '') {
      filtered = filtered.filter(employee => employee.reporting_manager === managerFilter);
    }

    if (showTopEarner) {
      // Filter to get only top earners per department
      const topEarnersMap = new Map();
      filtered.forEach(employee => {
        const currentTopEarner = topEarnersMap.get(employee.department_id);
        if (!currentTopEarner || currentTopEarner.salary < employee.salary) {
          topEarnersMap.set(employee.department_id, employee);
        }
      });
      filtered = Array.from(topEarnersMap.values());
    } else {
      // If showTopEarner is false, sort by salary
      filtered.sort((a, b) => {
        return sortOrder === 'asc' ? a.salary - b.salary : b.salary - a.salary;
      });
    }

    setFilteredData(filtered);
  }, [employeeData, departmentFilter, managerFilter, showTopEarner, sortOrder]);

  const toggleSortOrder = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  const handleEdit = (employee) => {
    setEditData({ ...employee });
  };

  const handleSave = () => {
    updateUser();
  };

  return (
    // <div>
    // <Navigation />
    <div className="sales-review-container">
      <h1 className="page-title">Unlocking Efficiency: Introducing Our Dynamic HRIS System for Seamless Human Resource Management</h1>
      <div className="filters">
        <label>
          Department Filter:
          <select value={departmentFilter} onChange={(e) => setDepartmentFilter(e.target.value)}>
            {departmentOptions.map((option, index) => (
              <option key={index} value={option}>{option || 'All Departments'}</option>
            ))}
          </select>
        </label>
        <label>
          Manager Filter:
          <select value={managerFilter} onChange={(e) => setManagerFilter(e.target.value)}>
            {managerOptions.map((option, index) => (
              <option key={index} value={option}>{option || 'All Managers'}</option>
            ))}
          </select>
        </label>
        <label>
          <input
            type="checkbox"
            checked={showTopEarner}
            onChange={() => setShowTopEarner(!showTopEarner)}
          />
          Show Top Earner per Department
        </label>
      </div>
      <div className="table-container">
        <table className="employee-table">
          <thead>
            <tr>
              <th>Employee ID</th>
              <th>Name</th>
              <th>Age</th>
              <th>Job Title</th>
              <th>Reporting Manager</th>
              <th>Employee Type</th>
              <th>Employee Status</th>
              <th>Mobile</th>
              <th>Email</th>
              <th>Address</th>
              <th>Salary</th>
              <th>Department ID</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((employee, index) => (
              <tr key={index}>
                <td>{employee.employee_id}</td>
                <td>{employee.employee_name}</td>
                <td>{employee.age}</td>
                <td>{employee.job_title}</td>
                <td>{employee.reporting_manager}</td>
                <td>{employee.employee_type}</td>
                <td>{employee.employee_status}</td>
                <td>{employee.mobile}</td>
                <td>{employee.email}</td>
                <td>{employee.address}</td>
                <td>{employee.salary}</td>
                <td>{employee.department_id}</td>
                <td>
                  {editData && editData.employee_id === employee.employee_id ? (
                    <>
                      <input type="text" value={editData.employee_name} onChange={(e) => setEditData({ ...editData, employee_name: e.target.value })} />
                      <input type="text" value={editData.email} onChange={(e) => setEditData({ ...editData, email: e.target.value })} />
                      <input type="text" value={editData.mobile} onChange={(e) => setEditData({ ...editData, mobile: e.target.value })} />
                      <button onClick={() => handleSave()}>Save</button>
                    </>
                  ) : (
                    <>
                      <button onClick={() => handleEdit(employee)}>Edit</button>
                      <button onClick={() => deleteUser(employee.employee_id)}>Delete</button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    // <Footer />
    // </div>
  );
};

export default EmployeeManagement;
