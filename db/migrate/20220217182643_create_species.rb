class CreateSpecies < ActiveRecord::Migration[6.1]
  def change
    create_table :species do |t|
      t.string :name
      t.string :image
      t.string :activity

      t.timestamps
    end
  end
end
