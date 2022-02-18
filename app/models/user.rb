class User < ApplicationRecord
    has_many :petpals
    has_many :species, through: :petpals
    
end
