json.extract! bin, :id, :title, :author_id, :board_id, :body, :photo, :saved_boards
json.photoUrl bin.photo.attached? ? url_for(bin.photo) : nil
