# Strapi Navbar & Sub Menu – React, Vite, JavaScript, Context API, Custom CSS Fundamental Project 13

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-18.2-blue)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-4.x-646CFF)](https://vitejs.dev/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES2020-yellow)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![React Router](https://img.shields.io/badge/React_Router-7.x-CA4245)](https://reactrouter.com/)

An educational React application that demonstrates how to build a responsive, Strapi-style navigation bar with dropdown submenus, a mobile sidebar, and client-side routing. It uses React Context for global UI state, Vite for tooling, and custom CSS with 3D-style submenu effects. No backend or API is required—everything runs in the browser, making it ideal for learning and reuse in other front-end projects.

- **Live Demo:** [https://strapi-nav-menu.vercel.app/](https://strapi-nav-menu.vercel.app/)

---

## Table of Contents

1. [Project Summary](#project-summary)
2. [Features](#features)
3. [Technology Stack](#technology-stack)
4. [Project Structure](#project-structure)
5. [How to Run and Use](#how-to-run-and-use)
6. [Environment Variables (.env)](#environment-variables-env)
7. [Routes and Pages](#routes-and-pages)
8. [Components Walkthrough](#components-walkthrough)
9. [Data and Context](#data-and-context)
10. [Styling and UX](#styling-and-ux)
11. [Teaching Content and Code Snippets](#teaching-content-and-code-snippets)
12. [Reusing Components in Other Projects](#reusing-components-in-other-projects)
13. [Keywords](#keywords)
14. [Conclusion](#conclusion)
15. [License](#license)

---

## Project Summary

Strapi Navbar & Sub Menu is a front-end–only educational project that teaches:

- Building a responsive navigation bar with hover-based submenus and a mobile sidebar.
- Using **React Context API** and a custom hook for global state (sidebar open/close, active submenu).
- **Client-side routing** with React Router so each submenu link renders a dedicated page with educational content.
- **Data-driven UI**: a single data source (`data.jsx`) drives both the sidebar and the submenu links.
- **Component-driven structure** and modern CSS (variables, transitions, 3D-style submenu animation).

There is **no backend or external API**. All content and behavior are defined in the repo.

---

## Features

- **Responsive layout:** Desktop shows a top navbar with hover submenus; mobile shows a hamburger that opens a full-screen sidebar.
- **Client-side routing:** Submenu and sidebar links navigate to distinct routes (e.g. `/product/community`, `/solutions/developers`) without full page reloads.
- **Global state:** One context holds `isSidebarOpen`, `pageId` (active submenu), and handlers; Navbar, Sidebar, Submenu, and NavLinks stay in sync.
- **Dynamic submenu:** Submenu content is derived from the same data as the sidebar; adding entries in `data.jsx` updates both.
- **3D-style submenu:** CSS transforms and perspective give the dropdown a flip-in effect on desktop.
- **Educational pages:** Each route renders a simple page (title + paragraphs) with Strapi-related educational text, centered and readable (e.g. max-width 40rem).
- **Accessibility-friendly:** Keyboard and mouse work with buttons and links; sidebar closes on link click (navigation).

---

## Technology Stack

| Technology         | Purpose                                   |
| ------------------ | ----------------------------------------- |
| **React 18**       | UI components, hooks, Context API         |
| **Vite 4**         | Dev server, build, and bundling           |
| **React Router 7** | Client-side routing and `Link` / `Routes` |
| **React Icons**    | FaBars, FaTimes, and link icons           |
| **NanoID**         | Unique IDs for data entries               |
| **ESLint**         | Linting (optional `npm run lint`)         |
| **Custom CSS**     | Variables, layout, 3D submenu, responsive |

No TypeScript, no backend, no database.

---

## Project Structure

```
13-strapi-submenus/
├── public/
│   └── vite.svg                 # Favicon / OG image
├── src/
│   ├── main.jsx                 # Entry: React root, BrowserRouter, AppProvider
│   ├── App.jsx                  # Layout: Navbar, Routes, Sidebar, Submenu
│   ├── index.css                # Global + component styles
│   ├── Context.jsx              # AppContext, AppProvider, useGlobalContext
│   ├── data.jsx                 # sublinks array (pages + links + icons + URLs)
│   ├── Navbar.jsx               # Top bar: logo, toggle, NavLinks
│   ├── NavLinks.jsx             # Desktop nav buttons (set pageId on hover)
│   ├── Sidebar.jsx              # Mobile overlay with Link list
│   ├── Submenu.jsx              # Desktop dropdown with Link list
│   ├── Hero.jsx                 # Home page content (route "/")
│   └── pages/                   # Route-level pages
│       ├── ProductCommunity.jsx
│       ├── ProductContent.jsx
│       ├── ProductRoles.jsx
│       ├── SolutionsDevelopers.jsx
│       ├── SolutionsContentManagers.jsx
│       ├── SolutionsBusinessTeams.jsx
│       ├── SolutionsEcommerce.jsx
│       ├── ResourcesStarters.jsx
│       └── ResourcesShowcase.jsx
├── index.html                   # Root HTML, meta, script to main.jsx
├── vite.config.js               # Vite + React plugin
├── package.json
├── .eslintrc.cjs                # ESLint config (optional)
└── README.md
```

---

## How to Run and Use

**Prerequisites:** Node.js (e.g. 18+) and npm.

1. **Clone and install**

   ```bash
   git clone https://github.com/arnobt78/Strapi-Submenus--React-Fundamental-Project-13.git
   cd Strapi-Submenus--React-Fundamental-Project-13
   npm install
   ```

   If you hit peer dependency conflicts (e.g. with ESLint), use:

   ```bash
   npm install --legacy-peer-deps
   ```

2. **Development**

   ```bash
   npm run dev
   ```

   Open the URL shown (e.g. `http://localhost:5173`). Use the navbar/sidebar/submenu to navigate; each link goes to a route with educational content.

3. **Build for production**

   ```bash
   npm run build
   ```

   Output is in `dist/`. Serve with any static host (e.g. Vercel, Netlify).

4. **Preview production build locally**

   ```bash
   npm run preview
   ```

5. **Lint (optional)**

   ```bash
   npm run lint
   ```

---

## Environment Variables (.env)

This project **does not use any environment variables** by default. All configuration is in code (e.g. `data.jsx`, `vite.config.js`).

If you later add a backend URL or feature flags, you can use a `.env` file and Vite’s env handling:

1. **Create `.env` in the project root** (same level as `package.json`). It is already listed in `.gitignore`, so it will not be committed.

2. **Expose variables to the client only if they are prefixed with `VITE_`.** For example:

   ```env
   VITE_APP_TITLE=Strapi Navbar
   VITE_API_BASE_URL=https://api.example.com
   ```

3. **Use them in code** via `import.meta.env`:

   ```javascript
   const title = import.meta.env.VITE_APP_TITLE;
   const apiBase = import.meta.env.VITE_API_BASE_URL;
   ```

4. **Do not put secrets** (API keys, passwords) in `VITE_*` variables—they are embedded in the client bundle. Use a backend or server-side layer for secrets.

To get all required environment variables for a future setup (e.g. when you add an API), you would:

- Add the desired variable names to this README under an “Environment variables” section.
- Create a `.env.example` file with placeholder values (e.g. `VITE_API_BASE_URL=https://your-api.com`) and commit that so others know what to set in their own `.env`.

---

## Routes and Pages

Routing is done with **React Router** inside `App.jsx`. There is no backend; these are client-side routes.

| Route                         | Component                  | Description                  |
| ----------------------------- | -------------------------- | ---------------------------- |
| `/`                           | `Hero`                     | Landing / hero section       |
| `/product/community`          | `ProductCommunity`         | Product – Community          |
| `/product/content`            | `ProductContent`           | Product – Content            |
| `/product/roles`              | `ProductRoles`             | Product – Roles              |
| `/solutions/developers`       | `SolutionsDevelopers`      | Solutions – Developers       |
| `/solutions/content-managers` | `SolutionsContentManagers` | Solutions – Content Managers |
| `/solutions/business-teams`   | `SolutionsBusinessTeams`   | Solutions – Business Teams   |
| `/solutions/ecommerce`        | `SolutionsEcommerce`       | Solutions – Ecommerce        |
| `/resources/starters`         | `ResourcesStarters`        | Resources – Starters         |
| `/resources/showcase`         | `ResourcesShowcase`        | Resources – Showcase         |

Navigation is done with `<Link to={url}>` in `Sidebar.jsx` and `Submenu.jsx`; `url` comes from `data.jsx`. There are **no API endpoints** in this project.

---

## Components Walkthrough

### `main.jsx`

Mounts the app with `BrowserRouter` and `AppProvider` so routing and context are available everywhere.

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { AppProvider } from "./Context";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppProvider>
        <App />
      </AppProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
```

---

### `App.jsx`

Renders the shell: Navbar, then a `Routes`/`Route` block (Hero or a page component), then Sidebar and Submenu. The submenu and sidebar are always in the tree; only the main content area changes by route.

```jsx
import { Routes, Route } from "react-router-dom";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Submenu from "./Submenu";
// ... page imports

const App = () => (
  <main>
    <Navbar />
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/product/community" element={<ProductCommunity />} />
      {/* ... other routes */}
    </Routes>
    <Sidebar />
    <Submenu />
  </main>
);
export default App;
```

---

### `Context.jsx`

Provides global UI state: `isSidebarOpen`, `pageId` (which submenu is active), and `openSidebar` / `closeSidebar` / `setPageId`. Any component that needs to open/close the sidebar or control the submenu uses `useGlobalContext()`.

```jsx
import { createContext, useState, useContext } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [pageId, setPageId] = useState(null);
  const openSidebar = () => setIsSidebarOpen(true);
  const closeSidebar = () => setIsSidebarOpen(false);
  return (
    <AppContext.Provider
      value={{ isSidebarOpen, openSidebar, closeSidebar, pageId, setPageId }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
```

---

### `Navbar.jsx`

Top bar: logo, hamburger button (calls `openSidebar`), and `NavLinks`. On `onMouseOver`, if the target is not a `.nav-link`, it clears the submenu by `setPageId(null)` so the submenu hides when the cursor leaves the nav area.

---

### `NavLinks.jsx`

Renders a row of buttons from `sublinks` (from `data.jsx`). Each button’s `onMouseEnter` sets `setPageId(pageId)` so the Submenu shows that page’s links. Visible only on desktop (CSS).

---

### `Sidebar.jsx`

Full-screen overlay when `isSidebarOpen` is true. Uses `Link` from React Router for each link; `onClick={closeSidebar}` closes the sidebar when a link is clicked. Data again comes from `sublinks`.

---

### `Submenu.jsx`

Floating panel that shows when `pageId` is set. Finds the current page in `sublinks` and renders its `links` as `Link` components. Uses `onMouseLeave` and `getBoundingClientRect()` to hide when the cursor leaves the submenu area. Grid columns adapt to link count (e.g. 2 columns if more than 3 links).

---

### `Hero.jsx`

Home content for `/`: title and short Strapi description, centered. Styled with `.hero-container` and `.hero-center`.

---

### Page components (`src/pages/*.jsx`)

Each is a small presentational component: a wrapper with class `page-content` and an `h1` plus one or more `p` tags. Content is educational copy about Strapi (community, content, roles, developers, etc.). Layout is centered, max-width 40rem, stacked for readability.

Example:

```jsx
const ProductCommunity = () => (
  <div className="page-content">
    <h1>Community</h1>
    <p>...</p>
    <p>...</p>
  </div>
);
export default ProductCommunity;
```

---

## Data and Context

### `data.jsx`

Single source of truth for navigation: an array of objects `{ pageId, page, links }`. Each `links` item has `id`, `label`, `icon` (React element from react-icons), and `url` (path for React Router). `pageId` and `id` are from `nanoid()`.

- **Sidebar** and **Submenu** both map over this array and render `Link` components.
- **NavLinks** maps over the same array and uses `pageId` to control which submenu is visible.

Changing or adding entries here updates both the sidebar and the submenu. For new routes you must add a corresponding `Route` in `App.jsx` and optionally a new page component.

---

## Styling and UX

- **CSS variables** in `:root` (e.g. `--primary-500`, `--max-width`, `--transition`) keep colors and layout consistent.
- **Navbar:** Fixed height, centered content; on small screens the hamburger shows; on large screens NavLinks and the submenu show.
- **Sidebar:** Fixed overlay, opacity/visibility transition; `.show-sidebar` toggles visibility.
- **Submenu:** On desktop, positioned under the nav; uses `transform: rotateX(-90deg)` and `perspective` for a 3D flip-in; `.show-submenu` brings it to full opacity and `rotateX(0deg)`.
- **Page content:** `.page-content` uses max-width 40rem, flexbox centering, and vertical stacking for readable text.

No CSS-in-JS or component library; everything is in `index.css`.

---

## Teaching Content and Code Snippets

### Using context in any component

```jsx
import { useGlobalContext } from "./Context";

const MyComponent = () => {
  const { isSidebarOpen, openSidebar, closeSidebar, pageId, setPageId } =
    useGlobalContext();
  // ...
};
```

### Adding a new nav group and links

In `data.jsx`, add a new object to the `sublinks` array and give it a unique `pageId` and a `links` array with `id`, `label`, `icon`, `url`. Then add a `Route` in `App.jsx` for each new `url` and create a page component in `src/pages/` if you want a dedicated page.

### Closing the sidebar on navigation

In `Sidebar.jsx`, each `<Link>` uses `onClick={closeSidebar}` so that when the user clicks a link, the sidebar closes and the route changes.

### Submenu visibility

The submenu is shown when `pageId` matches one of the `pageId` values in `sublinks`. NavLinks set `pageId` on hover; moving the mouse out of the submenu (handled in Submenu’s `handleMouseLeave`) sets `pageId` to `null` and hides it.

---

## Reusing Components in Other Projects

- **Context + data pattern:** Copy `Context.jsx` and `data.jsx` (or adapt the data shape). Wrap your app in `AppProvider` and use `useGlobalContext()` wherever you need sidebar/submenu state.
- **Navbar + NavLinks + Submenu:** Copy the three components and their CSS (navbar, nav-links, submenu sections from `index.css`). Ensure your router wraps the app and that `data.jsx` (or your equivalent) has the same structure for `pageId`, `page`, and `links` with `url`.
- **Sidebar:** Copy `Sidebar.jsx` and the sidebar CSS. Use `Link` to your own routes and keep `onClick={closeSidebar}` so the overlay closes on navigation.
- **Page layout:** Reuse the `.page-content` pattern (centered, max-width, stacked h1/p) for other content pages; replace the text with your own.
- **Routing:** This app uses React Router; if your project uses another router, replace `<Link>` and `<Routes>`/`<Route>` with the equivalent from your stack.

---

## Keywords

Strapi, React, Vite, JavaScript, Context API, React Router, navbar, submenu, dropdown, sidebar, responsive, headless CMS, hooks, client-side routing, custom CSS, 3D CSS, educational project, component-driven, state management, front-end, single-page application (SPA).

---

## Conclusion

This repository is a complete example of a responsive, Strapi-style nav with sidebar and submenus, client-side routing, and educational content pages. It is suitable for learning React patterns (Context, hooks, composition), React Router, and CSS layout/transforms. You can extend it with more routes and pages, or reuse its components and patterns in other projects.

---

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT). Feel free to use, modify, and distribute the code as per the terms of the license.

## Happy Coding! 🎉

This is an **open-source project** - feel free to use, enhance, and extend this project further!

If you have any questions or want to share your work, reach out via GitHub or my portfolio at [https://www.arnobmahmud.com](https://www.arnobmahmud.com).

**Enjoy building and learning!** 🚀

Thank you! 😊

---
