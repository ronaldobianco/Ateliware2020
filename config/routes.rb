Rails.application.routes.draw do
  resources :repositorios
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "repositorios#index"
end
