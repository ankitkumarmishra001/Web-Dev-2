import React, { useState } from "react";
import Header from "./components/Header";
import StudentTable from "./components/StudentTable";
import AddStudentForm from "./components/AddStudentForm";
import "./App.css";

function App() {

  const [students, setStudents] = useState([
    { id: 1, name: "Ankit", score: 75 },
    { id: 2, name: "Rahul", score: 35 },
    { id: 3, name: "Priya", score: 50 }
  ]);

  // update score
  const updateScore = (id, newScore) => {
    const updated = students.map((s) =>
      s.id === id ? { ...s, score: newScore } : s
    );
    setStudents(updated);
  };

  // add new student
  const addStudent = (name, score) => {
    const newStudent = {
      id: students.length + 1,
      name: name,
      score: score
    };
    setStudents([...students, newStudent]);
  };

  return (
    <div className="app">
      <Header />
      <AddStudentForm addStudent={addStudent} />
      <StudentTable students={students} updateScore={updateScore} />
    </div>
  );
}

export default App;