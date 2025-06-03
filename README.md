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

The default container command simply builds the site, which is useful for CI p
ipelines.
