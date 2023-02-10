class CreateBins < ActiveRecord::Migration[7.0]
  def change
    create_table :bins do |t|
      t.string :title, null: false
      t.string :body
      t.integer :author_id, null: false
      t.timestamps
    end
  end
end
