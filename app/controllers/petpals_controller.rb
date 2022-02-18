class PetpalsController < ApplicationController

    def index
        petpals = Petpal.all
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

    def destroy
        petpal = Activity.find(petpal[:id])
        petpal.destroy
        render json: {}

       head :no_content

        rescue ActiveRecord::RecordNotFound
            render json:{"error": "activity not found"}, status: :not_found
    
    end

    private
    def petpal_params
        params.permit(:name, :species_id, :color)
    end
end
