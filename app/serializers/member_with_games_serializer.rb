class MemberWithGamesSerializer < ActiveModel::Serializer
  attributes :id, :name, :age
  has_many :games
end
