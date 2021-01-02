const path = require(`path`);

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const projectTemplate = path.resolve(
    `src/pages/templates/projectTemplate.js`
  );
  const blogsTemplate = path.resolve(`src/pages/templates/blogsTemplate.js`);
  const blogPostTemplate = path.resolve(
    `src/pages/templates/blogPostTemplate.js`
  );

  const projects = await graphql(`
    {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { glob: "**/src/pages/projects/*.md" } }
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `);
  const blogs = await graphql(`
    {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { glob: "**/src/pages/blogs/*.md" } }
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `);

  if (projects.errors || blogs.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  projects.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: projectTemplate,
      context: {},
    });
  });
  blogs.data.allMarkdownRemark.edges.forEach(({ node }, index, arr) => {
    const prevPath =
      index === arr.length - 1 ? '' : arr[index + 1].node.frontmatter.path;
    const nextPath = index === 0 ? '' : arr[index - 1].node.frontmatter.path;
    createPage({
      path: node.frontmatter.path,
      component: blogPostTemplate,
      context: { prevPath, nextPath },
    });
  });

  // Create blog-list pages
  const posts = blogs.data.allMarkdownRemark.edges;
  const postsPerPage = 6;
  const numPages = Math.ceil(posts.length / postsPerPage);
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blogs` : `/blogs/${i + 1}`,
      component: blogsTemplate,
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    });
  });
};
