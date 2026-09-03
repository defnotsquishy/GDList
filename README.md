# Basement List

Basement List is a community-run Geometry Dash demon list with separate main and community rankings, verified record submissions, player profiles, leaderboards, and admin review tools.

The interface was designed for this project and is maintained with contributions from **ntyu2** and **Ksois**.

## Local setup

1. Install dependencies with `npm install`.
2. Copy `.env.example` to `.env.local` and add the Firebase web-app configuration.
3. In Firebase Authentication, enable Email/Password and Google sign-in.
4. Add each production hostname to Firebase Authentication's Authorized domains.
5. Run `npm run dev`.

The app shows a setup screen when required Firebase values are missing instead of failing with a blank page.

## Languages

The public interface supports English and Russian. The language selector is on the homepage below the social links, outside the navbar, and saves the visitor's choice on their device. Player names, level names, and other community-created content are kept exactly as submitted.

## Public beta

The beta is hosted at **https://defnotsquishy.github.io/GDList/** from the `beta-site` source branch. It includes country rankings and the English/Russian homepage switch, but does not force visitors through country selection. It uses the normal Basement List branding without a visible beta banner.

The beta uses the existing Firebase project. It is **not an isolated data sandbox**: accounts and records are shared, and submissions, profile edits, and authorized moderation actions affect live data. Do not create fake records or test destructive actions here. This deployment does not change roles, database rules, or the main website.

- `npm run build:beta` builds to `dist-beta/` using the ignored `.env.github.local` configuration and the correct `/GDList/` asset base.
- `npm run test:beta` checks beta metadata, translations, asset paths, and direct-link fallback.
- `npm run preview:beta` opens a local preview of that build.
- `npm run deploy:beta` builds, checks, and publishes **only** to `defnotsquishy/GDList`'s `gh-pages` branch. This replaces the previous preview there, not Ksois's website.

The beta build is marked `noindex`, excludes the main site's `CNAME` and SEO files, and serves the app from `404.html` so shared deep links and refreshes keep their route.

## Preserving existing data

Deploy the app with the existing Basement List `VITE_FIREBASE_*` project values. The frontend does not seed, migrate, replace, or clear Firestore or Storage on startup, so existing levels, completions, submissions, profiles, victors, and leaderboard history remain in place. Pointing production at a new Firebase project will make the site appear empty even though the original data still exists.

Deploying the included security rules changes access permissions only; it does not delete documents. Take a Firebase export before any separate Admin SDK migration or bulk admin operation. Level deletion and account deletion remain explicit, confirmed actions rather than deployment steps.

## Builds

- `npm run build` creates a root-path build for Netlify or another SPA host.
- `npm run build:github` loads the GitHub environment configuration and retains the main site's root-path custom-domain build.
- `npm run deploy` publishes that main-site build through `gh-pages`. Use `npm run deploy:beta` instead for the defnotsquishy preview.

Netlify uses the included SPA rewrite. The main GitHub Pages fallback sends visitors to the custom domain; the separate beta build uses its own direct-link fallback.

## Firebase security

`firestore.rules` and `storage.rules` are source-controlled and deny unknown collections by default. Review the rules against a staging Firebase project before deploying them:

```sh
firebase deploy --only firestore:rules,storage
```

The public `users` documents are intentionally readable for profiles and leaderboards, so they must contain public profile data only. New accounts no longer write email addresses into these documents. Remove any legacy `email` fields with a trusted Admin SDK migration before making the site public.

Role changes, real account suspension, and guaranteed account deletion should ultimately be moved to callable backend functions using the Firebase Admin SDK. Client-side route guards improve the experience but are not a replacement for deployed rules.

## Credits

Copyright &copy; 2026 [ntyu2](https://github.com/ntyu2) and [Ksois](https://github.com/KsoisDev). All rights reserved. See [NOTICE.md](NOTICE.md) for attribution details.

Basement List is not affiliated with RobTop Games. Created for the tnaillzxgd Discord community by ntyu2 and Ksois.
