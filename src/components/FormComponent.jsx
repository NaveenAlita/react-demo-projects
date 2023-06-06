import React, { useState } from "react";

function FormComponent() {
  const [formDataArray, setFormDataArray] = useState([]);
  const colorsList = ["Red", "Green", "Blue", "Yellow", "Orange"];
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    age: "",
    gender: "",
    hobbies: [],
    status: "",
    favoriteColors: [],
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(formData);
    setFormDataArray((prevFormDataArray) => [...prevFormDataArray, formData]);
    addToListHandlerProps(formData);
    toggel(false);
  };

  const handleChange = (event) => {
    const { name, value, type, checked, options } = event.target;
    if (type === "radio") {
      setFormData({
        ...formData,
        [name]: value,
      });
    } else if (type === "checkbox") {
      const updatedHobbies = checked
        ? [...formData.hobbies, value]
        : formData.hobbies.filter((hobby) => hobby !== value);
      setFormData({
        ...formData,
        hobbies: updatedHobbies,
      });
    } else if (type === "select-multiple") {
      const selectedColors = [];
      for (let i = 0; i < options.length; i++) {
        if (options[i].selected) {
          selectedColors.push(options[i].value);
        }
      }
      setFormData({
        ...formData,
        [name]: selectedColors,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="container-sm">
        <div className="row">
          <div class="col-3 mb-1">
            <label class="form-label" htmlFor="firstName">
              First Name:
            </label>
            <input
              class="form-control"
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>
          <div class="col-3 mb-3">
            <label class="form-label" htmlFor="lastName">
              Last Name:
            </label>
            <input
              class="form-control"
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row">
          <div class="col-3 mb-3">
            <label class="form-label" htmlFor="email">
              Email:
            </label>
            <input
              class="form-control"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div class="col-3 mb-3">
            <label class="form-label" htmlFor="phoneNumber">
              Phone Number:
            </label>
            <input
              class="form-control"
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row">
          <div class="col-3 mb-3">
            <label class="form-label" htmlFor="age">
              Age:
            </label>
            <input
              class="form-control"
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
            />
          </div>
          <div class="col-3 mb-3">
            <div>
              <label class="form-label" htmlFor="status">
                Status:
              </label>
              <select
                class="form-control"
                id="status"
                name="status"
                value={formData.status}
                onChange={handleChange}
              >
                <option value="">Select Status</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>
          </div>
        </div>
        <div className="row">
          <div class="col-3 mb-3">
            <label class="form-label">Gender:</label>
            <div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  id="male"
                  name="gender"
                  value="male"
                  checked={formData.gender === "male"}
                  onChange={handleChange}
                />
                <label htmlFor="male" class="form-check-label">
                  Male
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  id="female"
                  name="gender"
                  value="female"
                  checked={formData.gender === "female"}
                  onChange={handleChange}
                />
                <label htmlFor="female" class="form-check-label">
                  Female
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  id="other"
                  name="gender"
                  value="other"
                  checked={formData.gender === "other"}
                  onChange={handleChange}
                />
                <label htmlFor="other" class="form-check-label">
                  Other
                </label>
              </div>
            </div>
          </div>
          <div class="col-3 mb-3">
            <div>
              <label>Hobbies:</label>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="cricket"
                  name="hobbies"
                  value="cricket"
                  checked={formData.hobbies.includes("cricket")}
                  onChange={handleChange}
                />
                <label htmlFor="cricket" class="form-check-label">
                  Cricket
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="basketball"
                  name="hobbies"
                  value="basketball"
                  checked={formData.hobbies.includes("basketball")}
                  onChange={handleChange}
                />
                <label htmlFor="basketball" class="form-check-label">
                  Basketball
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="hockey"
                  name="hobbies"
                  value="hockey"
                  checked={formData.hobbies.includes("hockey")}
                  onChange={handleChange}
                />
                <label htmlFor="hockey" class="form-check-label">
                  Hockey
                </label>
              </div>
            </div>
          </div>
        </div>

        <div class="col-3 mb-3">
          <div>
            <label htmlFor="favoriteColors" class="form-label">
              {" "}
              Favorite Color:
            </label>
            <select
              class="form-control"
              id="favoriteColors"
              name="favoriteColors"
              multiple
              onChange={handleChange}
            >
              {colorsList.map((color) => (
                <option key={color} value={color}>
                  {color}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default FormComponent;
