# frozen_string_literal: true

class TasksController < ApplicationController
  protect_from_forgery

  def index
    @tasks = Task.all
  end

  def update
    tasks_form = Tasks::UpdateForm.new(update_params)
    return if tasks_form.invalid?

    @task = Task.find_by(id: tasks_form[:id])
    @task.completed = tasks_form[:completed]
    @task.save
    Task.all
  end

  private

  def update_params
    params.permit(:id, :completed)
  end
end
