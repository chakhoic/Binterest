# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
require "open-uri"


ApplicationRecord.transaction do 
  puts "Destroying tables..."
  # Unnecessary if using `rails db:seed:replant`
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

  b2 = Bin.create!(
    title: 'test2',
    author_id: 1,
    board_id: 1,
    body: 'testing2'
  )
  file = URI.open("https://binteresting-seeds.s3.us-east-2.amazonaws.com/boney.jpg")
  b2.photo.attach(io: file, filename: "boney.jpg")

  b1 = Bin.create!(
    title: 'test1',
    author_id: 1,
    board_id: 1,
    body: 'testing1'
  )
  file = URI.open("https://binteresting-seeds.s3.us-east-2.amazonaws.com/boney.jpg")
  b1.photo.attach(io: file, filename: "boney.jpg")

end

