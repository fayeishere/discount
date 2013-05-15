require 'rubygems'
require 'sinatra'
require 'json'

# get the index page
get "/" do
  @cost = "25"
  erb :index, :layout => :layout
end

get "/codecheck/:discount" do
  content_type :json
  { :discount => params[:discount], :valid => true, :discount_human => "25%", :discount_amt => 0.25 }.to_json
  # { :key1 => 'value1', :key2 => 'value2'}.to_json
end
