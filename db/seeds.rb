# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'csv'    

User.destroy_all
csv_text = File.read('db/normal.csv')
csv = CSV.parse(csv_text, :headers => true)
csv.each do |row, i |
    values = row.to_hash

    User.create!(user_id: values.values[0],
        first_name: values["first_name"],
        last_name: values["last_name"],
        company: values["company"],
        email: values["email"],
        address1: values["address1"],
        address2: values["address2"],
        zip: values["zip"],
        city: values["city"],
        state_long: values["state_long"],
        state: values["state"],
        phone: values["phone"])
end
puts "seed complete"