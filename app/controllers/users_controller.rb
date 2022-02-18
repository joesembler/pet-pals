class UsersController < ApplicationController
    # def index
    #     users = User.all
    #     render json: users
    # end

    # def show
    #     user = User.find_by(id: session[:user_id])
    #     if user
    #       render json: user, status: :authorized
    #     else
    #       render json: { error: "Not authorized" }, status: :unauthorized
    #     end
    # end
    
    # def create
    #     user = User.create!(user_params)
    #     render json: user, status: :created
    # end

    # private
    # def user_params
    #     params.permit(:username, :password)
    # end

    skip_before_action :authorize_user, only: [:create]

    def index
        render json: User.all
    end 
    def show
        if current_user
            render json: current_user, status: :ok
          else
            render json: "No current session stored", status: :unauthorized
          end
    end 
    #wrap_parameters :user, include: [:username, :password]
    def create
        user = User.create!(username: params[:username], password: params[:password])
        session[:current_user] = user.id
        render json: user, status: :created
    rescue ActiveRecord::RecordInvalid => invalid
        render json: { errors: invalid.record.errors }, status: :unprocessable_entity
    end 

   

    private 

    def user_params
        params.permit(:username, :password)
    end 
end
