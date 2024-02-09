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
                        }, a.newRandPuzzle = function() {
                            let id = "";
                            for (let i = 0; i < 7; i++) {
                                id += "abcdefghijklmnopqrstuvwxyz".charAt(Math.floor(Math.random() * 26));
                            }
                            window.location.href = window.location.href.replace(/Generic-Word-Game.*/, "Generic-Word-Game.htm?" + id);
                        }, a.newCustomPuzzle = function() {
                            let id = prompt("Enter 7 letters:\nEntering less than 7 letters will cause the remaining letters to be randomized, invalid characters will be replaced with a random character.","").toLowerCase();
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
                            window.location.href = window.location.href.replace(/Generic-Word-Game.*/, "Generic-Word-Game.htm?" + id);
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
                            e.stopPropagation(), e.preventDefault(), a.letterClick(e.key)
                        };
                        var n = ""
                        if (randomize_letters) {
                            var n = ""
                            let match = window.location.search.match(/(?<=(\?)).*/)
                            if (match != null) {
                                n = match[0]
                            } else {
                                let id = "";
                                for (let i = 0; i < 7; i++) {
                                    id += "abcdefghijklmnopqrstuvwxyz".charAt(Math.floor(Math.random() * 26));
                                }
                                n = id;
                            }
                        } else {
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
                        }
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
                                className: "button showAnswers",
                                onClick: this.toggleAnswers
                            }, b), 
                            n.a.createElement("h1", null, "Generic Word Game"),
                            n.a.createElement("div", {},
                                    n.a.createElement("div", {
                                        id: "new-puzzle",
                                        className: "button",
                                        onClick: this.newPuzzle
                                    }, "New Puzzle"),
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