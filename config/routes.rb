Rails.application.routes.draw do
  
  namespace :api, defaults: {format: :json} do
        resources :users, only: [:create]
        resource :session, only: [:create, :show, :destroy]
        resources :boards, only: [:create, :index, :destroy, :show, :update]
        resources :bins, only: [:create, :index, :destroy, :show, :update, :edit]
  end

  get '*path', to: "static_pages#frontend_index"

end
