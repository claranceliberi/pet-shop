# Project Title

Provide a brief description of what this project does and the problem it solves.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Scripts](#scripts)
- [Docker](#docker)


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js version `>=18.0.0`

### Installation

1. Clone the repository:


2. Navigate to the project directory:
   ```bash
   cd pet-shop
   ```

3. Install the dependencies:
   ```bash
   pnpm install
   ```

4. Start the development server:
   ```bash
   pnpm dev
   ```

## Usage

Provide instructions on how to use the project, any available endpoints, UIs, or features.

## Folder Structure

The project has the following structure:

```
.
├── Dockerfile
├── README.md
├── app.vue
├── assets
├── components
│   ├── atoms
│   ├── molecules
│   └── organisms
├── composables
├── cypress
├── cypress.config.ts
├── layouts
├── middleware
├── nuxt.config.ts
├── package.json
├── pages
├── plop-templates
├── plopfile.js
├── plugins
├── pnpm-lock.yaml
├── postcss.config.js
├── public
├── services
├── store
├── tailwind.config.js
├── tsconfig.json
├── utils
├── vite.config.ts
└── vitest.config.js

```

## Scripts

Here are some of the scripts available:

- **Development**: `pnpm dev`
- **Build**: `pnpm build`
- **Generate**: `pnpm generate`
- **Lint**: `pnpm lint:js`
- **UI Testing**: `pnpm test:ui`
- **Testing**: `pnpm test`
- **Coverage**: `pnpm coverage`
- **Cypress**: `pnpm cypress`
- **Clean**: `pnpm clean`
- **Component Generator**: `pnpm component`

... and more. Check `package.json` for the full list.

## Docker

The project includes a `Dockerfile` for containerization. I have not had enough time to optimize the build and make it work. :

1. Build the Docker image:
   ```bash
   docker build -t petshop .
   ```

2. Run the Docker container:
   ```bash
   docker run -p 3000:3000 petshop
   ```

