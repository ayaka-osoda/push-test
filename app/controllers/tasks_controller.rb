# frozen_string_literal: true

class TasksController < ApplicationController
  def index
    @tasks = Task.all
  end

  def update
    @task = Task.find_by(id: update_params[:id])
    @task.completed = update_params[:completed]
    @task.save
    redirect_to tasks_url
  end

  private

  def update_params
    params.permit(:id, :completed)
  end
end
