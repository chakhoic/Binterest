@bins.each do |bin|
  json.set! bin.id do
    json.partial! 'api/bins/index', bin: bin

  end
end