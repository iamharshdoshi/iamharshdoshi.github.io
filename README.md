# iamharshdoshi.github.io

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


## Heroicons - vue
---
First, install `@heroicons/vue` from npm:

```
npm install @heroicons/vue
```

Now each icon can be imported individually as a Vue component:

## Basic Usage

The quickest way to use these icons is to simply copy the source for the icon you need from [heroicons.com](https://heroicons.com) and inline it directly into your HTML:

```html
<svg class="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="2"
    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
  />
</svg>
```

## Vue

First, install `@heroicons/vue` from npm:

```sh
npm install @heroicons/vue
```

Now each icon can be imported individually as a Vue component:

```vue
<template>
  <div>
    <BeakerIcon class="h-5 w-5 text-blue-500"/>
    <p>...</p>
  </div>
</template>

<script>
import { BeakerIcon } from '@heroicons/vue/solid'

export default {
  components: { BeakerIcon }
}
</script>
```

The 24x24 outline icons can be imported from `@heroicons/vue/outline`, and the 20x20 solid icons can be imported from `@heroicons/vue/solid`.

Icons use an upper camel case naming convention and are always suffixed with the word `Icon`.

[Browse the full list of icon names on UNPKG &rarr;](https://unpkg.com/browse/@heroicons/vue/outline/)