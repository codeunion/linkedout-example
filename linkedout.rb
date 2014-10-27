require 'sinatra'

require_relative 'config/dotenv'
require_relative 'models'

get "/" do
  @user = User.last
  @jobs = @user.jobs
  @skills = @user.skills

  erb :'resumes/show'
end
