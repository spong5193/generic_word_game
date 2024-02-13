(this.webpackJsonpspellingcee = this.webpackJsonpspellingcee || []).push([
    [0], {
        15: function(e, i, s) {
            e.exports = s(39)
        },
        20: function(e, i, s) {},
        21: function(e, i, s) {},
        22: function(e, i, s) {},
        23: function(e, i, s) {},
        24: function(e, i, s) {},
        25: function(e, i, s) {},
        37: function(e, i, s) {},
        39: function(e, i, s) {
            "use strict";
            s.r(i);
            var a = s(0),
                n = s.n(a),
                r = s(3),
                t = s.n(r),
                o = (s(20), s(11)),
                l = s(12),
                c = s(14),
                d = s(13),
                u = (s(21), s(4));

            function g(e, i) {
                var s = new Set(e.split(""));
                return i.filter((function(i) {
                    for (var a = i.indexOf(e[0]) > -1, n = !1, r = 0; r < i.length; r++)
                        if (!1 === s.has(i[r])) {
                            n = !0;
                            break
                        } return a && !n
                }))
            }

            function p(e, i) {
                return i.toLowerCase().split("").every((function(i) {
                    return -1 !== e.toLowerCase().indexOf(i)
                }))
            }

            function m(e, i) {
                return e.reduce((function(e, s) {
                    var a = 0;
                    return 4 === s.length ? a = 1 : s.length > 4 && (a = s.length), e + a + (p(s, i) ? 7 : 0)
                }), 0)
            }

            function h(e) {
                for (var i = e.length - 1; i > 0; i--) {
                    var s = Math.floor(Math.random() * (i + 1)),
                        a = [e[s], e[i]];
                    e[i] = a[0], e[s] = a[1]
                }
                return e
            }

            function b(e) {
                return h(Array.from(e)).join("")
            }

            function y(e) {
                var i = {},
                    s = null;
                e.forEach((function(e) {
                    if (-1 === e.indexOf("s")) {
                        var a = function(e) {
                            var i = new Set;
                            return e.split("").forEach((function(e) {
                                i.add(e)
                            })), i
                        }(e);
                        7 === a.size && (s = Array.from(a).sort().join(""), i.hasOwnProperty(s) || (i[s] = 0), i[s] += 1)
                    }
                }));
                for (var a = Object.keys(i).filter((function(e) {
                        return 1 === i[e]
                    })), n = 0, r = null, t = 0;
                    (n < 18 || n > 44) && t < 20;) n = g(r = b(a[Math.floor(Math.random() * a.length)]), e).length, t += 1;
                return r
            }
            s(22), s(23);
            var f = function(e) {
                    return n.a.createElement("div", {
                        id: "Circle",
                        className: e.position,
                        onClick: function() {
                            return e.letterClick(e.letter)
                        }
                    }, n.a.createElement("div", {
                        className: "middle"
                    }, e.letter))
                },
                v = function(e) {
                    return n.a.createElement("div", {
                        id: "Hive"
                    }, n.a.createElement("div", {
                        className: "hex-row"
                    }, n.a.createElement(f, {
                        letter: e.letters[1],
                        letterClick: e.letterClick
                    }), n.a.createElement(f, {
                        letter: e.letters[2],
                        letterClick: e.letterClick
                    })), n.a.createElement("div", {
                        className: "hex-row even"
                    }, n.a.createElement(f, {
                        letter: e.letters[3],
                        letterClick: e.letterClick
                    }), n.a.createElement(f, {
                        position: "center",
                        letter: e.letters[0],
                        letterClick: e.letterClick
                    }), n.a.createElement(f, {
                        letter: e.letters[4],
                        letterClick: e.letterClick
                    })), n.a.createElement("div", {
                        className: "hex-row"
                    }, n.a.createElement(f, {
                        letter: e.letters[5],
                        letterClick: e.letterClick
                    }), n.a.createElement(f, {
                        letter: e.letters[6],
                        letterClick: e.letterClick
                    })))
                },
                k = s(1),
                w = (s(24), function(e) {
                    var i = Object(a.useState)(""),
                        s = Object(k.a)(i, 2);
                    s[0], s[1];
                    return n.a.createElement("div", {
                        id: "Input"
                    }, n.a.createElement("div", {
                        className: "cursor",
                        onKeyPress: function() {
                            return e.onKeyPress
                        }
                    }, n.a.createElement("span", null, e.word), n.a.createElement("div", {
                        className: "blink"
                    }), n.a.createElement("i", null)))
                }),
                z = (s(25), function(e) {
                    var i = Object(a.useState)(e.open || !1),
                        s = Object(k.a)(i, 2),
                        r = s[0],
                        t = s[1],
                        o = e.words.map((function(e) {
                            return n.a.createElement("li", {
                                key: e
                            }, e)
                        })),
                        l = e.words.concat().sort().map((function(e) {
                            return n.a.createElement("li", {
                                key: e
                            }, e)
                        })),
                        c = r ? "\u2227" : "\u2228";
                    return n.a.createElement("div", {
                        id: "FoundList"
                    }, r ? n.a.createElement("div", {
                        className: "big-box"
                    }, !e.open && n.a.createElement("div", {
                        className: "caret",
                        onClick: function() {
                            return t(!r)
                        }
                    }, n.a.createElement("p", null, c)), n.a.createElement("div", {
                        className: "big-list"
                    }, n.a.createElement("ul", null, n.a.createElement("div", {
                        className: "wrap"
                    }, l)))) : n.a.createElement("div", {
                        className: "box"
                    }, n.a.createElement("div", {
                        className: "list"
                    }, n.a.createElement("ul", null, o)), n.a.createElement("div", {
                        className: "caret",
                        onClick: function() {
                            return t(!r)
                        }
                    }, n.a.createElement("p", null, c))))
                }),
                x = s(5),
                q = s.n(x),
                j = {
                    content: {
                        top: "50%",
                        left: "50%",
                        right: "auto",
                        bottom: "auto",
                        marginRight: "-45%",
                        fontSize: "14px",
                        transform: "translate(-50%, -50%)"
                    }
                },
                E = function(e) {
                    Object(c.a)(s, e);
                    var i = Object(d.a)(s);

                    function s(e) {
                        var a;
                        Object(o.a)(this, s), (a = i.call(this, e)).newPuzzle = function() {
                            window.location.href = window.location.href.replace(/Generic-Word-Game.*/, "Generic-Word-Game.htm?" + y(u));//.reload();
                        }, a.newPuzzleSeek = function() {
                            function seek_puzzle_id(seek_input) {
                                let seek = seek_input.toLowerCase();
                                if (seek.length > 7) {
                                    seek = seek.substring(0, 7)
                                }
                                let dictionary = JSON.parse(dictionary_json);
                                function filter_dictionary(seek, word) {
                                    if (word.length !== 7) {
                                        return false;
                                    }
                                    if (word.includes("s") && !seek.includes("s")) {
                                        return false;
                                    }
                                    let deduped_word = "";
                                    new Set([word]).forEach(value => deduped_word += value);
                                    if (word.length !== deduped_word.length) {
                                        return false;
                                    }
                                    for (let i = 0; i < seek.length; i++) {
                                        if (!word.includes(seek[i])) {
                                            return false;
                                        }
                                    };
                                    return true;
                                }
                                let filtered_dictionary = dictionary.filter(filter_dictionary.bind(null, seek));
                                let random_word = filtered_dictionary[Math.floor(Math.random() * filtered_dictionary.length)];
                                if (!random_word) {
                                    alert("Failed to find a word with the desired letters.");
                                }
                                String.prototype.shuffle = function () {
                                    var a = this.split(""),
                                        n = a.length;
                                    for(var i = n - 1; i > 0; i--) {
                                        var j = Math.floor(Math.random() * (i + 1));
                                        var tmp = a[i];
                                        a[i] = a[j];
                                        a[j] = tmp;
                                    }
                                    return a.join("");
                                }
                                window.location.href = window.location.href.replace(/Generic-Word-Game.*/, "Generic-Word-Game.htm?" + random_word.shuffle());
                            }
                            let dialog_box = `
                            <div id="dialog" title="New Puzzle Seek">
                                <p>Finds a normal puzzle containing the desired letters.</p>
                                <label for="seek_input">Letters to seek for:</label>
                                <input type="text" name="seek_input" id="seek_input" class="text">
                            </div>`
                            dialog_box_active = true;
                            $(dialog_box).dialog({
                                dialogClass: "no-close",
                                modal: true,
                                width: 300,
                                buttons: [
                                    {
                                        text: "OK",
                                        click: function() {
                                            let seek_input = $("#seek_input").val();
                                            seek_puzzle_id(seek_input)
                                        }
                                    },
                                    {
                                        text: "Cancel",
                                        click: function() {
                                            $(this).dialog("close");
                                            dialog_box_active = false;
                                        }
                                    }
                                ]
                            });
                        }, a.newRandPuzzle = function() {
                            let id = "";
                            for (let i = 0; i < 7; i++) {
                                id += "abcdefghijklmnopqrstuvwxyz".charAt(Math.floor(Math.random() * 26));
                            }
                            window.location.href = window.location.href.replace(/Generic-Word-Game.*/, "Generic-Word-Game.htm?" + id);
                        }, a.newCustomPuzzle = function() {
                            function custom_puzzle_id(id_input, redirect) {
                                let id = id_input.toLowerCase();
                                if (id.length < 7) {
                                    let id_length = id.length;
                                    for (let i = 0; i < (7 - id_length); i++) {
                                        id += "abcdefghijklmnopqrstuvwxyz".charAt(Math.floor(Math.random() * 26));
                                    }
                                } else if (id.length > 7) {
                                    id = id.substring(0, 7)
                                }
                                //replace all invalid characters
                                while (true) {
                                    let old_id = id;
                                    id = id.replace(/[^abcdefghijklmnopqrstuvwxyz]/, "abcdefghijklmnopqrstuvwxyz".charAt(Math.floor(Math.random() * 26)));
                                    if (id === old_id) {
                                        break;
                                    }
                                }
                                if (redirect) {
                                    window.location.href = window.location.href.replace(/Generic-Word-Game.*/, "Generic-Word-Game.htm?" + id);
                                }
                                return id;
                            }

                            function custom_point_count(points_input, id_input, retries) {
                                let points = points_input.toLowerCase();
                                let points_min = points;
                                let points_max = points;
                                if (points.includes("-")) {
                                    points_min = points.split("-")[0];
                                    points_max = points.split("-")[1];
                                }
                                let computed_points = null;
                                let id = "";
                                let closest_id = ["", Number.MAX_SAFE_INTEGER];
                                let dictionary = JSON.parse(dictionary_json);
                                let tries = 0;
                                while (computed_points == null || computed_points > points_max || computed_points < points_min) {
                                    if (tries >= retries) {
                                        alert("Failed to find matching points in " + tries + " tries. Redirecting to closest match.");
                                        id = closest_id[0];
                                        break;
                                    }
                                    id = custom_puzzle_id(id_input, false);
                                    //exported functions start
                                    function getWords (letters, dictionary)  {
                                        const letterSet = new Set(letters.split(''))
                                        const words = dictionary.filter(word => {
                                          const hasFirstLetter = word.indexOf(letters[0]) > -1;
                                          var hasBadLetter = false;
                                          for (var i = 0; i < word.length; i++) {
                                            if (letterSet.has(word[i]) === false) {
                                              hasBadLetter = true;
                                              break;
                                            }
                                          }
                                          return hasFirstLetter && !hasBadLetter;
                                        });
                                        return words;
                                    }
                                    function wordContainsAll(word, letters) {
                                        return letters.toLowerCase().split('').every(function(letter) {
                                            return word.toLowerCase().indexOf(letter) !== -1;
                                        });
                                    }
                                    function scoreWords(words, letters) {
                                        return words.reduce( (accumulator, word) => {
                                          var points = 0
                                          if (word.length === 4) {
                                            points = 1;
                                          } else if (word.length > 4) {
                                            points = word.length;
                                          }
                                          const bonus = wordContainsAll(word, letters) ? 7 : 0
                                          return accumulator + points + bonus;
                                        }, 0);
                                    }
                                    //exported functions end
                                    computed_points = scoreWords(getWords(id, dictionary), id);
                                    tries++;

                                    if (Math.abs(computed_points - points_min) < closest_id[1]) {
                                        closest_id = [id, Math.abs(points_min - computed_points)]
                                    }
                                    if (Math.abs(points_max - computed_points) < closest_id[1]) {
                                        closest_id = [id, Math.abs(computed_points - points_max)]
                                    }
                                }
                                window.location.href = window.location.href.replace(/Generic-Word-Game.*/, "Generic-Word-Game.htm?" + id);
                            }

                            function custom_word_count(wordcount_input, id_input, retries) {
                                let wordcount = wordcount_input.toLowerCase();
                                let wordcount_min = wordcount;
                                let wordcount_max = wordcount;
                                if (wordcount.includes("-")) {
                                    wordcount_min = wordcount.split("-")[0];
                                    wordcount_max = wordcount.split("-")[1];
                                }
                                let computed_wordcount = null;
                                let id = "";
                                let closest_id = ["", Number.MAX_SAFE_INTEGER];
                                let dictionary = JSON.parse(dictionary_json);
                                let tries = 0;
                                while (computed_wordcount == null || computed_wordcount > wordcount_max || computed_wordcount < wordcount_min) {
                                    if (tries >= retries) {
                                        alert("Failed to find a matching word count in " + tries + " tries. Redirecting to closest match.");
                                        id = closest_id[0];
                                        break;
                                    }
                                    id = custom_puzzle_id(id_input, false);
                                    //exported functions start
                                    function getWordLength (letters, dictionary)  {
                                        const letterSet = new Set(letters.split(''))
                                        const words = dictionary.filter(word => {
                                          const hasFirstLetter = word.indexOf(letters[0]) > -1;
                                          var hasBadLetter = false;
                                          for (var i = 0; i < word.length; i++) {
                                            if (letterSet.has(word[i]) === false) {
                                              hasBadLetter = true;
                                              break;
                                            }
                                          }
                                          return hasFirstLetter && !hasBadLetter;
                                        });
                                        return words.length;
                                    }
                                    //exported functions end
                                    computed_wordcount = getWordLength(id, dictionary);
                                    tries++;

                                    if (Math.abs(computed_wordcount - wordcount_min) < closest_id[1]) {
                                        closest_id = [id, Math.abs(wordcount_min - computed_wordcount)]
                                    }
                                    if (Math.abs(wordcount_max - computed_wordcount) < closest_id[1]) {
                                        closest_id = [id, Math.abs(computed_wordcount - wordcount_max)]
                                    }
                                }
                                window.location.href = window.location.href.replace(/Generic-Word-Game.*/, "Generic-Word-Game.htm?" + id);
                            }
                            let dialog_box = `
                            <div id="dialog" title="New Custom Puzzle">
                                <p>Creates a puzzle with the specified letters, points, and/or words.</p>
                                <p>Entering less than 7 letters will cause the remaining letters to be randomized, invalid characters will be replaced with a random character.</p>
                                <label for="id_input">Letters:</label>
                                <input type="text" name="id_input" id="id_input" class="text">
                                <br><br>
                                <label for="count">Points or word count (e.g. 5 or 1-20):</label>
                                <input type="text" name="count" id="count" class="text">
                                <br><br>
                                <label>
                                <input type="radio" id="points-words" name="points-words" value="none" checked>
                                None</label>
                                <label>
                                <input type="radio" id="points-words" name="points-words" value="points">
                                Points</label>
                                <label>
                                <input type="radio" id="points-words" name="points-words" value="words">
                                Words</label>
                                <br><br>
                                <details>
                                    <summary>Advanced</summary>
                                    <br>
                                    <label for="retries">Tries before aborting:</label>
                                    <input type="text" name="retries" id="retries" class="text" value="1000">
                                </details>
                            </div>`
                            let loading_spinner = `<div class="loading-spinner-overlay"><div class="loading-spinner"></div></div>`
                            dialog_box_active = true;
                            $(dialog_box).dialog({
                                dialogClass: "no-close",
                                modal: true,
                                width: 300,
                                buttons: [
                                    {
                                        text: "OK",
                                        click: function() {
                                            let id_input = $("#id_input").val();
                                            let count_input = $("#count").val();
                                            let points_words = $("#points-words[type='radio']:checked").val();
                                            let retries = $("#retries").val();
                                            //requestAnimationFrame is the only reasonable way to force a redraw before long blocking operations
                                            requestAnimationFrame(function() {
                                                $(loading_spinner).appendTo("body");
                                                setTimeout( function() {
                                                    if (points_words === "words") {
                                                        custom_word_count(count_input, id_input, retries);
                                                    } else if (points_words === "points") {
                                                        custom_point_count(count_input, id_input, retries);
                                                    } else {
                                                        custom_puzzle_id(id_input, true);
                                                    }
                                                }, 1);
                                            })
                                        }
                                    },
                                    {
                                        text: "Cancel",
                                        click: function() {
                                            $(this).dialog("close");
                                            dialog_box_active = false;
                                        }
                                    }
                                ]
                            });
                        }, a.toggleAnswers = function() {
                            a.setState({
                                showAnswers: !a.state.showAnswers
                            })
                        }, a.backspace = function() {
                            a.state.currWord.length > 0 && a.setState({
                                currWord: a.state.currWord.slice(0, -1)
                            })
                        }, a.onWordSubmit = function() {
                            var e = a.state,
                                i = e.letters,
                                s = e.wordSet,
                                n = e.foundWords,
                                r = e.currWord,
                                t = null;
                            r.length < 4 ? (t = "Word is too short", a.setState({
                                currWord: ""
                            })) : -1 === r.indexOf(i[0]) ? (t = "Word is missing center letter", a.setState({
                                currWord: ""
                            })) : s.has(r) ? n.includes(r) ? (t = "Already found that word", a.setState({
                                currWord: ""
                            })) : (n.unshift(r), t = p(r, i) ? "Ooh! Pangram!" : "Nice!", localStorage.setItem("foundWords-".concat(i), JSON.stringify(n)), a.setState({
                                currWord: "",
                                foundWords: n
                            })) : (t = "Not in our word list", a.setState({
                                currWord: ""
                            })), a.displayMessage(t)
                        }, a.displayMessage = function(e) {
                            var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3500;
                            console.log("Gonna display", e), a.setState({
                                message: e,
                                showMessage: !0
                            }), setTimeout((function() {
                                a.setState({
                                    showMessage: !1
                                })
                            }), i)
                        }, a.letterClick = function(e) {
                            var i = e.toLowerCase(),
                                s = a.state.letters.indexOf(i) > -1;
                            if (" " === i) a.reorder();
                            else if (1 === i.length && i >= "a" && i <= "z" && s) {
                                var n = a.state.currWord + i;
                                a.setState({
                                    currWord: n
                                }), console.log("Valid letter?", s)
                            } else 1 === i.length ? a.displayMessage("Invalid letter", 1500) : "backspace" === i && a.state.currWord.length > 0 ? a.setState({
                                currWord: a.state.currWord.slice(0, -1)
                            }) : "enter" === i && a.onWordSubmit()
                        }, a.reorder = function() {
                            var e;
                            a.setState({
                                displayLetters: (e = a.state.letters, e[0] + h(Array.from(e.substring(1))).join(""))
                            })
                        }, a.openModal = function(e) {
                            a.setState({
                                showModal: !0
                            }), e.stopPropagation(), e.preventDefault()
                        }, a.openFAQ = function(e) {
                            a.setState({
                                showFAQ: !0
                            }), e.stopPropagation(), e.preventDefault()
                        }, a.closeModals = function() {
                            a.setState({
                                showModal: !1,
                                showFAQ: !1
                            })
                        }, a.onKeyPress = function(e) {
                            if (dialog_box_active) {
                                return;
                            }
                            e.stopPropagation(), e.preventDefault(), a.letterClick(e.key)
                        };
                        var n = ""
                        let match = window.location.search.match(/(?<=(\?)).*/)
                        if (match != null) {
                            n = match[0]
                        } else {
                            n = y(u)
                        }
                        /* var n = window.location.pathname.substring(1).toLowerCase();
                        if ("" === n) {
                            var r = y(u);
                            window.location.href = "".concat(window.location).concat(r)
                        } */
                        var t = g(n, u),
                            l = new Set(t),
                            c = m(t, n),
                            d = JSON.parse(localStorage.getItem("foundWords-".concat(n))) || [],
                            b = function(e) {
                                return {
                                    queenBee: e,
                                    genius: Math.ceil(.7 * e),
                                    amazing: Math.ceil(.5 * e),
                                    great: Math.ceil(.4 * e),
                                    nice: Math.ceil(.25 * e),
                                    solid: Math.ceil(.15 * e),
                                    good: Math.ceil(.1 * e),
                                    movingUp: Math.ceil(.05 * e),
                                    goodStart: Math.ceil(.02 * e)
                                }
                            }(c);
                        return a.state = {
                            letters: n,
                            displayLetters: n,
                            words: t,
                            wordSet: l,
                            foundWords: d,
                            maxScore: c,
                            currWord: "",
                            message: "",
                            showMessage: !1,
                            showAnswers: !1,
                            showModal: !1,
                            showFAQ: !1,
                            ratingLevels: b
                        }, a
                    }
                    return Object(l.a)(s, [{
                        key: "componentDidMount",
                        value: function() {
                            document.addEventListener("click", this._handleDocumentClick, !1), document.addEventListener("keydown", this.onKeyPress)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.state,
                                i = e.ratingLevels,
                                s = e.showModal,
                                a = e.showFAQ,
                                r = e.displayLetters,
                                t = e.maxScore,
                                o = e.message,
                                l = e.words,
                                c = e.showAnswers,
                                d = e.foundWords,
                                u = e.currWord,
                                g = e.showMessage ? "" : "hide",
                                p = m(d, r),
                                h = l.map((function(e) {
                                    var i = d.includes(e) ? "" : "missing";
                                    return n.a.createElement("li", {
                                        className: i,
                                        key: e
                                    }, e)
                                })),
                                b = c ? "Hide Answers" : "Show Answers",
                                y = 1 === d.length ? "word" : "words",
                                f = 1 === p ? "point" : "points",
                                k = function(e, i) {
                                    var s = e / i;
                                    return e == i ? "Grand Poobah!" : s >= .7 ? "Genius" : s >= .5 ? "Awesome" : s >= .4 ? "Superb" : s >= .25 ? "Nifty" : s >= .15 ? "Satisfactory" : s >= .1 ? "Promising" : s >= .05 ? "Adequate" : s >= .02 ? "Getting there" : "Newbie"
                                }(p, t);
                            return n.a.createElement("div", {
                                id: "SpellingCee",
                                onKeyPress: this.onKeyPress,
                                onClick: this.closeModals
                            }, 
                            n.a.createElement("div", {
                                className: "header"
                            },
                                n.a.createElement("div", {
                                    className: "padding-container"
                                },
                                    n.a.createElement("div", {
                                        className: "show-answers-button-container"
                                    },
                                        n.a.createElement("div", {
                                            className: "button showAnswers",
                                            onClick: this.toggleAnswers
                                        }, b),
                                    ),
                                ),
                                n.a.createElement("h1", {
                                    className: "header-title"
                                }, "Generic Word Game"),
                                n.a.createElement("div", {
                                    className: "padding-container"
                                },
                                    n.a.createElement("div", {
                                        className: "new-puzzle-button-container"
                                    },
                                        n.a.createElement("div", {
                                            id: "new-puzzle",
                                            className: "button",
                                            onClick: this.newPuzzle
                                        }, "New Puzzle"),
                                        n.a.createElement("div", {
                                            id: "new-puzzle",
                                            className: "button",
                                            onClick: this.newPuzzleSeek
                                        }, "New Puzzle Seek"),
                                        n.a.createElement("div", {
                                            id: "new-puzzle",
                                            className: "button",
                                            onClick: this.newRandPuzzle
                                        }, "New Random Puzzle"), 
                                        n.a.createElement("div", {
                                            id: "new-puzzle",
                                            className: "button",
                                            onClick: this.newCustomPuzzle
                                        }, "New Custom Puzzle")
                                    ),
                                ),
                            ),
                            n.a.createElement("div", {
                                className: "main"
                            }, 
                            n.a.createElement("div", {
                                className: "mobile"
                            }, 
                            n.a.createElement(z, {
                                words: d
                            })), 
                            n.a.createElement("div", {
                                className: "message"
                            }, 
                            n.a.createElement("p", {
                                className: g
                            }, o)), 
                            n.a.createElement(q.a, {
                                ariaHideApp: !1,
                                isOpen: a,
                                style: j
                            }, 
                            n.a.createElement("div", {
                                className: "modal"
                            }, n.a.createElement("ul", null, n.a.createElement("li", null, n.a.createElement("p", {
                                className: "question"
                            }, "Did this site change?"), n.a.createElement("p", {
                                className: "answer"
                            }, "Yep! The NY Times sent me a letter that can best be described as cease-and-desisty. So, I've changed the offending bits.")), n.a.createElement("li", null, n.a.createElement("p", {
                                className: "question"
                            }, "How does this game work?"), n.a.createElement("p", {
                                className: "answer"
                            }, "The goal is to try to find as many words as possible from the given letters. You can use letters multiple times. Words must be at least 4 letters long and must contain the blue letter in the middle. You'll get 1 point for each 4 letter word, and for longer words you'll get as many points as there are letters in the word. You'll get 7 extra points for using all the letters in a word. That's a pangram, and there's always only one.")), n.a.createElement("li", null, n.a.createElement("p", {
                                className: "question"
                            }, "Can I load today's NYT puzzle?"), n.a.createElement("p", {
                                className: "answer"
                            }, "Yeah, just add the letters to the end of the url, starting with the center letter. You can make your own puzzles this way."))))), n.a.createElement(q.a, {
                                isOpen: s,
                                style: j
                            }, n.a.createElement("div", {
                                className: "modal"
                            }, n.a.createElement("p", null, "Grand Poobah - ", i.queenBee), n.a.createElement("p", null, "Genius - ", i.genius), n.a.createElement("p", null, "Awesome - ", i.amazing), n.a.createElement("p", null, "Superb - ", i.great), n.a.createElement("p", null, "Nifty - ", i.nice), n.a.createElement("p", null, "Satisfactory - ", i.solid), n.a.createElement("p", null, "Promising - ", i.good), n.a.createElement("p", null, "Adequate - ", i.movingUp), n.a.createElement("p", null, "Getting there - ", i.goodStart))), n.a.createElement(w, {
                                word: u,
                                onWordSubmit: this.onWordSubmit
                            }), n.a.createElement("div", {
                                className: "score-container"
                            }, n.a.createElement("p", {
                                className: "score"
                            }, p, " ", f, " from ", d.length, " ", y, " "), n.a.createElement("div", {
                                className: "rating",
                                onClick: this.openModal
                            }, n.a.createElement("span", {
                                className: "level"
                            }, k))), n.a.createElement("div", {
                                className: "side-by-side"
                            }, n.a.createElement("div", {
                                className: "left-column"
                            }, n.a.createElement(v, {
                                letters: r.toUpperCase(),
                                letterClick: this.letterClick
                            }), n.a.createElement("div", {
                                className: "controls"
                            }, n.a.createElement("div", {
                                className: "button backspace",
                                onClick: this.backspace
                            }, "Backspace"), n.a.createElement("div", {
                                className: "button reorder",
                                onClick: this.reorder
                            }), n.a.createElement("div", {
                                className: "button enter",
                                onClick: this.onWordSubmit
                            }, "  Enter  ")), c && n.a.createElement("div", {
                                className: "answers"
                            }, n.a.createElement("p", null, "Answers"), n.a.createElement("ul", null, h)), n.a.createElement("div", {
                                className: "more-controls"
                            })), n.a.createElement("div", {
                                className: "desktop"
                            }, n.a.createElement(z, {
                                words: d,
                                open: !0
                            })))))
                        }
                    }]), s
                }(n.a.Component);
            s(37);
            var N = function() {
                return n.a.createElement("div", {
                    className: "App"
                }, n.a.createElement(E, null))
            };
            Boolean("localhost" === window.location.hostname || "[::1]" === window.location.hostname || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
            s(38);
            t.a.render(n.a.createElement(n.a.StrictMode, null, n.a.createElement(N, null)), document.getElementById("root")), "serviceWorker" in navigator && navigator.serviceWorker.ready.then((function(e) {
                e.unregister()
            })).catch((function(e) {
                console.error(e.message)
            }))
        },
        4: function(e) {
            e.exports = JSON.parse(dictionary_json) //dictionary.js
        }
    },
    [
        [15, 1, 2]
    ]
]);
//# sourceMappingURL=main.c059efe8.chunk.js.map