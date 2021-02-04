# -*- coding: utf-8 -*-

import csv
from requests_html import HTMLSession
import requests

#csv_file = open('scrape.csv', 'w')
#csv_writer = csv.writer(csv_file)
#csv_writer.writerow(['text', 'author', 'tags'])

#session = HTMLSession()
resp = requests.get('http://google.com/search?q=' + 'Adolf Hitler')
resp.raise_for_status()

#res = resp.find('div.result-stats')

#print(res)


'''for html in resp.html:
  # loop over all quotes and scrape the infromation (text, author, tags) 
  # of all quotes
  quotes = html.find('div.quote')
  for quote in quotes:
    text = quote.find('.text', first=True).text
    print(text)

    author = quote.find('.author', first=True).text
    print(author)

    tags = quote.find('.tag')
    tags = [x.text for x in tags]
    print(tags)
    print('')

    csv_writer.writerow([text, author, tags])

csv_file.close()''' 