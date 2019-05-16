json.duplicates_check do 
    # json.set! ids, @duplicates_check.ids.sort
    @duplicates_check.each do |user|
        p user
        json.set! user.id do
            json.extract! user, :first_name, :last_name, :company, :email, :address1, :address2, :zip, :city, :state_long, :state, :phone
        end
    end
end
json.duplicates do 
    # json.set! ids, @duplicates.ids
    @duplicates.each do |user|
        p user
        json.set! user.id do
            json.extract! user, :first_name, :last_name, :company, :email, :address1, :address2, :zip, :city, :state_long, :state, :phone
        end
    end
end
# json.duplicates do
#     json.set! answer,   
#         @answer

#     json.duplicates do
#         @duplicates
#     end
#     json.duplicates_check do
#         @duplicates_check
#     end
# end

