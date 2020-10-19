import { Octokit } from "@octokit/rest";
import dotenv from 'dotenv'
import { IssuesCreateResponseData } from '@octokit/types'

dotenv.config()

const octokit = new Octokit({ auth: process.env.ACCESS_TOKEN })

const titles = [
  'docs(ja): guides/concepts/views.md',
]

const body = `refs:

- https://github.com/inouetakuya/rest.js-playground`;

titles.forEach((title) => {
  octokit.issues.create({
    owner: 'inouetakuya',
    repo: 'rest.js-playground',
    title,
    body,
    labels: ['help wanted'],
  }).then(({ data }: { data: IssuesCreateResponseData }) => {
    console.log(data)
  }).catch((error: any) => {
    console.log(error)
  })
})
