# my-personal-website

Personal portfolio site for Xuyang (William) Wang, built with [Create React App](https://github.com/facebook/create-react-app) and deployed on Netlify.

## Sections

- **Bio** — quick intro and links to LinkedIn/GitHub
- **Education** — Johns Hopkins University (M.S. Robotics) and NYU (B.S. CS & Data Science)
- **Experience** — work history
- **Projects** — research and personal projects
- **Skills** — technical skills grouped by category
- **Resume** — embedded, downloadable PDF (`public/William_Resume.pdf`)
- **Contact** — email and location

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode at [http://localhost:3000](http://localhost:3000). The page reloads on changes.

### `npm test`

Launches the test runner in interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder, minified with hashed filenames.

## Updating content

Each section is a standalone component in `src/`:

- `Introduction.js` — bio/tagline
- `Education.js` — education history (edit the `educationHistory` array)
- `Experience.js` — work experience (edit the `experience` array)
- `Projects.js` — projects (edit the `projects` array)
- `Skills.js` — skills grouped by category (edit the `skillGroups` array)
- `Resume.js` — points at the PDF in `public/`
- `Contact.js` — contact details

To update the resume, replace `public/William_Resume.pdf` and update the filename reference in `src/Resume.js` if it changes.

## Deployment

This site auto-deploys to Netlify on every push to `master`.
