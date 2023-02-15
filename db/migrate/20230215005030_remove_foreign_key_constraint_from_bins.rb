class RemoveForeignKeyConstraintFromBins < ActiveRecord::Migration[7.0]
  def change
        remove_foreign_key :bins, :users
  end
end
