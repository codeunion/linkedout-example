require 'data_mapper'

DataMapper.setup(:default, ENV['DATABASE_URL'])

class User
  include DataMapper::Resource

  property :id, Serial
  property :name, String, { :required => true }
  property :bio, Text, { :required => true }
  property :email, String, { :required => true,
                             :unique => true,
                             :format => :email_address }
  property :phone, String
  property :website, String, { :format => :url }

  has n, :jobs, { :child_key => [:user_id] }
  has n, :skills, { :child_key => [:user_id] }
end

class Job
  include DataMapper::Resource

  property :id, Serial
  property :job_title, String, { :required => true }
  property :job_description, String, { :required => true }
  property :company_name, String, { :required => true }

  belongs_to :user
end

class Skill
  include DataMapper::Resource

  property :id, Serial
  property :name, String, { :required => true }

  belongs_to :user
end

DataMapper.finalize
DataMapper.auto_upgrade!
