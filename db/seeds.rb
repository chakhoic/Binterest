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
    body: 'liu',
  )
  pic_b1 = URI.open("https://binz1-seeds.s3.amazonaws.com/Cat03.jpeg")
  b1.photo.attach(io: pic_b1, filename:"b1")
  b1.save!

  b2 = Bin.create!(
    title: 'app',
    author_id: 1,
    board_id: 1,
    body: 'lee',
  )
  pic_b2 = URI.open("https://binz1-seeds.s3.amazonaws.com/appp.jpg")
  b2.photo.attach(io: pic_b2, filename:"b2")
  b2.save!

  b3 = Bin.create!(
    title: 'car',
    author_id: 1,
    board_id: 1,
    body: 'testing1'
  )
  pic_b3 = URI.open("https://binz1-seeds.s3.amazonaws.com/car.jpeg")
  b3.photo.attach(io: pic_b3, filename:"b3")
  b3.url = b3.photo.url # set the url attribute
  b3.save!

  b13 = Bin.create!(
    title: 'gas',
    author_id: 1,
    board_id: 1,
    body: 'liu',
  )

  pic_b13 = URI.open("https://binz1-seeds.s3.amazonaws.com/gas.jpeg")
  b13.photo.attach(io: pic_b13, filename:"b13")
  b13.save!

  b14 = Bin.create!(
    title: 'kfc',
    author_id: 1,
    board_id: 1,
    body: 'liu',
  )
  pic_b14 = URI.open("https://binz1-seeds.s3.amazonaws.com/kfc.jpeg")
  b14.photo.attach(io: pic_b14, filename:"b14")
  b14.save!

  b15 = Bin.create!(
    title: 'ny',
    author_id: 1,
    board_id: 1,
    body: 'liu',
  )
  pic_b15 = URI.open("https://binz1-seeds.s3.amazonaws.com/ny.jpeg")
  b15.photo.attach(io: pic_b15, filename:"b15")
  b15.save!

  b16 = Bin.create!(
    title: 'nyc',
    author_id: 1,
    board_id: 1,
    body: 'liu',
  )
  pic_b16 = URI.open("https://binz1-seeds.s3.amazonaws.com/nyc.jpeg")
  b16.photo.attach(io: pic_b16, filename:"b16")
  b16.save!

  b17 = Bin.create!(
    title: 'nyy',
    author_id: 1,
    board_id: 1,
    body: 'liu',
  )
  pic_b17 = URI.open("https://binz1-seeds.s3.amazonaws.com/nyy.jpeg")
  b17.photo.attach(io: pic_b17, filename:"b17")
  b17.save!

  # user2 bins

  b4 = Bin.create!(
    title: 'USER2',
    author_id: 2,
    board_id: 3,
    body: 'liu',
  )
  pic_b1 = URI.open("https://binz1-seeds.s3.amazonaws.com/appp.jpg")
  b4.photo.attach(io: pic_b1, filename:"b1")
  b4.save!




