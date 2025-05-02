# LotusOak.org Project Rules

## Project Overview
LotusOak.org is a platform for regenerative philanthropy, aligned investing, and cultural stewardship. The project combines traditional philanthropy with social venture strategies to support projects in education, healthcare, environmental conservation, and cultural renewal.

## Technical Stack
- **Static Site Generator**: Jekyll
- **Hosting**: GitHub Pages with Cloudflare
- **Content Format**: Markdown
- **Domain**: lotusoak.org

## Directory Structure
```
LotusOak/
├── website/           # Main website content
│   ├── _layouts/     # Jekyll layout templates
│   ├── _includes/    # Reusable components
│   ├── _posts/       # Blog posts
│   ├── assets/       # Static assets (images, CSS, JS)
│   └── *.md          # Content pages
├── blog/             # Blog content
├── assets/           # Global assets
└── .github/          # GitHub configuration
```

## Content Guidelines

### Markdown Files
1. All content pages should be written in Markdown
2. Use front matter for metadata (title, layout, etc.)
3. Follow consistent heading hierarchy
4. Include alt text for all images
5. Use relative paths for internal links

### Blog Posts
1. Store in `_posts/` directory
2. Follow naming convention: `YYYY-MM-DD-title.md`
3. Include required front matter:
   ```yaml
   ---
   layout: post
   title: "Post Title"
   date: YYYY-MM-DD
   author: Author Name
   categories: [category1, category2]
   ---
   ```

### Assets
1. Images should be optimized for web
2. Use descriptive filenames
3. Store in appropriate asset directories
4. Maintain consistent image dimensions where applicable

## Development Rules

### Git Workflow
1. Use meaningful commit messages
2. Create feature branches for new content
3. Submit pull requests for review
4. Keep the main branch stable

### Jekyll Configuration
1. Update `_config.yml` for site-wide changes
2. Test locally before pushing changes
3. Keep plugins and dependencies up to date

### Content Updates
1. Follow the project's ethos in all content
2. Maintain consistent tone and voice
3. Ensure accuracy of all information
4. Include proper citations where needed

## Deployment
1. Changes to main branch auto-deploy via GitHub Pages
2. Cloudflare handles DNS and caching
3. Test all changes locally before pushing

## Project Values
- Regenerative philanthropy
- Cultural stewardship
- Environmental conservation
- Educational advancement
- Healthcare innovation

## Contact
For questions or contributions, please refer to the contact page on the website.

---

*Last updated: [Current Date]* 