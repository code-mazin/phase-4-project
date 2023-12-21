# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end
puts "🏕 Seeding members..."
member1 = Member.create(name: 'Caitlin', age: 8)
member2 = Member.create(name: 'Lizzie', age: 9)
member3 = Member.create(name: 'Tom', age: 12)
member4 = Member.create(name: 'Morgan', age: 15)
member5 = Member.create(name: 'Danny', age: 11)
member6 = Member.create(name: 'Peter', age: 10)
member7 = Member.create(name: 'Amanda', age: 9)
member8 = Member.create(name: 'Nick', age: 12)

puts "🏕 Seeding games..."
game1 = Game.create(name: 'Archery')
game2 = Game.create(name: 'Swimming')
game3 = Game.create(name: 'Photography')
game4 = Game.create(name: 'Arts & Crafts')
game5 = Game.create(name: 'Kayaking')
game6 = Game.create(name: 'Fencing')
game7 = Game.create(name: 'Canoeing')
game8 = Game.create(name: 'Windsurfing')

puts "🏕 Seeding enlists..."
Enlist.create(member_id: member1.id, game_id: game2.id)
Enlist.create(member_id: member1.id, game_id: game1.id)
Enlist.create(member_id: member1.id, game_id: game4.id)
Enlist.create(member_id: member2.id, game_id: game2.id)
Enlist.create(member_id: member2.id, game_id: game1.id)
Enlist.create(member_id: member4.id, game_id: game8.id)
Enlist.create(member_id: member5.id, game_id: game7.id)
Enlist.create(member_id: member3.id, game_id: game4.id)

puts "✅ Done seeding!"