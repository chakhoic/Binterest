Rails.application.routes.draw do
  
  namespace :api, defaults: {format: :json} do
        resources :users, only: [:create]
        resource :session, only: [:create, :show, :destroy]
  end

  resources :posts, only: [:show]


  get '*path', to: "static_pages#frontend_index"

end
