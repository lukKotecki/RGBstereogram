# RGBstereogram

RGBstereogram is a web application built with React and Vite that combines three input images into a single RGB composition and creates stereogram-like visuals based on color perception.

## Live application

The app is live at: https://RGB.mojestrony.pl

## Screenshot

![RGBstereogram application screenshot](public/screenshots/app-home.png)

## Key features

- merge 3 source images into one RGB output image,
- adjust color channels (R, G, B, Alpha),
- set output dimensions and processing chunk size,
- preview and download the generated image,
- multilingual interface: Polish, English, German, Spanish,
- extra information pages: How it works, About the project, Support me.

## How it works

The generator maps pixel data from source images into color channels and composes a final image. Under selected lighting, for example red, green, or blue, specific layers can be revealed or hidden, creating an illusion effect related to color metamerism.

## Tech stack

- React 18
- Vite 5
- Sass
- ESLint

## Requirements

- Node.js 18+
- npm 9+

## Local setup

1. Clone the repository.
2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open the URL shown in the terminal, usually http://localhost:5173.

## Available scripts

```bash
npm run dev      # development server
npm run build    # production build
npm run preview  # preview production build
npm run lint     # run ESLint
```

## Project structure

```text
src/
  components/
    Header.jsx
    HomePage.jsx
    InputImages.jsx
    OutputImage.jsx
    HowItWorks.jsx
    AboutProject.jsx
    SupportMe.jsx
    Footer.jsx
  App.jsx
  i18n.js
  index.scss
  main.jsx
```

## Links

- Live app: https://RGB.mojestrony.pl
- GitHub repository: https://github.com/lukKotecki/RGBstereogram
- Project support (PayPal): https://paypal.me/lukkotecki

## License

No license file is currently defined in the repository. If you plan to distribute the project publicly, consider adding a LICENSE file.