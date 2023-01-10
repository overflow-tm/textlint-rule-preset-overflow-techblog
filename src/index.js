// LICENSE : MIT
"use strict";
const { moduleInterop } = require("@textlint/module-interop");
const jtfRules = moduleInterop(require("textlint-rule-preset-jtf-style")).rules;

module.exports = {
  rules: {
    "prh-rules": moduleInterop(require("./prh-rules")),
    "ja-space-around-link": require("textlint-rule-ja-space-around-link"),
    // textlint-rule-preset-ja-spacing
    "ja-nakaguro-or-halfwidth-space-between-katakana": require("textlint-rule-ja-nakaguro-or-halfwidth-space-between-katakana"),
    "ja-no-space-around-parentheses": require("textlint-rule-ja-no-space-around-parentheses"),
    "ja-no-space-between-full-width": require("textlint-rule-ja-no-space-between-full-width"),
    "ja-space-between-half-and-full-width": require("textlint-rule-ja-space-between-half-and-full-width"),
    "ja-space-after-exclamation": require("textlint-rule-ja-space-after-exclamation"),
    "ja-space-after-question": require("textlint-rule-ja-space-after-question"),
    "ja-space-around-code": require("textlint-rule-ja-space-around-code"),
    // textlint-rule-preset-ja-technical-writing
    "sentence-length": moduleInterop(require("textlint-rule-sentence-length")),
    "max-comma": moduleInterop(require("textlint-rule-max-comma")),
    "max-ten": moduleInterop(require("textlint-rule-max-ten")),
    "max-kanji-continuous-len": moduleInterop(require("textlint-rule-max-kanji-continuous-len")),
    "no-mix-dearu-desumasu": moduleInterop(require("textlint-rule-no-mix-dearu-desumasu")),
    "ja-no-mixed-period": moduleInterop(require("textlint-rule-ja-no-mixed-period")),
    "arabic-kanji-numbers": jtfRules["2.2.2.算用数字と漢数字の使い分け"],
    "no-doubled-conjunction": moduleInterop(require("textlint-rule-no-doubled-conjunction")),
    "no-doubled-conjunctive-particle-ga": moduleInterop(require("textlint-rule-no-doubled-conjunctive-particle-ga")),
    "no-double-negative-ja": moduleInterop(require("textlint-rule-no-double-negative-ja")),
    "no-doubled-joshi": moduleInterop(require("textlint-rule-no-doubled-joshi")),
    "no-dropping-the-ra": moduleInterop(require("textlint-rule-no-dropping-the-ra")),
    "no-nfd": moduleInterop(require("textlint-rule-no-nfd")),
    "no-exclamation-question-mark": moduleInterop(require("textlint-rule-no-exclamation-question-mark")),
    "no-hankaku-kana": moduleInterop(require("textlint-rule-no-hankaku-kana")),
    "no-invalid-control-character": moduleInterop(require("@textlint-rule/textlint-rule-no-invalid-control-character")),
    "ja-no-weak-phrase": moduleInterop(require("textlint-rule-ja-no-weak-phrase")),
    "ja-no-successive-word": moduleInterop(require("textlint-rule-ja-no-successive-word")),
    "ja-no-abusage": moduleInterop(require("textlint-rule-ja-no-abusage")),
    "ja-no-redundant-expression": moduleInterop(require("textlint-rule-ja-no-redundant-expression")),
    "ja-unnatural-alphabet": moduleInterop(require("textlint-rule-ja-unnatural-alphabet")),
    "no-unmatched-pair": moduleInterop(require("@textlint-rule/textlint-rule-no-unmatched-pair")),
    "no-zero-width-spaces": moduleInterop(require("textlint-rule-no-zero-width-spaces"))
},
rulesConfig: {
    "prh-rules": true,
    "ja-space-around-link": {
        "before": true,
        "after": true
    },
     // textlint-rule-preset-ja-spacing
    "ja-nakaguro-or-halfwidth-space-between-katakana": true,
    "ja-no-space-around-parentheses": true,
    "ja-no-space-between-full-width": true,
    "ja-space-between-half-and-full-width": {
        "space": "always" // changed
    },
    "ja-space-after-exclamation": true,
    "ja-space-after-question": true,
    "ja-space-around-code": { // changed
        "before": true,
        "after": true
    },
    // textlint-rule-preset-ja-technical-writing
    "sentence-length": {
        max: 150 // changed
    },
    "max-comma": {
        max: 3
    },
    "max-ten": {
        max: 3
    },
    "max-kanji-continuous-len": {
        max: 6
    },
    "arabic-kanji-numbers": true,
    "no-mix-dearu-desumasu": {
        "preferInHeader": "",
        "preferInBody": "ですます",
        "preferInList": "である",
        "strict": false
    },
    "ja-no-mixed-period": false, // changed
    "no-double-negative-ja": true,
    "no-dropping-the-ra": true,
    "no-doubled-conjunctive-particle-ga": true,
    "no-doubled-conjunction": true,
    "no-doubled-joshi": {
        "min_interval": 1
    },
    "no-nfd": true,
    "no-invalid-control-character": true,
    "no-zero-width-spaces": true,
    "no-exclamation-question-mark": false, // changed
    "no-hankaku-kana": true,
    "ja-no-weak-phrase": false, // changed
    "ja-no-successive-word": false, // changed
    "ja-no-abusage": true,
    "ja-no-redundant-expression": true,
    "ja-unnatural-alphabet": true,
    "no-unmatched-pair": true
  }
};
