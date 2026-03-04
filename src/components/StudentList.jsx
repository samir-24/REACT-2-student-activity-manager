import StudentCard from "./StudentCard";

function StudentList({ students, deleteStudent, toggleDetails, markStatus }) {
  return (
    <>
      {students.length === 0 ? (
        <p style={{color:"red"}}>No Students Found</p>
      ) : (
        students.map((student) => (
          <StudentCard
            key={student.id}
            student={student}
            deleteStudent={deleteStudent}
            toggleDetails={toggleDetails}
            markStatus={markStatus}
          />
        ))
      )}
    </>
  );
}

export default StudentList;