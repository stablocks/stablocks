# Stablocks

Stablocks seeks to provide an integrated suite of software modules for growing companies and startups. We want to remove the need for managing 34 different SaaS products. To do this, we have identified common functions used across all businesses and removed the excess to bring the basic core functionality to you. The benefits are great: a single app for all of your services, a shared look and feel across the modules, and having all the data be easily integrated from solution to solution.

> Stablocks is currently in active development and is NOT ready for production. However, feel free to explore and contribute!

## Proposed Software Modules

- [ ]  Essentials
  - [ ] Employee management
  - [ ] Organization management
  - [ ] Email (Google Workplace)
- [ ] CRM
  - [ ] Contacts management
  - [ ] Marketing
  - [ ] Sales
- [ ] Finance and accounting
  - [ ] Payroll
- [ ] HR
  - [ ] Onboarding
- [ ] Recruiting
  - [ ] Job posting and application management
  - [ ] Public job portal
- [ ] Helpdesk
  - [ ] Chat
  - [ ] Ticketing system
  - [ ] Public help documentation
- [ ] Project Management
  - [ ] Tasks

## Open-Source

We also believe that this should not be exclusively enterprise software, which is why we have made it open-source. We've carefully chosen a technology stack that is easy to learn and contribute to. The main components are [RedwoodJS](https://redwoodjs.com/) for developing the web front-end and API, and [Supabase](https://supabase.com/) to host the data and handle authentication.

## Getting Started

### Setup Supabase

Create a [Supabase](https://supabase.com/) project and obtain the relevant API and database keys. It is also recommended that you setup the auth section for allowing proper login too the Stablocks app. Without this you will not be able to login to the Stablocks app.

### Deploy to Netlify

Ensure you have a [Netlify](https://netlify.com/) account, then click the button below to deploy this repo to your Netlify account.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/stablocks/stablocks)

Add your Supabase credentials in the environment variables section before you deploy: `SUPABASE_URL`, `SUPABASE_KEY` (public key), and `SUPABASE_JWT_SECRET`. Additionally, add the Supabase database URL for `DATABASE_URL`.

## About RedwoodJS and local development

Stablocks is meant to be a standalone project and, therefore, you don't need to have your own copy. We manage the development and you host the app. However, if you want to customize your Stablocks project beyond what is provided feel free to fork this repo. We recommend keeping it connected to this repo so you can still get upstream updates.

Stablocks uses [RedwoodJS](https://redwoodjs.com/) as a fullstack framework for both frontend and api infrastructures. This enables quick and easy development and deployment of the Stablocks app.

- [Redwood Tutorial](https://redwoodjs.com/tutorial/welcome-to-redwood): getting started and complete overview guide.
- [Redwood Docs](https://redwoodjs.com/docs/introduction): using the Redwood Router, handling assets and files, list of command-line tools, and more.
- [Redwood Community](https://community.redwoodjs.com): get help, share tips and tricks, and collaborate on everything about RedwoodJS.

### Setup

We use Yarn as our package manager. To get the dependencies installed, just do this in the root directory:

```terminal
yarn install
```

### Fire it up

```terminal
yarn dev
```

This starts a local Docker image with necessary databases. After, your browser should open automatically to `http://localhost:8910` to see the web app. Lambda functions run on `http://localhost:8911` and are also proxied to `http://localhost:8910/.redwood/functions/*`.
