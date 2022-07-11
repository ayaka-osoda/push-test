# frozen_string_literal: true

module Tasks
  class UpdateForm
    include Virtus.model
    include ActiveModel::Model

    NATURAL_NUMBER = { only_integer: true, greater_than_or_equal_to: 0 }.freeze

    attribute :id, Integer
    attribute :completed, Boolean

    validates :id, numericality: NATURAL_NUMBER
    validates :completed, inclusion: { in: [true, false] }
  end
end
