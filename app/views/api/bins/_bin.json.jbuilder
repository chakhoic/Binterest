# json.extract! bin, 
#   :id, 
#   :title,
#   :body,
#   :photo,
#   :author_id

# json.photoUrl bin.photo.attached? ? bin.photo.url : nil

json.extract! bin, :id, :title, :author_id, :board_id, :body, :photo, :saved_boards
json.photoUrl bin.photo.attached? ? url_for(bin.photo) : nil
