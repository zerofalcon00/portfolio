require 'sinatra'

get '/' do
	erb :home
end

get '/blog' do
	erb :blog
end

