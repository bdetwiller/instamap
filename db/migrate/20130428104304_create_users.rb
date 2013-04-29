class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :access_token
      t.integer :list_id

      t.timestamps
    end
  end
end
