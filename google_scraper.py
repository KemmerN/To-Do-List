# -*- coding: utf-8 -*-

import requests
from bs4 import BeautifulSoup
import argparse

word = 'Hitler'

r = requests.get(
    'https://www.bing.com/search?q=' + word
                )

soup = BeautifulSoup(r.text, features="lxml")
soup.prettify()
watt = soup.find('div',{'id':'b_tween'})
