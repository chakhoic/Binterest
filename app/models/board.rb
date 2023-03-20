class Board < ApplicationRecord
    validates :title, presence: true
    validates :author_id, presence: true

    has_many :bins,
        class_name: :Bin,
        foreign_key: :bin_id

    belongs_to :author,
        class_name: :User,
        foreign_key: :author_id

    has_many :saves,
    primary_key: :id,
    foreign_key: :board_id,
    class_name: :Save
    
    has_many :saved_bins,
    through: :saves,
    source: :bin



end
