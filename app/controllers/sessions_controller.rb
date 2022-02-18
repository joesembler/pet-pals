class SessionsController < ApplicationController

    skip_before_action :authorize_user, only: [:login]

    def login
        user = User.find_by(username:params[:username])
        session[:current_user] = user.id
        render json: user, status: :ok
    end 

    def logout
        session.delete :current_user
    end 
end
