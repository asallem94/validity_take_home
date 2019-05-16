class Api::UsersController < ApplicationController

    def show
        @user = User.find(params[:id])
    end

    def duplicates
        @duplicates = User.duplicates
    end
    def duplicates_check
        @duplicates = User.duplicates_check
        render :duplicates
    end
end