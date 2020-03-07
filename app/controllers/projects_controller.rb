# frozen_string_literal: true
require 'uri'
require 'net/http'
require 'json'

class ProjectsController < ApplicationController
  def index
    @projects_table = Project.all
    @projects= []
    @projects_table.each do |project|
      project_json = JSON.parse(project.to_json)
      city = project_json['city']
      # TODO: Find out a way to make the request for unique cities
      # TODO: Find out a way to perform the operation asynchronously
      # temp = get_weather(city)
      project = project_json.merge({weather: 200})
      @projects << project
    end
    render json: @projects
  end

  # TODO: Investigate why http.request(request) stops the execution
  def get_weather(city)
    url = URI("api.openweathermap.org/data/2.5/weather?q=#{city}&appid=ee91aa6de8a7b91fb9d1e8031d8aefa9")
    http = Net::HTTP.new(url.host, url.port)
    request = Net::HTTP::Get.new(url)
    response = http.request(request)
    json = JSON.parse(response)
    json['main']['temp']
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
