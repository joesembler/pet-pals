class PetpalsController < ApplicationController
    before_action :authorize_user, only: [:create]

    def index
        petpals = current_user.petpals
        render json: petpals
    end

    def show
        petpal = Petpal.find(params[:id])
        render json: petpal

        rescue ActiveRecord::RecordNotFound
          render json: {"error": "Petpal not found"}, status: :not_found
    end
    
    def create
        petpal = Petpal.create!(petpal_params)
        render json: petpal

    rescue ActiveRecord::RecordNotFound
          render json: { errors: invalid.record.errors.full_messages}, status: :unprocessable_entity

    end

    def update
        petpal = Petpal.find_by(id: params[:id])
        if petpal
         petpal.update(petpal_params)
          render json: petpal
        else
          render json: { error: "Petpal not found" }, status: :not_found
        end
      end

    def destroy
        petpal =Petpal.find(params[:id])
        petpal.destroy
        render json: {}

       head :no_content

        rescue ActiveRecord::RecordNotFound
            render json:{"error": "activity not found"}, status: :not_found
    
    end

    private
    def petpal_params
        params.permit(:name, :species_id, :user_id, :health, :happiness, :color, :id)
    end
end
