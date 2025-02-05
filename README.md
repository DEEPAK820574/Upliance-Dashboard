# Upliance

Upliance is a minimal setup to get React working with TypeScript and Vite, including Hot Module Replacement (HMR) and ESLint configuration.

## Features
- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
- **Vite**: A fast build tool that leverages native ES modules.
- **ESLint**: A tool for identifying and fixing problems in JavaScript code.

## Getting Started

### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/) (version 6 or higher) or [Yarn](https://yarnpkg.com/)

### Installation
Clone the repository:

```sh
git clone https://github.com/your-username/upliance.git
cd upliance
```

Install dependencies using npm or Yarn:

```sh
npm install
# or
yarn install
```

### Running the Development Server
Start the development server:

```sh
npm run dev
# or
yarn dev
```

The application will be available at [http://localhost:3000](http://localhost:3000).

## ESLint Configuration
For production applications, it is recommended to enable type-aware lint rules. Follow these steps to expand the ESLint configuration:

1. Configure the top-level `parserOptions` property:

```js
// eslint.config.js
export default tseslint.config({
  languageOptions: {
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

2. Replace `tseslint.configs.recommended` with `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`.

3. Optionally, add `...tseslint.configs.stylisticTypeChecked`.

4. Install `eslint-plugin-react` and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  settings: { react: { version: '18.3' } },
  plugins: {
    react,
  },
  rules: {
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [ESLint](https://eslint.org/)

For more information, visit the official documentation of the respective technologies.

