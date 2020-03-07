import React from "react"
import PropTypes from "prop-types"

const allProjects = (props) => {
    var projects = props.projects.map((project) => {
      return(
          <div key={project.id}>
          <h1>{project.name}</h1>
          <p>{project.number}</p>
          <p>{project.city}</p>
              <p>{project.weather}</p>
              <p>{project.start}</p>
          <p>{project.end}</p>
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
