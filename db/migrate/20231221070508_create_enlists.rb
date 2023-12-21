class CreateEnlists < ActiveRecord::Migration[7.1]
  def change
    create_table :enlists do |t|
      t.integer :member_id
      t.integer :game_id

      t.timestamps
    end
  end
end
