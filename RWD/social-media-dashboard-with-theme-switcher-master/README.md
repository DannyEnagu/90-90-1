# Frontend Mentor - Social media dashboard with theme switcher

This is my solution to the [Social media dashboard with theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/social-media-dashboard-with-theme-switcher-6oY8ozp_H).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Toggle color theme to their preference

### Screenshot

![Desktop screen in light mode](./screenshots/desktop_light.png)

![Desktop screen in dark mode](./screenshots/desktop_dark.png)

![Mobile screen in light mode](./screenshots/mobile_light.png)

![Mobile screed in dark mode](./screenshots/moble_dark.png)

### Links

- Solution URL: [https://github.com/DannyEnagu/90-90-1/tree/main/RWD/social-media-dashboard-with-theme-switcher-master](https://github.com/DannyEnagu/90-90-1/tree/main/RWD/social-media-dashboard-with-theme-switcher-master)
- Live Site URL: [https://fm-social-media-dashboard-beta.vercel.app/](https://fm-social-media-dashboard-beta.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- JavaScript
- Mobile-first workflow
- Font Awesome

### What I learned

The following are all that i learnt from this challeng:

- Using CSS flexbox flex wrap property to wrap flex rows on small screens and then remove the wrap proprty to allow the normal flex behaviour on medium and large screens. with this, making the challenge responsive became a little easy.

- JavaScript documentElement property. This property allowed me to add and remove the **theme-dark** class to the root **(html)** element of the page very easy. With just 4 lines of code I was able to toggle between dark mode and light mode. Nice!!

```js
const toggle = document.querySelector('#themeToggle');

toggle.addEventListener('change', function() {
  document.documentElement.classList.toggle('theme-dark');
});
```

### Continued development

In the future I will like:

1. To fetch the Social Media data from an endpoint.
2. Save current theme settings to local storage.

### Useful resources

- [Dark and Light theme switcher using CSS variables and pure JavaScript — zocada by Musthaq Ahamad](https://medium.com/@haxzie/dark-and-light-theme-switcher-using-css-variables-and-pure-javascript-zocada-dd0059d72fa2) - This helped me for setting up the dark theme switcher. I really liked how easy it made switching between dark and light themes.

## Author

- Frontend Mentor - [@DannyEnagu](https://www.frontendmentor.io/profile/DannyEnagu)
- Twitter - [@daniel_enagu](https://twitter.com/daniel_enagu)