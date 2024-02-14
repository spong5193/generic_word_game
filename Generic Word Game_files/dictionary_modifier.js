let match = window.location.search.match(/(?<=(\?)).*/);
if (match != null) {
    let match_val = match[0];
    if (match_val == "nytbeegame") {
        dictionary_json = JSON.stringify(window.gameData["today"]["answers"]);
    }
}