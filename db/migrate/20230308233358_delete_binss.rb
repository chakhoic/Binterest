class DeleteBinss < ActiveRecord::Migration[7.0]
  def change
    remove_column :bins, :url
  end
end
