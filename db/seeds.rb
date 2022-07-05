# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
user = User.create!(name:  "Example User",
             email: "example@railstutorial.org")

5.times do |num|
  task_name = "sample_task" + num.to_s
  date = "2022-#{12 - num}-1"
  deadline = Date.parse(date)
  Task.create!(name: task_name, completed: false, user_id: user.id, deadline: deadline)
end
