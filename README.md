# Glitch Theme Landing Page

---

![alt text](https://github.com/PinedaVictor/Glitch-Landing-Page/blob/main/src/assets/images/display.jpg " Lcd ..
")

This is a glitched theme web app built simple and straight to the point. The UI has a rich dreamy glitch effect that covers the entire site. Glitch animation is multiplied on mobile. This web solution is spacifically geared towards the creator that needs to only display work. Great for redirecting your fan base to other platforms such as Spotify, Apply Music, and any form of social media.

##### - Show your work ✅

##### - Display your services ✅

##### - Contact Form UI/UX ✅

##### - Add pages of your own ✅

## File Structure

```
├── README.md
├── package-lock.json
├── package.json
├── public                          - Public Folder
│   ├── favicon.ico
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src                             - Code src
│   ├── App.test.tsx
│   ├── App.tsx
│   ├── assets
│   │   ├── fonts                   -  Font sources
│   │   ├── images
│   │   ├── navanimation.gif
│   │   ├── vectors                 - SVG Files
│   │   └── webHero.gif
│   ├── components
│   │   ├── sections
│   │   │   ├── Branding.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── WDD.tsx
│   │   │   └── index.ts
│   │   └── ui
│   │       ├── NavButton.tsx
│   │       ├── PageCloseButton.tsx
│   │       ├── PageWrapper.tsx
│   │       ├── ProjectDisplay.tsx
│   │       └── index.ts
│   ├── data                        - Static Data
│   │   └── work.ts
│   ├── index.tsx
│   ├── logo.svg
│   ├── pages                       - Web pages
│   │   ├── Contact.tsx
│   │   ├── Home.tsx
│   │   ├── Portfolio.tsx
│   │   ├── ServicesMoc2.tsx
│   │   └── index.ts
│   ├── react-app-env.d.ts
│   ├── reportWebVitals.ts
│   ├── setupTests.ts
│   └── styles                     - SCSS style sheets
│       ├── App.scss
│       └── resp.scss
└── tsconfig.json
```

## Requirements

- [Nodejs](https://nodejs.org/en/)
- [Firebase (optional)](https://firebase.google.com/?gclid=CjwKCAjwur-SBhB6EiwA5sKtjiiZpqtrmgFPP4bUQIJgqfqU4d7k_LosissOrYLi_EzOk4HobFb8wxoCwVkQAvD_BwE&gclsrc=aw.ds)
- Created with create-react-app

## How to Start

- Clone repository
- run npm install
- npm start

## Editing

- Add pages to the pages direcgtory
- Edit the hero compoenent to add your customized page
  - Pages provided
    - Home
    - Contact
    - Work
- Contact UI/UX has been made you must only provide the back end technology
  - Firebase cloud functions is possible

## Building

- npm run build
  - Wraps all project files in one optimized folder

## Hosting

Pick a hosting provieder and make sure you upload the contents of the build folder

## License

[MIT](https://github.com/PinedaVictor/Glitch-Landing-Page/blob/main/LICENSE)
