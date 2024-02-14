import re
import json

dictionary_file = open("dictionary.js", "r").read()
dictionary_json = json.loads(re.search("`(.|\n)*`", dictionary_file)[0][1:-1])

new_words = list(map(str.strip, open("new_words.txt", "r", encoding="UTF-8").readlines()))
for new_word in new_words:
    if new_word not in dictionary_json:
        dictionary_json.append(new_word)

new_json = json.dumps(dictionary_json, indent = 2)

with open("dictionary.js", "w") as new_dictionary_file:
    new_dictionary_file.write("let dictionary_json = `")
    new_dictionary_file.write(new_json)
    new_dictionary_file.write("`\n")
