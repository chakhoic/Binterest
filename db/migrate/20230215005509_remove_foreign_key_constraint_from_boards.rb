class RemoveForeignKeyConstraintFromBoards < ActiveRecord::Migration[7.0]
  def change
        remove_foreign_key :boards, :users
  end
end
