json.extract! repositorio, :id, :img, :name, :text, :descricao, :data, :created_at, :updated_at
json.url repositorio_url(repositorio, format: :json)
