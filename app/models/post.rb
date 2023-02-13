# class Post < ApplicationRecord
#   # validates :title, presence: true
#   # validate :ensure_photo
#   # before_validation :generate_default_pic

#   has_one_attached :photo
#   # has_many_attached :images

#   def ensure_photo
#     unless self.photo.attached?
#       errors.add(:photo, "must be attached")
#     end
#   end
# end

# post = Post.create(title: "First post!")
# file = File.open('app/assets/images/kfc.jpeg')
# post.photo.attach(io: file, filename: 'kfc.jpeg')
# post.photo.attached?