class AddColorToPetpals < ActiveRecord::Migration[6.1]
  def change
    add_column :petpals, :color, :string
  end
end
