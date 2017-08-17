require 'sinatra'

# class Portfolio < Sinatra::Base

get '/' do
	erb :home
end

get '/blog' do
	erb :blog
end

# end

