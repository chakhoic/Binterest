class ChangeBins4 < ActiveRecord::Migration[7.0]
  def change
    add_column :bins, :url, :string
  end
end
