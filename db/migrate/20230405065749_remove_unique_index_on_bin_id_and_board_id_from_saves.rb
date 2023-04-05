class RemoveUniqueIndexOnBinIdAndBoardIdFromSaves < ActiveRecord::Migration[6.1]
  def change
    remove_index :saves, name: "index_saves_on_bin_id_and_board_id"
    add_index :saves, [:bin_id, :board_id]
  end
end
