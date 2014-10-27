require 'sinatra'

require_relative 'config/dotenv'
require_relative 'models'

get "/" do
  erb :'resumes/show'
end
