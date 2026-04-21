import React, { useState } from "react";

function AddStudentForm({ addStudent }) {

  const [name, setName] = useState("");
  const [score, setScore] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name === "" || score === "") {
      alert("Please fill all fields");
      return;
    }

    addStudent(name, Number(score));

    // clear form
    setName("");
    setScore("");
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="number"
        placeholder="Enter score"
        value={score}
        onChange={(e) => setScore(e.target.value)}
      />

      <button type="submit">Add Student</button>
    </form>
  );
}

export default AddStudentForm;