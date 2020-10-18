const { Octokit } = require('@octokit/rest')
const dotEnv = require('dotenv').config()
const octokit = new Octokit({ auth: dotEnv.parsed.ACCESS_TOKEN })

const body = `refs:

- https://github.com/inouetakuya/rest.js-playground`;

([
  'docs(ja): guides/concepts/nuxt-lifecycle.md',
  'docs(ja): guides/concepts/server-side-rendering.md',
  'docs(ja): guides/concepts/static-site-generation.md',
  'docs(ja): guides/concepts/views.md',
]).forEach((title) => {
  octokit.issues.create({
    owner: 'inouetakuya',
    repo: 'rest.js-playground',
    title,
    body,
    labels: ['help wanted'],
  }).then(({ data }) => {
    console.log(data)
  }).catch(error => {
    console.log(error)
  })
})

