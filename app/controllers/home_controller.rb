class HomeController < ApplicationController
  def index
  end

  def dynamic_script
  end

  def random_color
    color = "#%06x" % (rand * 0xffffff)
    puts "Received this from the client: #{params[:some_random_input]}"
    render json: {
      color: color,
      some_random_output: params[:some_random_input].to_f * 2
    }
  end
end
