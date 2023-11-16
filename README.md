# Scientech Portal

## Setup

To start working in the dev environment is required to have the following `.env` file in the root of the project:

```
# Firebase config
API_KEY=XXXXXXX
AUTH_DOMAIN=XXXXXXX
PROJECT_ID=XXXXXXX
STORAGE_BUCKET=XXXXXXX
MESSAGING_SENDER_ID=XXXXXXX
APP_ID=XXXXXXX

# Auth config
AUTH_SECRET=XXXXX
AUTH_URL=http://localhost:3000/api/auth

# Forms config
FORMSPREE_SALES=XXXXXX
FORMSPREE_PROJECTS=XXXXXX
```

Each of the values can be found in the firebase console.

The `AUTH_SECRET` is a random string that will be used to sign the JWT tokens.

The `FORMSPREE_SALES` and `FORMSPREE_PROJECTS` are the form ids for the sales and projects forms respectively.

## Development

Start by installing the dependencies:

```
yarn
```

To start the development server run:

```
yarn dev
```

By default the server will be running on port `3000`.

## Deployment

To deploy the project run:

```
yarn deploy
```

The deployment is done using vercel, it's automatically configured to deploy on every push to the `main` branch.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
