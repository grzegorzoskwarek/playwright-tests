FROM mcr.microsoft.com/playwright:v1.44.0-jammy

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .

RUN npx playwright install --with-deps

CMD ["npx", "playwright", "test", "--reporter=html"]
