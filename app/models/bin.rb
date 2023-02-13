class Bin < ApplicationRecord
  validates :title, presence: true
  validates :author_id, :board_id, presence: true
  validates :author_id, uniqueness: true
    
    has_one_attached :photo

    belongs_to :boards,
        class_name: :Board,
        foreign_key: :board_id

    belongs_to :author,
        class_name: :User,
        foreign_key: :author_id
end
