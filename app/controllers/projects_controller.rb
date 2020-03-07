# frozen_string_literal: true
require 'uri'
require 'net/http'
require 'json'

class ProjectsController < ApplicationController
  def index
    render json: Project.all
  end

  # TODO: Inject the weather result into the returned model objects
  def get_weather(city: string)
    url = URI("api.openweathermap.org/data/2.5/weather?q=#{city}&appid=ee91aa6de8a7b91fb9d1e8031d8aefa9")
    http = Net::HTTP.new(url.host, url.port)
    request = Net::HTTP::Get.new(url)
    response = http.request(request)
    json =  JSON.parse(response)
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
