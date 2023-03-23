Rails.application.routes.draw do
  resources :bins
  namespace :api, defaults: {format: :json} do
        resources :users, only: [:create]
        resource :session, only: [:create, :show, :destroy]
        resources :boards
        resources :bins
  end

  get '*path', to: "static_pages#frontend_index"

end
