# frozen_string_literal: true

class TasksController < ApplicationController
  def index
    @tasks = Task.all
  end

  def update
    @task = Task.find_by(id: params[:id])
    @task.completed = !@task.completed
    @task.save
    redirect_to tasks_url
  end
end
