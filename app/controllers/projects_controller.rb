# frozen_string_literal: true
require 'uri'
require 'net/http'
require 'json'

class ProjectsController < ApplicationController
  def index
    @projects_table = Project.all
    @projects= []

    #TODO: Optimize the loop by giving up the additional list
    @projects_table.each do |project|
      project_json = JSON.parse(project.to_json)
      city = project_json['city']
      # TODO: (Performance) Find out a way to make the request for unique cities
      # TODO: (Performance) Find out a way to perform the operation asynchronously
      temp = get_weather(city).to_f
      project = project_json.merge({'weather': (temp - 273.15).round})
      @projects << project
    end

    # TODO: render and handle 'project.fields' as json
    render json: @projects
  end

  def get_weather(city)
    url = URI("https://api.openweathermap.org/data/2.5/weather?q=#{city}&appid=ee91aa6de8a7b91fb9d1e8031d8aefa9")
    response = Net::HTTP.get_response(url)
    JSON.parse(response.body)['main']['temp'] if response.is_a?(Net::HTTPSuccess)
  end

  def create
    project = Project.create(project_args)
    render json: project
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
