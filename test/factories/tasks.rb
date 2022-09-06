FactoryBot.define do
  factory :task do
    id { 1 }
    name { 'sample' }
    user_id { 1 }
    completed { false }
    deadline { Date.new(2022,11,30) }
  end
end
