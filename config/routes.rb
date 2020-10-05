Rails.application.routes.draw do
  resources :repositorios
  root "repositorios#index"
end
