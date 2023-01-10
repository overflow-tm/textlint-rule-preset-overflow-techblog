// original: https://github.com/kufu/textlint-rule-preset-smarthr/blob/main/src/prh-rules.ts
const fs = require('fs')
const prh = require('textlint-rule-prh')

const reporter = (context) => {
  const phrases = fs.readFileSync(__dirname + '/../dict/prh.yml', 'utf-8')
  return prh.fixer(context, {
    ruleContents: [phrases],
  })
}

module.exports = {
  linter: reporter,
  fixer: reporter,
}