class EditUsers < ActiveRecord::Migration[5.2]
  def change
    change_column :users, :address1, :string, :null => true
  end
end
