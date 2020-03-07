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
  }

  addNewProject(project){
    this.setState({
      projects: this.state.projects.concat(project)
    })
  }

  componentDidMount(){
    fetch('/projects/index')
        .then((response) => {return response.json()})
        .then((data) => {this.setState({ projects: data }) });
  }

  handleFormSubmit(name, number, city){
    let body = JSON.stringify({project: {name: name, number:   number, city: city, start: Date.now(), end: Date.now()} })

    fetch('/projects/new', {
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

  render(){
    return(
        <div>
          <NewProject handleFormSubmit={this.handleFormSubmit}/>
          <AllProjects projects={this.state.projects} />
        </div>
    )
  }
}

export default Projects
