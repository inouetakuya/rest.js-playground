import { Octokit } from "@octokit/rest";
import dotenv from 'dotenv'
import { IssuesCreateResponseData } from '@octokit/types'

dotenv.config()

const octokit = new Octokit({ auth: process.env.ACCESS_TOKEN })

const titles = [
  'docs(ja): guides/components-glossary/pages-middleware.md',
  'docs(ja): guides/components-glossary/pages-scrolltotop.md',
  'docs(ja): guides/components-glossary/pages-transition.md',
  'docs(ja): guides/components-glossary/pages-validate.md',
  'docs(ja): guides/components-glossary/pages-watchquery.md',
  'docs(ja): guides/concepts/nuxt-lifecycle.md',
  'docs(ja): guides/concepts/server-side-rendering.md',
  'docs(ja): guides/concepts/static-site-generation.md',
  'docs(ja): guides/concepts/views.md',
  'docs(ja): guides/configuration-glossary/configuration-render.md',
  'docs(ja): guides/configuration-glossary/configuration-server.md',
  'docs(ja): guides/configuration-glossary/configuration-telemetry.md',
  'docs(ja): guides/configuration-glossary/configuration-router.md',
  'docs(ja): guides/configuration-glossary/configuration-server-middleware.md',
  'docs(ja): guides/configuration-glossary/configuration-transition.md',
  'docs(ja): guides/configuration-glossary/configuration-modules.md',
  'docs(ja): guides/configuration-glossary/configuration-modulesdir.md',
  'docs(ja): guides/configuration-glossary/configuration-plugins.md',
  'docs(ja): guides/configuration-glossary/configuration-rootdir.md',
  'docs(ja): guides/configuration-glossary/configuration-runtime-config.md',
  'docs(ja): guides/configuration-glossary/configuration-srcdir.md',
  'docs(ja): guides/configuration-glossary/configuration-target.md',
  'docs(ja): guides/configuration-glossary/configuration-vue-config.md',
  'docs(ja): guides/configuration-glossary/configuration-watch.md',
  'docs(ja): guides/configuration-glossary/configuration-watchers.md',
  'docs(ja): guides/directory-structure/assets.md',
  'docs(ja): guides/directory-structure/components.md',
  'docs(ja): guides/directory-structure/content.md',
  'docs(ja): guides/directory-structure/dist.md',
  'docs(ja): guides/directory-structure/layouts.md',
  'docs(ja): guides/directory-structure/middleware.md',
  'docs(ja): guides/directory-structure/modules.md',
  'docs(ja): guides/directory-structure/nuxt.md',
  'docs(ja): guides/directory-structure/nuxt-config.md',
  'docs(ja): guides/directory-structure/pages.md',
  'docs(ja): guides/directory-structure/plugins.md',
  'docs(ja): guides/directory-structure/static.md',
  'docs(ja): guides/directory-structure/store.md',
  'docs(ja): guides/internals-glossary/$nuxt.md',
  'docs(ja): guides/internals-glossary/context.md',
  'docs(ja): guides/internals-glossary/internals.md',
  'docs(ja): guides/internals-glossary/internals-builder.md',
  'docs(ja): guides/internals-glossary/internals-generator.md',
  'docs(ja): guides/internals-glossary/internals-module-container.md',
  'docs(ja): guides/internals-glossary/internals-nuxt.md',
  'docs(ja): guides/internals-glossary/internals-renderer.md',
  'docs(ja): guides/internals-glossary/nuxt.md',
  'docs(ja): guides/internals-glossary/nuxt-render.md',
  'docs(ja): guides/internals-glossary/nuxt-render-and-get-window.md',
  'docs(ja): guides/internals-glossary/nuxt-render-route.md',
]

const body = `## 日本語翻訳ガイド

https://github.com/vuejs-jp/ja.nuxtjs.org/wiki

## 備考

https://github.com/nuxt/nuxtjs.org/tree/master/content/ja/api または https://ja.nuxtjs.org/api に類似のドキュメントがあるので、翻訳する際に参考にしてください。

## 関連 Issue

https://github.com/vuejs-jp/ja.nuxtjs.org/issues/22`

titles.forEach((title) => {
  octokit.issues.create({
    owner: 'vuejs-jp',
    repo: 'ja.nuxtjs.org',
    title,
    body,
    labels: [
      'guides',
      'help wanted',
    ],
  }).then(({ data }: { data: IssuesCreateResponseData }) => {
    console.log(data)
  }).catch((error: any) => {
    console.log(error)
  })
})
