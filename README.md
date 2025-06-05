# Lotus Oak Foundation

This repository hosts the Jekyll source for the Lotus Oak Foundation website. A
Docker setup is provided for building the site locally without installing Ruby o
r Jekyll on your machine.

## Building with Docker

1. Build the Docker image:
   ```bash
   docker build -t lotusoak-site .
   ```
2. Run the image to build and serve the site:
   ```bash
   docker run --rm -p 4000:4000 lotusoak-site bundle exec jekyll serve \
     --source=website --destination=_site --host=0.0.0.0
   ```
   The site will be available at [http://localhost:4000](http://localhost:4000).

The default container command simply builds the site, which is useful for CI pipelines.

## CI/CD & Staging Workflow

### Automatic Staging Sync
The website integrates with the root repository's CI/CD system for automated staging deployments:
- Changes to the website automatically trigger staging branch updates via the root repository
- When changes are pushed to main, the root repository detects website changes and updates the staging branch
- This enables streamlined deployment workflow from staging branches

### Development Process
1. Make changes to website content or configuration
2. Commit and push to main branch
3. Root repository CI/CD automatically updates staging branch
4. Deploy from staging branch when ready (GitHub Pages or custom hosting)

### Manual Staging Trigger
From the root repository:
```bash
# Trigger staging sync manually
gh workflow run simple-staging-sync.yml
```

### Local Development vs Staging
- **Local Development:** Use Docker commands above for local testing
- **Staging Deployment:** Automated via root repository CI/CD system
- **Production Deployment:** Deploy from staging branch when ready

For more details on the CI/CD system, see the [root repository documentation](../../README.md#cicd--staging-workflow).
