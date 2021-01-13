import React, { useState } from "react";

function Form() {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Henry");
  const [submittedData, setSubmittedData] = useState([])

  function handleFirstNameChange(e){
    console.log(e.target.value)
    return (
      setFirstName(e.target.value)
    )
  }

  function handleLastNameChange(e){
    return (
      setLastName(e.target.value)
    )
  }

  function handleSubmit(event){
    event.preventDefault()
    //putting together the current form data into an object using the values stored in state.
    const formData = {firstName: firstName, lastName: lastName }
    //handles sending our data off
    //This function might be defined in the same form component, but is more often provided as a prop.
    // props.sendFormDataSomewhere(formData)
    const dataArray = [...submittedData, formData]
    setSubmittedData(dataArray)
    //to clear the input fields
    setFirstName("")
    setLastName("")
  }

  const listOfSubmissions = submittedData.map((data, index) => {
    return(
      <div key={index}>
        {data.firstName} {data.lastName}
      </div>
    )
  })

  return (
    <div>
      <form onSubmit={handleSubmit}> 
        <input onChange={handleFirstNameChange} type="text" value={firstName} />
        <input onChange={handleLastNameChange} type="text" value={lastName} />
        <button onChange={handleSubmit} type="submit">Submit</button>
      </form>
      <h3>Submissions</h3>
      {listOfSubmissions}
    </div>
    
  );
}

export default Form;
