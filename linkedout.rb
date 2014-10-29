require 'sinatra'
require 'better_errors'

require_relative 'config/dotenv'
require_relative 'models'

configure :development do
  use BetterErrors::Middleware
  BetterErrors.application_root = File.expand_path('..', __FILE__)
end

helpers do
  def default_user
    @default_user ||= User.last
  end
end

get "/" do
  @jobs = default_user.jobs
  @skills = default_user.skills

  erb :'resumes/show'
end

get "/resumes/edit" do
  erb :'resumes/edit'
end

put "/users/edit" do
  user_attrs = params[:user]

  default_user.update(user_attrs)

  redirect "/"
end
