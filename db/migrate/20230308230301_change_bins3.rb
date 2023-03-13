class ChangeBins3 < ActiveRecord::Migration[7.0]
  def change
    add_column :bins, :url, :string, null: false
  end
end
