json.array! @saved_bins do |saved_bin|
    json.id saved_bin.id
    json.bin_id saved_bin.bin_id
    json.board_id saved_bin.board_id
  end