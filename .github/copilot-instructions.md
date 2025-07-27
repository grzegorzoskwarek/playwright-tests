# GitHub Copilot Instructions

## Project Rules for Copilot

1. Only keep one example test in each Playwright spec file unless otherwise specified.
2. Clean up Playwright configuration files by removing unnecessary comments and unused browser configurations. Default to Chrome unless instructed.
3. Set Playwright test timeout to 10 seconds and enable traces for all tests.
4. Always run all tests before making a commit. Only commit if all tests pass.
5. Use clear, minimal, and maintainable code in all test and configuration files.
6. Place all Playwright test files in the directory specified by `testDir` in `playwright.config.ts` (default: `./tests`).
7. Do not add or modify files outside the scope of the current request unless explicitly asked.
8. Always confirm configuration changes by running tests after edits.
9. Remove unused code, comments, and example content unless requested to keep them.
10. Follow best practices for Playwright and TypeScript projects.

## Conventional Commits

- Use conventional commit messages for all commits.
- Format: `<type>(optional scope): <description>`
- Common types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`.
- Example: `feat: add user login functionality`
- Keep descriptions short, clear, and relevant to the change.

- When instructed to commit, always run all tests first and only commit if all tests pass. Never commit without running tests.
