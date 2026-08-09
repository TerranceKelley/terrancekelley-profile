# Terrance Kelley - Personal Profile Website

Personal profile and portfolio website for www.terrancekelley.com

## Tech Stack

- **Framework**: Nuxt 3
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Ready for Docker/static hosting

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
```

### Generate Static Site

```bash
npm run generate
```

## Project Structure

```
terrancekelley-profile/
├── pages/          # Vue pages/routes
├── components/     # Vue components
├── assets/        # Static assets (CSS, images)
├── public/         # Public static files
└── nuxt.config.ts  # Nuxt configuration
```

## Customization

1. **Update content**: Edit `pages/index.vue` to customize your profile
2. **Add projects**: Update the `projects` array in `pages/index.vue`
3. **Styling**: Modify `assets/css/main.css` or Tailwind classes
4. **SEO**: Update meta tags in `nuxt.config.ts`

## Deployment

This project can be deployed as:
- Static site (using `npm run generate`)
- Docker container
- Server-side rendered (SSR)

See deployment options in the main workspace documentation.

## License

MIT


