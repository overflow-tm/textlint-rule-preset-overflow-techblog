# textlint-rule-preset-overflow-techblog

## Install

```
npm i textlint-rule-preset-overflow-techblog
```

## Usage

by default

```json
{
  "rules": {
    "preset-overflow-techblog": true
  }
}
```

some options

```json
{
  "rules": {
    "preset-overflow-techblog": {
      "prh-rules": true,
      "ja-space-around-link": {
          "before": true,
          "after": true
      },
      // textlint-rule-preset-ja-spacing based
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
      // textlint-rule-preset-ja-technical-writing based
      "sentence-length": {
          "max": 150 // changed
      },
      "max-comma": {
          "max": 3
      },
      "max-ten": {
          "max": 3
      },
      "max-kanji-continuous-len": {
          "max": 6
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
  }
}
```