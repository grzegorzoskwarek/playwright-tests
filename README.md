
# Playwright Test Container

## Running Playwright tests in Docker

1. Build the image:
   ```bash
   docker build -t vibe-playwright-tests .
   ```
2. Run the tests:
   ```bash
   docker run --rm -v $(pwd)/playwright-report:/app/playwright-report vibe-playwright-tests
   ```

The HTML report will be available in your local `playwright-report` directory.

## Base image
- Uses the official Playwright image: `mcr.microsoft.com/playwright:v1.44.0-jammy`
