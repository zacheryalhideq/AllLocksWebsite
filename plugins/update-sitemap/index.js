const fs = require('fs');
const path = require('path');

module.exports = {
  onPreBuild: async ({ constants, utils }) => {
    try {
      const sitemapPath = path.join(constants.PUBLISH_DIR, 'sitemap.xml');
      const lastmod = new Date().toISOString().split('T')[0];

      // Check if sitemap.xml exists
      if (!fs.existsSync(sitemapPath)) {
        utils.build.failBuild('sitemap.xml not found in the publish directory');
        return;
      }

      // Read the existing sitemap.xml
      let sitemapContent = fs.readFileSync(sitemapPath, 'utf8');

      // Replace all <lastmod> tags with the current date
      sitemapContent = sitemapContent.replace(/<lastmod>.*?<\/lastmod>/g, `<lastmod>${lastmod}</lastmod>`);

      // Write the updated content back to sitemap.xml
      fs.writeFileSync(sitemapPath, sitemapContent, 'utf8');
      console.log('sitemap.xml has been updated with the latest lastmod date');
    } catch (error) {
      utils.build.failBuild('Failed to update sitemap.xml', { error });
    }
  }
};
