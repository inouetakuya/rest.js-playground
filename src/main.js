const { Octokit } = require('@octokit/rest')
const dotEnv = require('dotenv').config()
const octokit = new Octokit({ auth: dotEnv.parsed.ACCESS_TOKEN })

const body = `refs:

- https://github.com/inouetakuya/rest.js-playground`

octokit.issues.create({
  owner: 'inouetakuya',
  repo: 'rest.js-playground',
  title: 'docs(ja): guides/concepts/context-helpers.md',
  body: body,
}).then(({ data }) => {
  console.log(data)
}).catch(error => {
  console.log(error)
})
