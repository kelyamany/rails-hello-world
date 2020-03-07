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
    this.handleFormSubmit = this.handleFormSubmit.bind(this)

  }

  componentDidMount(){
    fetch('/projects/index')
        .then((response) => {return response.json()})
        .then((data) => {this.setState({ projects: data }) });
  }

  handleFormSubmit(name){
    console.log(name)
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
