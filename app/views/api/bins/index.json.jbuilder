@bins.each do |bin|
  json.set! bin.id do
    json.partial! 'api/bins/index', bin: bin

  end
end

# @bins.each do |bin|
#   json.set! bin.id do
#       json.extract! image, :id, :title, :author_id
#       json.photoUrl image.photo.url
#   end
# end