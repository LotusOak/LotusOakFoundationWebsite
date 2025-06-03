FROM ruby:3.2

# Install packages needed for Jekyll and building native extensions
RUN apt-get update && apt-get install -y --no-install-recommends \
    build-essential \
    nodejs \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /usr/src/app

# Pre-install bundler to match the Gemfile.lock version
RUN gem install bundler -v 2.6.8

# Copy gem files first for caching
COPY Gemfile Gemfile.lock ./
RUN bundle install

# Copy the rest of the project
COPY . .

# Default command builds the site
CMD ["bundle", "exec", "jekyll", "build", "--source=website", "--destination=_site"]
