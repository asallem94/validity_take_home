class User < ApplicationRecord
    def duplicates
        
    end

    def duplicates_check
        user_ids = User.select(:user_id).order(:user_id).group(:user_id).having("Count(*)>1")
        User.where(user_id: user_ids)
    end
end