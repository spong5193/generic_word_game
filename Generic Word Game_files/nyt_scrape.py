import re
import requests

nyt_spelling_bee = requests.get("https://www.nytimes.com/puzzles/spelling-bee")
with open("nyt_bee.js", "w") as nyt_bee_file:
    nyt_bee_file.write(re.search("window\.gameData = .*?(?=</script>)", nyt_spelling_bee.text)[0])
