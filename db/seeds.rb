  require "open-uri"

  Bin.destroy_all
  Board.destroy_all
  User.destroy_all

  puts "Resetting primary keys..."
  # For easy testing, so that after seeding, the first `User` has `id` of 1
  ApplicationRecord.connection.reset_pk_sequence!('users')
  ApplicationRecord.connection.reset_pk_sequence!('boards')
  ApplicationRecord.connection.reset_pk_sequence!('bins')

  puts "Creating users..."
  # Create one user with an easy to remember username, email, and password:
  User.create!(
    email: 'demo@user.io', 
    password: 'password'
  )

  User.create!(
    email: 'user2@user.io', 
    password: 'password'
  )

  User.create!(
    email: 'user3@user.io', 
    password: 'password'
  )


  Board.create!(
    title: 'BOARD1',
    author_id: 1
  )

  Board.create!(
    title: 'BOARD2',
    author_id: 1
  )

  Board.create!(
    title: 'user2',
    author_id: 2
  )

  Board.create!(
    title: 'user3',
    author_id: 3
  )

  puts "Creating bins..."

  # demouser bins
  
  b1 = Bin.create!(
    title: 'gato',
    author_id: 1,
    board_id: 1,
    body: 'nice',
  )
  pic_b1 = URI.open("https://binz1-seeds.s3.amazonaws.com/Cat03.jpeg")
  b1.photo.attach(io: pic_b1, filename:"b1")
  b1.save!

  b2 = Bin.create!(
    title: 'app',
    author_id: 1,
    board_id: 1,
    body: 'academy',
  )
  pic_b2 = URI.open("https://binz1-seeds.s3.amazonaws.com/appp.jpg")
  b2.photo.attach(io: pic_b2, filename:"b2")
  b2.save!

  b3 = Bin.create!(
    title: 'car',
    author_id: 1,
    board_id: 1,
    body: 'lambo'
  )
  pic_b3 = URI.open("https://binz1-seeds.s3.amazonaws.com/car.jpeg")
  b3.photo.attach(io: pic_b3, filename:"b3")
  b3.url = b3.photo.url 
  b3.save!

  b4 = Bin.create!(
    title: 'gas',
    author_id: 1,
    board_id: 1,
    body: 'station',
  )

  pic_b4 = URI.open("https://binz1-seeds.s3.amazonaws.com/gas.jpeg")
  b4.photo.attach(io: pic_b4, filename:"b4")
  b4.save!

  b5 = Bin.create!(
    title: 'kfc',
    author_id: 1,
    board_id: 1,
    body: 'mhmm',
  )
  pic_b5 = URI.open("https://binz1-seeds.s3.amazonaws.com/kfc.jpeg")
  b5.photo.attach(io: pic_b5, filename:"b5")
  b5.save!

  b6 = Bin.create!(
    title: 'ny',
    author_id: 1,
    board_id: 1,
    body: 'ny',
  )
  pic_b6 = URI.open("https://binz1-seeds.s3.amazonaws.com/ny.jpeg")
  b6.photo.attach(io: pic_b6, filename:"b6")
  b6.save!

  b7 = Bin.create!(
    title: 'nyc',
    author_id: 1,
    board_id: 1,
    body: 'ny',
  )
  pic_b7 = URI.open("https://binz1-seeds.s3.amazonaws.com/nyc.jpeg")
  b7.photo.attach(io: pic_b7, filename:"b7")
  b7.save!

  b8 = Bin.create!(
    title: 'nyy',
    author_id: 1,
    board_id: 1,
    body: 'welcome',
  )
  pic_b8 = URI.open("https://binz1-seeds.s3.amazonaws.com/nyy.jpeg")
  b8.photo.attach(io: pic_b8, filename:"b8")
  b8.save!

  b9 = Bin.create!(
    title: 'building',
    author_id: 1,
    board_id: 1,
    body: 'from HK',
  )
  pic_b9 = URI.open("https://binz1-seeds.s3.amazonaws.com/building.jpeg")
  b9.photo.attach(io: pic_b9, filename:"b9")
  b9.save!

  b10 = Bin.create!(
    title: 'junji ito ',
    author_id: 1,
    board_id: 1,
    body: 'spooky',
  )
  pic_b10 = URI.open("https://binz1-seeds.s3.amazonaws.com/junji.jpeg")
  b10.photo.attach(io: pic_b10, filename:"b10")
  b10.save!

  # user2 bins

  b11 = Bin.create!(
    title: 'USER2',
    author_id: 2,
    board_id: 3,
    body: 'user2',
  )
  pic_b11 = URI.open("https://binz1-seeds.s3.amazonaws.com/appp.jpg")
  b11.photo.attach(io: pic_b11, filename:"b11")
  b11.save!

  b12 = Bin.create!(
    title: 'PS1',
    author_id: 2,
    board_id: 3,
    body: 'old game',
  )
  pic_b12 = URI.open("https://binz1-seeds.s3.amazonaws.com/ps.jpeg")
  b12.photo.attach(io: pic_b12, filename:"b12")
  b12.save!

  b13 = Bin.create!(
    title: 'anime heart',
    author_id: 2,
    board_id: 3,
    body: 'i found this on the internet',
  )
  pic_b13 = URI.open("https://binz1-seeds.s3.amazonaws.com/heart.jpeg")
  b13.photo.attach(io: pic_b13, filename:"b13")
  b13.save!

  b14 = Bin.create!(
    title: 'sea lions',
    author_id: 2,
    board_id: 3,
    body: 'SF',
  )
  pic_b14 = URI.open("https://binz1-seeds.s3.amazonaws.com/sf.jpeg")
  b14.photo.attach(io: pic_b14, filename:"b14")
  b14.save!

  b15 = Bin.create!(
    title: 'old anime',
    author_id: 2,
    board_id: 3,
    body: 'hunter x hunter',
  )
  pic_b15 = URI.open("https://binz1-seeds.s3.amazonaws.com/hunter.jpeg")
  b15.photo.attach(io: pic_b15, filename:"b15")
  b15.save!

  b16 = Bin.create!(
    title: 'back alley',
    author_id: 2,
    board_id: 3,
    body: 'errie',
  )
  pic_b16 = URI.open("https://binz1-seeds.s3.amazonaws.com/street.jpeg")
  b16.photo.attach(io: pic_b16, filename:"b16")
  b16.save!

  b17 = Bin.create!(
    title: 'mall',
    author_id: 2,
    board_id: 3,
    body: 'ive been here before..',
  )
  pic_b17 = URI.open("https://binz1-seeds.s3.amazonaws.com/mall.jpeg")
  b17.photo.attach(io: pic_b17, filename:"b17")
  b17.save!

  b18 = Bin.create!(
    title: 'mall (2)',
    author_id: 2,
    board_id: 3,
    body: 'hmm..',
  )
  pic_b18 = URI.open("https://binz1-seeds.s3.amazonaws.com/mall2.jpeg")
  b18.photo.attach(io: pic_b18, filename:"b18")
  b18.save!

  b19 = Bin.create!(
    title: 'dielit',
    author_id: 2,
    board_id: 3,
    body: 'carti',
  )
  pic_b19 = URI.open("https://binz1-seeds.s3.amazonaws.com/dielit.jpeg")
  b19.photo.attach(io: pic_b19, filename:"b19")
  b19.save!

  b20 = Bin.create!(
    title: 'room',
    author_id: 2,
    board_id: 3,
    body: 'its dark in here',
  )
  pic_b20 = URI.open("https://binz1-seeds.s3.amazonaws.com/art.jpeg")
  b20.photo.attach(io: pic_b20, filename:"b20")
  b20.save!

  # user3 bins

  b21 = Bin.create!(
    title: 'USER3',
    author_id: 3,
    board_id: 4,
    body: 'user3',
  )
  pic_b21 = URI.open("https://binz1-seeds.s3.amazonaws.com/appp.jpg")
  b21.photo.attach(io: pic_b21, filename:"b21")
  b21.save!

  b22 = Bin.create!(
    title: 'quiet night',
    author_id: 3,
    board_id: 4,
    body: 'gas station',
  )
  pic_b22 = URI.open("https://binz1-seeds.s3.amazonaws.com/gas2.jpeg")
  b22.photo.attach(io: pic_b22, filename:"b22")
  b22.save!

  b23 = Bin.create!(
    title: 'taco belle',
    author_id: 3,
    board_id: 4,
    body: 'tasty!',
  )
  pic_b23 = URI.open("https://binz1-seeds.s3.amazonaws.com/taco.jpeg")
  b23.photo.attach(io: pic_b23, filename:"b23")
  b23.save!

  b24 = Bin.create!(
    title: 'old cartoon',
    author_id: 3,
    board_id: 4,
    body: 'where is it from?',
  )
  pic_b24 = URI.open("https://binz1-seeds.s3.amazonaws.com/cartoon.jpeg")
  b24.photo.attach(io: pic_b24, filename:"b24")
  b24.save!

  b25 = Bin.create!(
    title: 'chinatown',
    author_id: 3,
    board_id: 4,
    body: 'album cover',
  )
  pic_b25 = URI.open("https://binz1-seeds.s3.amazonaws.com/chinatown.jpeg")
  b25.photo.attach(io: pic_b25, filename:"b25")
  b25.save!

  b26 = Bin.create!(
    title: 'green sky',
    author_id: 3,
    board_id: 4,
    body: 'why?',
  )
  pic_b26 = URI.open("https://binz1-seeds.s3.amazonaws.com/greensky.jpeg")
  b26.photo.attach(io: pic_b26, filename:"b26")
  b26.save!

  b27 = Bin.create!(
    title: 'manga',
    author_id: 3,
    board_id: 4,
    body: 'dangerous island',
  )
  pic_b27 = URI.open("https://binz1-seeds.s3.amazonaws.com/vamp.jpeg")
  b27.photo.attach(io: pic_b27, filename:"b27")
  b27.save!

  b28 = Bin.create!(
    title: 'pixel dog',
    author_id: 3,
    board_id: 4,
    body: 'w o o f',
  )
  pic_b28 = URI.open("https://binz1-seeds.s3.amazonaws.com/doge.png")
  b28.photo.attach(io: pic_b28, filename:"b28")
  b28.save!

  b29 = Bin.create!(
    title: 'jesus',
    author_id: 3,
    board_id: 4,
    body: 'walk with me',
  )
  pic_b29 = URI.open("https://binz1-seeds.s3.amazonaws.com/jesushchrist.jpeg")
  b29.photo.attach(io: pic_b29, filename:"b29")
  b29.save!

  b30 = Bin.create!(
    title: 'cable car',
    author_id: 3,
    board_id: 4,
    body: '(over my head)',
  )
  pic_b30 = URI.open("https://binz1-seeds.s3.amazonaws.com/cable.jpeg")
  b30.photo.attach(io: pic_b30, filename:"b30")
  b30.save!

  # b31 = Bin.create!(
  #   title: 'fish tank',
  #   author_id: 3,
  #   board_id: 4,
  #   body: 'tropical',
  # )
  # pic_b31 = URI.open("https://binz1-seeds.s3.amazonaws.com/fish2.jpeg")
  # b31.photo.attach(io: pic_b31, filename:"b31")
  # b31.save!

  b32 = Bin.create!(
    title: 'flower',
    author_id: 3,
    board_id: 4,
    body: 'circles',
  )
  pic_b32 = URI.open("https://binz1-seeds.s3.amazonaws.com/flowerr.webp")
  b32.photo.attach(io: pic_b32, filename:"b32")
  b32.save!

  b33 = Bin.create!(
    title: 'dream',
    author_id: 3,
    board_id: 4,
    body: 'looks like a dream i had',
  )
  pic_b33 = URI.open("https://binz1-seeds.s3.amazonaws.com/dream.jpeg")
  b33.photo.attach(io: pic_b33, filename:"b33")
  b33.save!

  # b34 = Bin.create!(
  #   title: 'shark tank',
  #   author_id: 3,
  #   board_id: 4,
  #   body: 'be careful',
  # )
  # pic_b34 = URI.open("https://binz1-seeds.s3.amazonaws.com/fish.jpeg")
  # b34.photo.attach(io: pic_b34, filename:"b34")
  # b34.save!

  b35 = Bin.create!(
    title: 'manga panel',
    author_id: 3,
    board_id: 4,
    body: 'kimetsu no yaiba',
  )
  pic_b35 = URI.open("https://binz1-seeds.s3.amazonaws.com/demon.png")
  b35.photo.attach(io: pic_b35, filename:"b35")
  b35.save!

  b36 = Bin.create!(
    title: 'moon',
    author_id: 3,
    board_id: 4,
    body: 'graphic art',
  )
  pic_b36 = URI.open("https://binz1-seeds.s3.amazonaws.com/moon.jpeg")
  b36.photo.attach(io: pic_b36, filename:"b36")
  b36.save!










