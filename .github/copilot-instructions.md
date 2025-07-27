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
11. All code and comments must be written in English only.

- Respond to the user in Polish in chat if the conversation is conducted in Polish.

## Conventional Commits

- Use conventional commit messages for all commits.
- Format: `<type>(optional scope): <description>`
- Common types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`.
- Example: `feat: add user login functionality`
- Keep descriptions short, clear, and relevant to the change.

- When instructed to commit, always run all tests first and only commit if all tests pass. Never commit without running tests.
- When instructed to commit, do not push changes automatically. Wait for manual push instructions.

## Playwright MCP Commands Translation

- When a conversation is in Polish, provide Polish translations for all Playwright MCP commands (see: https://github.com/microsoft/playwright-mcp).
- When a Polish command is used in chat, run the corresponding Playwright MCP command in the project.
- Always confirm the command's effect and provide feedback in Polish.

### Przykładowe polecenia Playwright MCP z tłumaczeniem na polski

- browser.open — otwórz przeglądarkę
- browser.close — zamknij przeglądarkę
- browser.navigate — przejdź do adresu URL
- browser.click — kliknij element
- browser.type — wpisz tekst
- browser.press_key — naciśnij klawisz
- browser.wait_for — poczekaj na tekst lub zdarzenie
- browser.take_screenshot — wykonaj zrzut ekranu
- browser.hover — najedź kursorem na element
- browser.select_option — wybierz opcję z listy
- browser.tab_new — otwórz nową kartę
- browser.tab_close — zamknij kartę
- browser.tab_list — pokaż listę kart
- browser.tab_select — wybierz kartę
- browser.resize — zmień rozmiar okna
- browser.drag — przeciągnij i upuść
- browser.file_upload — wyślij plik
- browser.handle_dialog — obsłuż okno dialogowe
- browser.snapshot — wykonaj dostępnościowy snapshot
- browser.network_requests — pokaż żądania sieciowe
- browser.console_messages — pokaż wiadomości konsoli
- browser.evaluate — wykonaj kod JavaScript

Każde polecenie użyte w rozmowie po polsku uruchomi odpowiadający mu MCP command i zwróci informację zwrotną po polsku.
