class CreateProjects < ActiveRecord::Migration[5.2]
  def change
    create_table :projects do |t|
      t.string :name
      t.integer :number
      t.string :city
      t.datetime :start
      t.datetime :end

      t.timestamps
    end
  end
end
