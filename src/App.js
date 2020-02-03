import React from 'react';
import './App.css';
import useForm from "./useForm";
import validate from "./validateForm";

const App = () => {
  const {handleChange, handleSubmit, values, errors} = useForm(
    submit, 
    validate
    );
  
  function submit() {
    console.log("Submit ok");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <div>
            <input 
            name="name" 
            type="name" 
            value={values.name}
            onChange={handleChange}></input>
            {errors.name && <p>{errors.name}</p>}
          </div>
        </div>
        <div>
          <label>Day</label>
          <div>
            <input 
            name="day" 
            type="day" 
            value={values.day}
            onChange={handleChange}></input>
            {errors.day && <p>{errors.day}</p>}
          </div>
        </div>
        <div>
          <label>Grade</label>
          <div>
            <input 
            name="grade" 
            type="grade" 
            value={values.grade}
            onChange={handleChange}></input>
            {errors.grade && <p>{errors.grade}</p>}
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App;
