Rails.application.routes.draw do
  resources :bins
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :show, :destroy]
    resources :boards
    resources :bins do
      member do
        delete :remove_bin_from_board
      end
    end
    resources :saves, only: [:create, :destroy, :index]
  end

  get '*path', to: "static_pages#frontend_index"
end
