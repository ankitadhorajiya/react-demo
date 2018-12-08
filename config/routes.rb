Rails.application.routes.draw do
  devise_for :users
  get 'home/index'
  root to: 'home#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  #
  namespace :api do
    namespace :v1 do
      resources :users
    end
  end

  resources :posts, only: %i[index new create]
end
