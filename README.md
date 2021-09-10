# mdbook-mermaid Action

[mdbook-mermaid](https://github.com/badboy/mdbook-mermaid) Setup Action, modified from [actions-mdbook](https://github.com/peaceiris/actions-mdbook).

## Getting Started

```yaml
name: mdbook deploy

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-20.04
    steps:
      - uses: actions/checkout@v2
      
      - name: Setup mdBook
        uses: peaceiris/actions-mdbook@v1
        with:
          mdbook-version: 'latest'

      - name: Setup mdbook-mermaid
        uses: magicgh/mdbook-mermaid-action@v1
        with:
          version: 'latest'
      
      - run: mdbook build
```

## Tips

* Use the custom version of mdBook

```yaml
- name: Setup mdbook-mermaid
  uses: magicgh/mdbook-mermaid-action@v1
  with:
    version: '0.8.1'
```

* Maybe this script can be run on Docker, but I haven't test yet. Check out [actions-mdbook](https://github.com/peaceiris/actions-mdbook#readme) for more detail.

* Welcome to pull request.
