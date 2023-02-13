class Api::PostsController < ActionController
  def index
    @posts = Post.all.sort { |a,b| b.created_at <=> a.created_at }
  end
end