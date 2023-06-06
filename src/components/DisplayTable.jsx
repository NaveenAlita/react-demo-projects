import React from "react";

const DisplayTable = ({ formDataArray, onDelete, onEdit }) => {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Phone Number</th>
          <th>Age</th>
          <th>Gender</th>
          <th>Hobbies</th>
          <th>Status</th>
          <th>Favorite Colors</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {formDataArray.map((formData, index) => (
          <tr key={index}>
            <td>{formData.firstName}</td>
            <td>{formData.lastName}</td>
            <td>{formData.email}</td>
            <td>{formData.phoneNumber}</td>
            <td>{formData.age}</td>
            <td>{formData.gender}</td>
            <td>{formData.hobbies.join(", ")}</td>
            <td>{formData.status}</td>
            <td>{formData.favoriteColors.join(", ")}</td>
            <td>
              <button
                className="btn btn-danger"
                onClick={() => onDelete(index)}
              >
                Delete
              </button>
              &nbsp;&nbsp;
              <button
                className="btn btn-secondary"
                onClick={() => onEdit(index)}
              >
                Edit
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DisplayTable;
