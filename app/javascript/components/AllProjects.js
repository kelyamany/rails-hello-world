import React from "react"
import PropTypes from "prop-types"

const allProjects = (props) => {

    // TODO: Separate the block where the project is rendered into a separate .js file
    var projects = props.projects.map((project) => {
      return(
          <div key={project.id}>
          <h1>{project.name}</h1>
          <p>{project.number}</p>
          <p>{project.city}</p>
              <p>{project.weather}</p>
              <p>{project.start}</p>
          <p>{project.end}</p>
              <button onClick={() => props.handleDelete(project.id)}>Delete</button>
          </div>
    )
    })

    return(
        <div>
        {projects}
        </div>
  )
  }

export default allProjects
