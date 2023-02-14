class Board < ApplicationRecord
    validates :title, presence: true
    validates :author_id, presence: true

    has_many :bins,
        class_name: :Bin,
        foreign_key: :bin_id

    belongs_to :author,
        class_name: :User,
        foreign_key: :author_id


end
