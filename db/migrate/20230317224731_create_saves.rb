class CreateSaves < ActiveRecord::Migration[7.0]
  def change
    create_table :saves do |t|
      t.integer :bin_id, null:false
      t.integer :board_id, null:false
      t.timestamps
    end
    add_index :saves, :bin_id
    add_index :saves, [:bin_id, :board_id], unique: true
  end
end
