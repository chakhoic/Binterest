class Bin < ApplicationRecord
  validates :title, presence: true
  validates :author_id, :board_id, presence: true
  # validate :ensure_photo
  # before_validation :generate_default_pic
    
    has_one_attached :photo

    belongs_to :board,
        class_name: :Board,
        foreign_key: :board_id

    belongs_to :author,
        class_name: :User,
        foreign_key: :author_id

    has_many :saves,
    primary_key: :id,
    foreign_key: :bin_id,
    class_name: :Save

    has_many :saved_boards,
    through: :saves,
    source: :board

  # def ensure_photo
  #   unless self.photo.attached?
  #     errors.add(:photo, "must be attached")
  #   end
  # end

end

