<div align='center'>
<h1>Vite-Ultra </h1>
<img src='https://images.unsplash.com/photo-1495976797530-f33e6580e44b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1412&q=80' alt='Vite-Ultra - Opinionated Vite Starter Template' width='344'/>
</div>

<p align='center'>
Develop your next web app with <b>Vite-Ultra </b><sup><em>(speed)</em></sup><br>
</p>

## Features

- ⚡ [Vue 3](https://github.com/vuejs/vue-next), [Vite 3](https://github.com/vitejs/vite)
- 🔥 Use the [new `<script setup>` syntax](https://github.com/vuejs/rfcs/pull/227)
- 📥 [Axios](https://axios-http.com/docs/intro)
- 💡 [Vue Router v4](https://router.vuejs.org/) - The official router for Vue.js
- 🎨 [Tailwind CSS v3](https://tailwindcss.com/docs/configuration) - Rapidly build modern websites without ever leaving your HTML.
- 🍍 [State Management via Pinia](https://pinia.esm.dev/) - The Vue Store that you will enjoy using
- 🌼 [Headless UI](https://headlessui.com/) - The free and open-source Tailwind CSS component library
- 📜 [Inter font preset]()

### First-party plugins included for Tailwind UI:

- [tailwindcss/forms](https://github.com/tailwindlabs/tailwindcss-forms)
- [tailwindcss/typography](https://tailwindcss.com/docs/typography-plugin)
- [tailwindcss/line-clamp](https://github.com/tailwindlabs/tailwindcss-line-clamp)
- [tailwindcss/aspect-ratio](https://github.com/tailwindlabs/tailwindcss-aspect-ratio)

### Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/)
- [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

## directory

```
# vite-ultra
├── LICENSE
├── README.md
├── index.html
├── node_modules
├── package.json
├── postcss.config.js        # tailwind configuration
├── public
│   └── favicon.ico
├── src
│   ├── App.vue
│   ├── api                  # api interface
│   ├── assets               # static resource
│   │   └── logo.png
│   ├── main.js
│   ├── partials           # global component
│   │   └── Navbar.vue       # Navbar component
│   |── pages                # all pages
│   |   └── Index.vue
│   ├── store                # Pinia store
│   │   ├── counter.js
│   │   └── index.js
│   ├── styles               # global style
│   │   ├── main.scss
│   │   ├── nprogress.scss   # nprogress style
│   │   ├── tailwind.css
│   │   └── variables.scss
│   ├── utils                # global public method
│   │   └── darkMode.ts
│   └── router.js            # Vue router
├── tailwind.config.js       # tailwind configuration
├── jsconfig.json            # JS compilation configuration
└── vite.config.js           # Vite configuration

```

## Try it now!

### GitHub Template

[Fork and Create a repo from this template on GitHub](https://github.com/kiansa/vite-ultra/generate).

### Clone to local

```bash
npx degit kiansa/vite-ultra my-vite-app-name
```
```bash
cd my-vite-app-name
```
```bash
npm i
```

## Usage

### Development

```bash
npm run dev
```

### Build

To build the App, run

```bash
npm run build
```

And you will see the generated file in `dist` that ready to be served.

##

<p align='center'>
This README.md file is highly inspired from (https://github.com/kirklin/vite-boot)
</p>
