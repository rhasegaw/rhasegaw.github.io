# Ryo Hasegawa

Personal portfolio: https://rhasegaw.github.io/

Static HTML, CSS, and JavaScript. The site includes selected Kaggle results,
professional experience, research, and an archive of academic projects.

## Local preview

Serve the repository with any static web server, for example:

```sh
python -m http.server 8080
```

## Structure

- `index.html`: portfolio content
- `style.css`: responsive design and typography
- `script.js`: project filters, disclosure links, navigation state
- `img/`: original illustrations, résumé, and social preview
- `fonts/`: locally served typefaces
- `credits.html` and `licenses/`: design references and open-source notices

GitHub Pages serves the root of `main`. No build step or runtime dependencies.

Design references: [Brittany Chiang v4](https://github.com/bchiang7/v4),
[Tailwind CSS Typography](https://github.com/tailwindlabs/tailwindcss-typography),
and [Lucide](https://github.com/lucide-icons/lucide). See `credits.html` and the
complete license notices for attribution.
