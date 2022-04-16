---
sidebar_position: 1
---

# Quick Start

:::caution For advanced developers

This guide shows an overview of how to quickly setup a Stablocks installation. If you need more detailed guidance continue on to the [setting up Supabase](supabase.md) step.

:::

## 1. Setup Supabase

Supabase will be the app's database and authentication setup.

1. Create a new [Supabase](https://supbase.com) project
2. Add your website URL under **Authentication** > **Configuration** > **Settings**
3. Uncheck **Disable Signup** and check **Enable Email Signup**

## 2. Third-party login (optional)

This will allow employees to login to with your third-party authentication provider for single sign-on (SSO).

1. Create your third-party credentials with either Google or Azure (Microsoft)
2. Add the credentials to your Supabase dashboard under **Authentication** > **Settings** > **External OAuth Providers** 

## 3. Deploy to Netlify

:::info Other deployments

This guide uses the [Netlify](deployment/netlify.md) deployment, please refer to the [deployment](deployment) section for other options.

:::

Netlify will host our application and make in available for users to interact with.