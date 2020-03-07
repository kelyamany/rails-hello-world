import React from "react"
import PropTypes from "prop-types"
const NewProject = (props) => {  let formFields = {}

  return(
      <form onSubmit={ (e) => {
          props.handleFormSubmit(formFields.name.value, formFields.number.value, formFields.city.value);
       e.target.reset();
      }}>

          <input ref={input => formFields.name = input} placeholder='Name'/>
        <input ref={input => formFields.number = input} placeholder='Number' />
        <input ref={input => formFields.city = input} placeholder='City' />
        <button>Submit</button>
      </form>
  )
}
export default NewProject
