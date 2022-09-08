# Remix and Drupal = Dreamix!

This is a short demo of using Drupal as an [API](https://www.drupal.org/about/strategic-initiatives/api-first) to pass data to a Remix app.

Drupal can be exposed as a RESTful Web service primarily with JSON:API or REST module. There are [tradeoffs to both approaches](https://www.drupal.org/docs/core-modules-and-themes/core-modules/jsonapi-module/jsonapi-vs-cores-rest-module). For this demo I chose to use JSON:API because it exposes all entity types as resources out of the box.  While it returns far more data than we actually need for a basic app, we can filter what data is actually passed to our loader functions in our server functions (`/app/models/`).

## Prerequisites

This demo assumes you have a running Drupal 8+ Site with the [JSON:API module](https://www.drupal.org/docs/core-modules-and-themes/core-modules/jsonapi-module) enabled.

Clone this repo, run `npm install`, and then create a `.env` file and add your Drupal site as the api endpoint:

```
API_ENDPOINT="http://your-awesome-drupal-site.com/jsonapi"
```

## Why Drupal and Remix?

There are many ways to make a Drupal site, but I think it shines best in a decoupled, API-first context. It has really sound paradigms for modeling data, but I find the theme layer to be too bulky. I would much rather consume Drupal data with a React, Vue, etc. app to have full control of the User Experience.

On that note, Remix is a full-stack web framework that I think has huge potential. Remix borrows some inspiration from more traditional PHP web applications, and I see a lot of parallels between Drupal and Remix that indicate they could work well together.

### Nested routes

TODO