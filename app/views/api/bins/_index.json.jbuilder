json.extract! bin, 
  :id, 
  :title,
  :body,
  :photo,
  :author_id

json.photoUrl bin.photo.attached? ? bin.photo.url : nil
