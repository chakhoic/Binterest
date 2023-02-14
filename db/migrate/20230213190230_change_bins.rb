class ChangeBins < ActiveRecord::Migration[7.0]
  def change
    remove_column :bins, :author_id
  end
end
