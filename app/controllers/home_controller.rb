class HomeController < ApplicationController
  def index
  end

  def random_color
    color = "%06x" % (rand * 0xffffff)
    render json: {color: "#%06x" % (rand * 0xffffff)}
  end
end
