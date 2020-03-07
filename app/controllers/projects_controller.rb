class ProjectsController < ApplicationController
  def index
    render json: Project.all
  end

  def show
  end

  def new
  end

  def create
    project = Project.create(project_args)
    render json: project
  end

  def edit
  end

  def update
    project = Project.find(params[:id])
    project.update_attributes(project_args)
    render json: project
  end

  def destroy
    Project.destroy(params[:id])
  end

  private

  def project_args
    params.require(:project).permit(:id, :name, :number, :city, :start, :end)
  end
end
