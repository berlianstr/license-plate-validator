import React, { useState } from "react";

const LicensePlateForm = () => {
  const [licensePlate, setLicensePlate] = useState("");
  const [isValid, setIsValid] = useState(true);

  const validateLicensePlate = (plate) => {
    const plateRegex = /^[A-Z]{1,2}\s?\d{1,4}\s?[A-Z]{1,3}$/;

    return plateRegex.test(plate);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setLicensePlate(value);
    setIsValid(validateLicensePlate(value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      alert("License plate is valid!");
    } else {
      alert("Invalid license plate. Please check and try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        License Plate:
        <input
          type="text"
          value={licensePlate}
          onChange={handleChange}
          placeholder="e.g., B 1234 ABC"
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default LicensePlateForm;
