@bins.each do |bin|
  json.set! bin.id do
    json.partial! 'bin', bin: bin
      json.photoURL [url,
    ].sample
  end
end