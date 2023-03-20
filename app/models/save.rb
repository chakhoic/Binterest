class Save < ApplicationRecord
    
    belongs_to :bin,
    primary_key: :id,
    foreign_key: :bin_id,
    class_name: :Bin

    belongs_to :board,
    primary_key: :id,
    foreign_key: :board_id,
    class_name: :Board


end
