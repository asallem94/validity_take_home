class CreateUser < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :first_name, null: false
      t.string :last_name, null: false
      t.string :company
      t.string :email, null: false
      t.string :address1, null: false
      t.string :address2
      t.integer :zip
      t.string :city
      t.string :state_long
      t.string :state
      t.string :phone
    end
  end
end
