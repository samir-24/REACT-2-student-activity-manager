import { useState } from "react";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";

function App() {

  // student save
  const [students, setStudents] = useState([]);

  // student add
  function addStudent(name) {
    const studentObject = {
      id: Date.now(),
      name: name,
      present: false,
      showDetails: false
    };

    setStudents([...students, studentObject]);
  }

  // student delete
  function deleteStudent(id) {
    const filteredStudents = students.filter(function(student) {
      return student.id !== id;
    });

    setStudents(filteredStudents);
  }

  // details show hide
  function toggleDetails(id) {
    const updatedStudents = students.map(function(student) {

      if (student.id === id) {
        return {
          ...student,
          showDetails: !student.showDetails
        };
      } else {
        return student;
      }

    });

    setStudents(updatedStudents);
  }

  // change present absent
  function markStatus(id) {
    const updatedStudents = students.map(function(student) {

      if (student.id === id) {
        return {
          ...student,
          present: !student.present
        };
      } else {
        return student;
      }

    });

    setStudents(updatedStudents);
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Student Activity Manager</h1>

      <StudentForm addStudent={addStudent} />

      <h3>Total Students: {students.length}</h3>

      <StudentList
        students={students}
        deleteStudent={deleteStudent}
        toggleDetails={toggleDetails}
        markStatus={markStatus}
      />
    </div>
  );
}

export default App;