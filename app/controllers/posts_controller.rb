class PostsController < ApplicationController
  skip_before_action :verify_authenticity_token
  respond_to :json

  def index
    render json: {posts: Post.all}
  end

  def create
    # post = Post.new
    render json: {status: 'OK', post: Post.create(post_params)}
  end

  private

  def post_params
    params.require(:post).permit(:name, :description, :date)
  end
end
