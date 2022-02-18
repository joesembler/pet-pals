class CreatePetpals < ActiveRecord::Migration[6.1]
  def change
    create_table :petpals do |t|
      t.string :name
      t.integer :user_id
      t.integer :species_id
      t.integer :health
      t.integer :happiness

      t.timestamps
    end
  end
end
