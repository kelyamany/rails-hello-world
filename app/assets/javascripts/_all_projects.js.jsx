class AllProjects extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: []
        };
    }  componentDidMount(){
        fetch('/projects/index.json')
            .then((response) => {return response.json()})
            .then((data) => {this.setState({ projects: data }) });
    }

    render(){
        var projects = this.state.projects.map((project) => {
            return(
                <div key={project.id}>
                    <h1>{project.name}</h1>
                    <p>{project.number}</p>
                    <p>{project.city}</p>
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
}