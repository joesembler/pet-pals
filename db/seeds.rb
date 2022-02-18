# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts "Seeding species..."
Species.create!([
  {
    name: "Cat",
    image: "app/assets/images/cat-clipart.svg",
    activity: "Use Laser Pointer"
  },
  {
    name: "Dog",
    image: "app/assets/images/dog1.svg",
    activity: "Play Fetch"
  }
])

puts "Done seeding!"