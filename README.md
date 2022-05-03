# Next Game Store

## Links

- [Next.js](https://nextjs.org/)
- [Storybook](https://storybook.js.org/)
- [Classnames](https://www.npmjs.com/package/classnames)
- [Axios](https://axios-http.com/)
- [react-number-format](https://www.npmjs.com/package/react-number-format)
- [react-toastify](https://www.npmjs.com/package/react-toastify)
- [js-cookie](https://www.npmjs.com/package/js-cookie)
- [jwt-decode](https://www.npmjs.com/package/jwt-decode)

## Requirements

- Node.js
- NPM

## Installation

- Clone this repository:

```sh
git clone https://github.com/alvinmdj/next-gamestore.git
```

- Go to the root directory:

```sh
cd next-gamestore
```

- Install dependencies:

```sh
npm install
```

- Copy ```.env.example``` to ```.env.local```:

```sh
cp .env.example .env.local
```

- Local build & validity check:

```sh
npm run build
```

- Run (development):

```sh
npm run dev
```

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Personal Notes

- Install Next.js with TypeScript:

```sh
# https://nextjs.org/docs
npx create-next-app@latest --typescript
```

- Install Storybook:

```sh
# https://storybook.js.org/docs/react/get-started/install
# sb init is not made for empty project
npx sb init
```

- Run Storybook:

```sh
# run in development mode
npm run storybook
```
