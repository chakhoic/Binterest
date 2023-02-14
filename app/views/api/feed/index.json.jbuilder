json.pics do
@pics.each do |pic|
  json.set! pic.id do
    json.extract! pic,
    :id,
    :title
    debugger
    json.photoURL [url,
    ].sample
    end
    end
    end