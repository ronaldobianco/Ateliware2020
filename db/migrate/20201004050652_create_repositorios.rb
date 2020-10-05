class CreateRepositorios < ActiveRecord::Migration[5.2]
  def change
    create_table :repositorios do |t|
      t.text :img
      t.string :name
      t.string :text
      t.text :descricao
      t.text :data

      t.timestamps
    end
  end
end
