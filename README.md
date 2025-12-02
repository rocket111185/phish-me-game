# Phish Me!

"Phish Me!" is a game intended to educate on phishing techniques in a fun and
entertaining way. You can play alone or try tricking your friends (no real
page visits involved).

Currently this game is in development, later on I will include the link for this
game so you can try it in action.

## Rules

You can play this game as a single player or in a multiplayer.

### Single player

WIP

### Multiplayer

WIP

## Deploying to Deno

This project is written for Deno environment. To deploy it to Deno Deploy,
follow these steps:

1. Create a new project based on this repository (or your own fork). Deno Deploy
   must detect that this is a Next.js project.
2. Replace the project ID in `deno.json` with your own.
3. Make sure `deploy.sh` is executable.
4. Run `deno task build` to make a production build.
5. Run `deno task deno:deploy` to deploy this project.

## Workarounds

1. Unlike the original [Deploy Next.js to Deno](https://github.com/nextjs/deploy-deno)
   template, this project contains React 18.2 instead of React 19.0-rc, because
   otherwise this version conflicts with Material UI.
2. Due to unknown reason the production build is not performed until the
   TypeScript checks are disabled during the build. I hope it will be resolved
   in the future, but until now the checks must be disabled.

## Credits

ⓒ Dmytro Rekechynskyi
