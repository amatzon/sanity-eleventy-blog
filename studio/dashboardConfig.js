export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f4a7cee5bf930fa22ad349d',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-3w9uu42b',
                  apiId: '123f18c9-f30e-484c-a0d3-d3b6a74b387e'
                },
                {
                  buildHookId: '5f4a7ceecff5d09b157c64fc',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-5kficv18',
                  apiId: '263f7e5f-0679-444c-bac0-42658b373581'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/amatzon/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-5kficv18.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
