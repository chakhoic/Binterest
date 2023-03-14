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


  Board.create!(
    title: 'BOARD1',
    author_id: 1
  )

  Board.create!(
    title: 'BOARD2',
    author_id: 1
  )

  puts "Creating bins..."
  
  b1 = Bin.create!(
    title: 'b1',
    author_id: 1,
    board_id: 1,
    body: 'liu',
  )
  pic_b1 = URI.open("https://binz1-seeds.s3.amazonaws.com/appp.jpg")
  b1.photo.attach(io: pic_b1, filename:"b1")
  b1.save!

  b2 = Bin.create!(
    title: 'b2',
    author_id: 1,
    board_id: 1,
    body: 'lee',
  )
  pic_b2 = URI.open("https://binz1-seeds.s3.amazonaws.com/appp.jpg")
  b2.photo.attach(io: pic_b2, filename:"b2")
  b2.save!

  b3 = Bin.create!(
    title: 'b3',
    author_id: 1,
    board_id: 1,
    body: 'testing1'
  )
  pic_b3 = URI.open("https://binz1-seeds.s3.amazonaws.com/appp.jpg")
  b3.photo.attach(io: pic_b3, filename:"b3")
  b3.url = b3.photo.url # set the url attribute
  b3.save!

