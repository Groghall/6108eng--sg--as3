class Faq < ActiveRecord::Base
   attr_accessible :body, :title

  searchable do 
    text :body, :title
end
end