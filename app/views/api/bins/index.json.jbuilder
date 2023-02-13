@bins.each do |bin|
  json.set! bin.id do
    json.partial! 'bin', bin: bin
  end
end