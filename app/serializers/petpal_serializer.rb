class PetpalSerializer < ActiveModel::Serializer
  attributes :id, :name, :user_id, :species_id, :health, :happiness
end
