import React from "react"
import PropTypes from "prop-types"
import AllProjects from "./AllProjects";
import NewProject from "./NewProject";
class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: []
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.addNewProject = this.addNewProject.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.deleteProject = this.deleteProject.bind(this)
  }

  addNewProject(project){
    this.setState({
      projects: this.state.projects.concat(project)
    })
  }

  componentDidMount(){
    fetch('/projects')
        .then((response) => {return response.json()})
        .then((data) => {this.setState({ projects: data }) });
  }

  handleFormSubmit(name, number, city){
    let body = JSON.stringify({project: {name: name, number:   number, city: city, start: Date.now(), end: Date.now()}});

    fetch('/projects', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: body,
    }).then((response) => {return response.json()})
        .then((project)=>{
          this.addNewProject(project)
        })
  }

  handleDelete(id){
    fetch(`/projects/${id}`,
        {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json'
          }
        }).then((response) => {
            if (response.ok)
            {
                this.deleteProject(id);
            }
    })
  }
  deleteProject(id){
   let newProjects = this.state.projects.filter((project) => project.id !== id);
    this.setState({
      projects: newProjects
    })
  }
  render(){
    return(
        <div>
          <NewProject handleFormSubmit={this.handleFormSubmit}/>
          <AllProjects projects={this.state.projects} handleDelete={this.handleDelete}/>
        </div>
    )
  }
}

export default Projects
