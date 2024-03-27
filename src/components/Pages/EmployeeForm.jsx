import React, { useState } from 'react';
import PropTypes from 'prop-types'; // Importing prop-types for prop validation
import './EmployeeForm.css'; // Importing the CSS file for styling



const EmployeeForm = ({ addEmployee }) => {
  const [formData, setFormData] = useState({
    employee_id: '',
    employee_name: '',
    age: '',
    job_title: '',
    reporting_manager: '',
    employee_type: '',
    employee_status: '',
    mobile: '', // Define mobile state variable
    email: '', // Define email state variable
    address: '',
    salary: '',
    department_id: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addEmployee(formData);
    // Clear form fields after submission
    setFormData({
      employee_id: '',
      employee_name: '',
      age: '',
      job_title: '',
      reporting_manager: '',
      employee_type: '',
      employee_status: '',
      mobile: '',
      email: '',
      address: '',
      salary: '',
      department_id: ''
    });
    // Posting form data to backend
    saveUser();
  };

  const saveUser = () => {
    console.warn({ ...formData }); // Display formData
    fetch("http://localhost:4000/api/employees", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.error("Error:", error));
  };

  return (
    // <div>
    // <Navigation />
    <div className="employee-form-container">
      
    <h2 className="form-heading">Empower Your Workforce: Introducing Our Cutting-Edge Employee Information Management Tool</h2>
    <form onSubmit={handleSubmit} className="employee-form">
      <h2>Add Employee</h2>
      <label>
        Employee ID:
        <input type="text" name="employee_id" value={formData.employee_id} onChange={handleChange} />
      </label>
      <label>
        Name:
        <input type="text" name="employee_name" value={formData.employee_name} onChange={handleChange} />
      </label>
      <label>
        Age:
        <input type="text" name="age" value={formData.age} onChange={handleChange} />
      </label>
      <label>
        Job Title:
        <input type="text" name="job_title" value={formData.job_title} onChange={handleChange} />
      </label>
      <label>
        Reporting Manager:
        <input type="text" name="reporting_manager" value={formData.reporting_manager} onChange={handleChange} />
      </label>
      <label>
        Employee Type:
        <input type="text" name="employee_type" value={formData.employee_type} onChange={handleChange} />
      </label>
      <label>
        Employee Status:
        <input type="text" name="employee_status" value={formData.employee_status} onChange={handleChange} />
      </label>
      <label>
        Mobile:
        <input type="text" name="mobile" value={formData.mobile} onChange={handleChange} />
      </label>
      <label>
        Email:
        <input type="text" name="email" value={formData.email} onChange={handleChange} />
      </label>
      <label>
        Address:
        <input type="text" name="address" value={formData.address} onChange={handleChange} />
      </label>
      <label>
        Salary:
        <input type="text" name="salary" value={formData.salary} onChange={handleChange} />
      </label>
      <label>
        Department ID:
        <input type="text" name="department_id" value={formData.department_id} onChange={handleChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
    </div>
    //  <Footer />
    //  </div>
  );
};

// Prop validation
EmployeeForm.propTypes = {
  addEmployee: PropTypes.func.isRequired // Validate addEmployee prop to be a function and required
};

export default EmployeeForm;
