---
sidebar_position: 2
---

# Supabase

[Supabase](https://supabase.com/) is an open-source alternative to Google's Firebase platform. It will house our database and also provide some additional sign in features for our Stablocks installation.

Supabase can be used in a hosted or self-hosted environment. For the purposes of this walkthrough we are going to use the hosted version because it is easiest to set up. However, you could use the self-hosted version to fully own your database infrastructure.

## Prerequisites

A [GitHub](https://github.com) account is required to login to Supabase.

## 1. Creating a new database

To start out, head to [app.supabase.io](https://app.supbase.io) and click **Sign in with GitHub**. Once you've signed in you'll be redirected to the Supabase dashboard.

Click the **New project** button to create a new project. You need to add the project to an existing organization or, if this is your first time, create an organization to house your projects.

In the form that comes up, add a **name for your project** (this is internal to Supabase). Then, create a **password for your database**. Make sure to create a very strong password as it will be what is used to access your database. Also, make sure to store it somewhere safe because we will need the password in future steps.

The next step is to pick a **region where your database will live**. It's best to pick a region that's closest to your users, so choose one near your company and customers. We'll also leave the pricing plan on **Free Tier** for now, you can always upgrade later. Finally, click **Create new project**.

## 2. Basic configuration

While your database starts up (this can take a couple minutes) let's make some changes to the settings.

### Authentication

In the left sidebar, go to **Authentication** (two people icon) > **Configuration** > **Settings**. This is where we will make some changes that allow users to login to our Stablocks app.

First, in the **General** section, change the **Site URL** to the what the URL will be for your Stablocks installation. For example:

`https://stablocks.company.com`

Also, make sure **Disable Signup** is unchecked.

Next, under the **Email Auth** section, make sure **Enable Email Signup** is checked. This will allow users to login with their email address.

Stablocks is built to automatically enable passwordless accounts, which means your users will never create or provide a password. Instead, a login link will be sent to their email when they sign in. This reduces the security risks that passwords inherently have. Optionally, you can check **Enable email confirmations** to have all users, including employees, have to confirm their email before signing in, another good security measure.

You'll also see a section further down titled **External OAuth Providers**. Stablocks has the ability to add Google and Azure (Microsoft) login buttons for employees to use to login. We can add these later, which is documented here: [third-party auth providers](third-party-login).

### File storage (coming soon)

Supabase also has a file storage feature, which will be added to Stablocks soon. With this, users will be able to upload files in the Stablocks dashboard, such as profile pictures and résumés.

Check back soon for how to configure file storage!

## 3. Finding required variables

Stablocks needs to connect to our database so were going to need some variables and secrets to make that connection. We'll show you where to find them and then we'll use them in the [deployment step](deployment).

Our variables are all under **Settings** (gear icon) in the Supabase dashboard.

### Database

First, we'll get the URL for our database under **Settings** > **Database**. Scroll to the bottom in the **Connection string** section and click the **Nodejs** tab. This will display the connection URL for our database.

Remember that password we used to create our database in step one? Here's where we'll use that. Add the password to the connection string where indicated. For example:

`postgresql://postgres:PaSsWoRd@db.abcdefghijklmnopqrst.supabase.co:5432/postgres`

This connection string will be our `DATABASE_URL` variable when we deploy our app.

### API

Our last three variables are in the **Settings** > **API** section of the Supabase dashboard.

In the **Project API keys** section, the **anon/public** key will be our `SUPABASE_KEY` variable.

In the **Configuration** section, the **URL** will be our `SUPABASE_URL` variable. And the **JWT Secret** will be our `SUPABASE_JWT_SECRET` variable.

## Wrapping up

We created our database, *supa* easy, right? Now we're ready to [deploy our Stablocks application](deployment)!
 