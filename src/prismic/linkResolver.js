const linkResolver = ({ node, key, value }) => doc => {
    // Your link resolver
    switch(doc.type) {
      case "homepage": return '/';
      case "about": return "/about";
      case "contact": return "/contact";
      case "blog_post": return `/blog/${doc.uid}`;
      default: return "/";
    }
    
  };

  module.exports = linkResolver