class SessionsController < ApplicationController

    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found

    def create
        user = User.find_by(username: params[:username])
        if user
            session[:user_id] = user.id
            render json: user
        else
            render_not_found
        end
        
        
    end

    def destroy
        session.delete :user_id
        head :no_content
      end

    private
    def render_not_found
        render json: {error: "User not found"}, status: :not_found
    end
end
