class Board < ApplicationRecord
    validates :title, presence: true
    validates :author_id, :pin_id, presence: true
    validates :author_id, :pin_id, uniqueness: true

    has_many :bins,
        class_name: :Bin,
        foreign_key: :bin_id

    belongs_to :creator,
        class_name: :User,
        foreign_key: :creator_id


end
