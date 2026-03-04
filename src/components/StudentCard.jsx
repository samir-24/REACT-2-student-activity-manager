function StudentCard({ student, deleteStudent, toggleDetails, markStatus }) {
    return (
        <div style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
            <h3>{student.name}</h3>

            <button onClick={() => toggleDetails(student.id)}>
                Toggle Details
            </button>

            <button onClick={() => markStatus(student.id)}>
                Mark {student.present ? "Absent" : "Present"}
            </button>

            <button onClick={() => deleteStudent(student.id)}>
                Delete
            </button>

            {student.showDetails && (
                <p>Status: {student.present ? "Present" : "Absent"}</p>
            )}
        </div>
    );
}

export default StudentCard;