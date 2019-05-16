Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: "static_pages#root"
  
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:show, :index]
    get "/duplicates", to: "users#duplicates"
    get "/duplicates_check", to: "users#duplicates_check"
  end

end
