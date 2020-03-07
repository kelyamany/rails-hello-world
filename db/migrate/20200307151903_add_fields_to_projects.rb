class AddFieldsToProjects < ActiveRecord::Migration[5.2]
  def change
    add_column :projects, :fields, :string
  end
end
