exports.createPages = async ({ actions: { createPage }, graphql }) => {
  const results = await graphql(`
    {
      allContentfulHeros {
        edges {
          node {
            heroShortName
            heroDescription {
              heroDescription
            }
            heroFullName
            tags

            singleHeroImage {
              gatsbyImageData(layout: FULL_WIDTH)
            }
          }
        }
      }
    }
  `)
  results.data.allContentfulHeros.edges.forEach((edge) => {
    const hero = edge.node
    createPage({
      path: `/hero/${hero.heroShortName}/`,
      component: require.resolve('./src/components/Blog_Template.tsx'),
      context: {
        description: hero.heroDescription.heroDescription,
        name: hero.heroFullName,
        tags: hero.tags,
        image: hero.singleHeroImage.gatsbyImageData,
        roles: hero.tags,
      },
    })
  })
}
