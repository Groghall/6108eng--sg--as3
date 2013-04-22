xml.instruct! :xml, :version => "1.0" 
xml.rss :version => "2.0" do
  xml.channel do
    xml.title "Oval Ski Club Events"
    xml.description "Events scheduled for OSC"
    xml.link events_url(format: :rss)
    
    for article in @events
      xml.item do
        xml.title article.title
        xml.description article.body
      end
    end
  end
end