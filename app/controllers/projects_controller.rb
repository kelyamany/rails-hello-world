class ProjectsController < ApplicationController
  def index
    render json: {
        projects: [
            {
                name: "test",
                number: 3
            }
        ]
    }.to_json
  end

  def show
  end

  def new
  end

  def create
  end

  def edit
  end

  def update
  end

  def destroy
  end
end
