User.destroy_all

bob_loblaw = User.create!(
    email: 'bob_loblaw@lawblog.com',
    password: 'blahblah',
    password_confirmation: 'blahblah'
)

george_michael = User.create!(
    email: 'george.michael@bluth.com',
    password: 'blahblah',
    password_confirmation: 'blahblah'
)

joshua_schoenfeld = User.create!(
  email: 'josh@schoenfeld.com',
  password: 'numbersandletters',
  password_confirmation: 'numbersandletters'
)
bethany_schoenfeld = User.create!(
  email: 'beth@schoenfeld.com',
  password: 'numbersandletters',
  password_confirmation: 'numbersandletters'
)

test_test = User.create!(
  email: 'test@test.com',
  password: 'password',
  password_confirmation: 'password'
)


3.times do
  test_test.posts.create!(
    title: FFaker::Book.title,
    content: FFaker::Book.description
  )
end
3.times do
  bethany_schoenfeld.posts.create!(
      title: FFaker::Book.title,
      content: FFaker::Book.description
  )
end

3.times do
  joshua_schoenfeld.posts.create!(
      title: FFaker::Book.title,
      content: FFaker::Book.description
  )
end

3.times do
  bob_loblaw.posts.create!(
      title: FFaker::Book.title,
      content: FFaker::Book.description
  )
end

3.times do
  george_michael.posts.create!(
      title: FFaker::Book.title,
      content: FFaker::Book.description
  )
end