# Qaisar Khan Portfolio

React + TypeScript + Vite portfolio.

## Run locally

```bash
npm install
npm run dev
```

## Build for deployment

```bash
npm run build
npm run preview
```

## Where to edit your content

Most personal content is centralised in:

`src/data/portfolio.ts`

Edit this file to update:
- `profile`: name, email and social links
- `featuredProjects`: featured project cards, links, tags and contribution
- `experience`: SUPARCO role, dates, responsibilities and tools
- `learningProjects`: training-guided AI projects and demo links
- `technologySkills`: skill chips inside Electronics, Data and AI tabs
- `skills`: the broader toolkit cards
- `achievements`: competition placements and awards
- `certifications`: completed courses and providers

Keep the existing property names and commas. For a new project, copy one complete object inside `featuredProjects`, change its values, and give it a unique `number`.

For CanSat, the current entry intentionally has no public repository link. Add a real public URL to its `href` only if/when you decide to publish the repository. Do not put a private repository URL on the public website.

## Main layout and styling

- `src/App.tsx`: page sections, navigation and interactions
- `src/styles.css`: colours, layout, animations and responsive styles
- `index.html`: page title and search-engine description

## Notes

- The CanSat entry is labelled as a team project and describes the contribution provided in the supplied CV/context.
- PneumoScan is described as integrating an existing trained model, not training it, and is explicitly not presented as a clinically validated diagnostic tool.
- Cloudly is labelled as using a synthetic dataset.
- The learning-project list is labelled as training-guided.
- Certificates shown are completed courses. Add in-progress courses separately only when you want that section.


## TypeScript and Vite configuration

`tsconfig.json` configures the TypeScript project used by `npm run build`.
`vite.config.ts` enables the official Vite React plugin.


## Updating your portfolio content

Most text and project details live in `src/data/portfolio.ts`.
- Edit `profile` for your name, email, location and social links.
- Edit `featuredProjects` for the five main projects.
- Edit `skills` and `technologySkills` for skill groups and technology tabs.
- Edit `certifications` for completed courses.
- Edit `achievements` for awards and recognition.
- Edit `cansatGallery` to add, remove or rename CanSat photographs.

## Replacing images

Place image files in `public/images/` and reference them with paths such as `/images/my-project.jpg`.
The gallery uses the supplied CanSat photographs and portrait. Use simple lowercase filenames.

The CanSat gallery captions are limited to what is visible in the supplied images. Add the presentation, report and demo video links after reviewing those materials.
