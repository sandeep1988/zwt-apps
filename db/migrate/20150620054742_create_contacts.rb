class CreateContacts < ActiveRecord::Migration
  def change
    create_table :contacts do |t|
      t.string :first_name
      t.string :last_name
      t.string :email
      t.string :compnay_name
      t.string :Contact
      t.string :Type

      t.timestamps null: false
    end
  end
end
