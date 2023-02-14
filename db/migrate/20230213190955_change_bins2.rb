class ChangeBins2 < ActiveRecord::Migration[7.0]
  def change
    add_reference :bins, :author, null: false, foreign_key: {to_table: :users}
    add_reference :bins, :board, null: false, foreign_key: true
  end
end