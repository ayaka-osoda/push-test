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

    it 'Task一の更新に成功すること' do
      put "/tasks/#{task.id}", params: { id: task.id, completed: !task.completed }
      expect(response).to have_http_status(200)
    end
  end
end
