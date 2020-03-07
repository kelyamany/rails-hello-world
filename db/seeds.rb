# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
#
projects = ['project1', 'project2', 'project3']
i = 0
projects.each{|project| Project.create(name: project, number: i+=1 , city: "Vienna", start: DateTime.now, end: DateTime.new(2020, 0o3, 0o7, 17, 0o0,0o0))}
