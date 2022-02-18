class User < ApplicationRecord
    #has_secure_password
    has_many :petpals
    has_many :species, through: :petpals
    
    validates :username, presence: true, uniqueness: true
end
