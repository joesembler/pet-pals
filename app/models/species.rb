class Species < ApplicationRecord
    has_many :petpals
    has_many :users, through: :petpals
end
