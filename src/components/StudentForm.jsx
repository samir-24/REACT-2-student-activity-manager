import { useRef } from "react";

function StudentForm(props) {

  const inputRef = useRef();

  function handleSubmit(event) {
    event.preventDefault(); 

    let name = inputRef.current.value; 

    if (name == "") {
      alert("Please enter name");
      inputRef.current.focus(); 
      return;
    }

    props.addStudent(name); //

    inputRef.current.value = ""; 
    inputRef.current.focus(); 
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter student name"
        ref={inputRef}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default StudentForm;