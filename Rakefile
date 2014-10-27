require_relative './config/dotenv'
require_relative './models'

require 'faker'

task 'db:seed' do
  # Create a new user
  user = User.create({ :name => Faker::Name.name,
                           :bio => Faker::Lorem.paragraph(2),
                           :email => Faker::Internet.email,
                           :phone => Faker::PhoneNumber.phone_number,
                           :website => Faker::Internet.url })

  # Create 5 jobs
  jobs = Array.new(5) { Job.create({ :job_title => Faker::Name.title,
                                     :job_description => Faker::Company.bs,
                                     :company_name => Faker::Company.name })
                      }

  # Create a random number of skills
  skills = Array.new(rand(10)) { Skill.create({ :name => Faker::Hacker.ingverb }) }

  # Associate the jobs and skills with the user
  jobs.each { |job| user.jobs << job }
  skills.each { |skill| user.skills << skill }

  # Save the user and all associations
  user.save
end
