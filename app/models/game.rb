class Game < ApplicationRecord
    has_many :enlists, dependent: :destroy
    has_many :members, through: :enlists
end
