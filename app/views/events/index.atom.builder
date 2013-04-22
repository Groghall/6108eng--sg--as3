atom_feed do |feed|
  feed.title("Oval Ski Club Events")

  @events.each do |event|
    feed.entry(event) do |entry|
      entry.title(event.title)
      entry.content(event.body, :type => 'html')
      entry.author do |author|
      author.name "Stephen Gault"
    end
    end
  end
end