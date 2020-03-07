import React from "react"
import PropTypes from "prop-types"
const NewProject = (props) => {  let formFields = {}

  return(
      <form>
        <input ref={input => formFields.name = input} placeholder='Name'/>
        <input ref={input => formFields.number = input} placeholder='Number' />
        <input ref={input => formFields.city = input} placeholder='City' />
        <button>Add</button>
      </form>
  )
}
export default NewProject
