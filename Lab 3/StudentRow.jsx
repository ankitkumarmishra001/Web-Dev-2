import React from "react";

function StudentRow({ student, updateScore }) {

  const handleChange = (e) => {
    updateScore(student.id, Number(e.target.value));
  };

  return (
    <tr>
      <td>{student.name}</td>

      <td>
        <input
          type="number"
          value={student.score}
          onChange={handleChange}
        />
      </td>

      <td className={student.score >= 40 ? "pass" : "fail"}>
        {student.score >= 40 ? "Pass" : "Fail"}
      </td>
    </tr>
  );
}

export default StudentRow;