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
                  buildHookId: '603035edcb9bec3247cba21e',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-ndwdgv5f',
                  apiId: 'd14c86e4-a561-4e67-aca4-95ce87787f34'
                },
                {
                  buildHookId: '603035ed258d663b33220fee',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-g32cosvz',
                  apiId: 'a6eb0fb7-ddd1-4d27-b5b5-693c5ea38cde'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/benshrimpton/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-g32cosvz.netlify.app', category: 'apps'}
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
