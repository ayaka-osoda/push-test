require 'rails_helper'

RSpec.describe "Tasks", type: :request do
  describe "GET #index" do
    it 'Task一覧画面の表示に成功すること' do
      get tasks_path
      expect(response).to have_http_status(200)
    end
  end

  describe "PUT #update" do
    let (:user) { FactoryBot.create(:user) }
    let (:task) { FactoryBot.create(:task, user_id: user.id) }

    let (:update_task_param) { { id: task.id, completed: !task.completed } }
    let (:updated_task_status) { {"id"=>task.id, "completed"=>!task.completed} }

    it "Task一の更新に成功すること" do
      put "/tasks/#{task.id}", params: update_task_param
      expect(response).to have_http_status(200)
      expect(JSON.parse(response.body)[0]).to include(updated_task_status)
    end
  end
end
