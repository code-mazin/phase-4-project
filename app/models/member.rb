class Member < ApplicationRecord
    has_many :enlists
    has_many :games, through: :enlists

    validates :name, presence: true, uniqueness: true
    validates :age, inclusion: 8..18
end
