import React from "react"
import PropTypes from "prop-types"
const NewProject = (props) => {
    let fields = {};

  return(
      <form onSubmit={ (e) => {
          props.handleFormSubmit(fields.name.value, fields.number.value, fields.city.value);
          e.preventDefault();
      }}>

          <input ref={input => fields.name = input} placeholder='Name'/>
        <input ref={input => fields.number = input} placeholder='Number' />
        <input ref={input => fields.city = input} placeholder='City' />
          <input type="submit" value="Add Project" />
      </form>
  )
}
export default NewProject
