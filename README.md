# 11ty CSS Houdini Worklet Generator

> From Stephanie Eckles [@5t3ph](https://twitter.com/5t3ph) - author of [ModernCSS.dev](https://moderncss.dev) and [11ty.Rocks](https://11ty.rocks).

This worklet was produced using [Eleventy](https://11ty.dev) as the server environment.

## Worklet Demo

The very simple worklet that is included in this generator can be viewed in [this CodePen demo](https://codepen.io/5t3ph/pen/NWRpMbv).

The demo shows how to include the required polyfill and then require the worklet within a script tag, and how to modify it's display attributes via CSS custom properties.

## To Use the Generator

CSS Houdini worklets require a server to run. While there are many ways to create an envirnoment for developing and testing your worklet. As a static site generator, Eleventy provides a slim way to get setup and testing quickly so you can focus on creating your worklet!

**Before you begin** - be sure to update the `package.json` details to your own!

### Project Structure

_The following are all within `src` which is your working directory_

`_includes/base.njk` - a simple HTML5 template that includes the (currently required) polyfill for the CSS Houdini Paint API, as well as the `CSS.paintWorklet.addModule` pointing to the worklet's location on the local server

`css/style.css` - the local server styles, this is where you add your worklet to your test elements

`index.md` - produces the index content, and can be swapped to another one of [11ty's supported templating languages]()

`worklet.js` - the critical file that creates and registers your worklet class

### Development

`npm start` - will run the project locally by launching Eleventy in watch mode and include a localhost server with hot reload provided by Browsersync.

## Publishing / Using Your Worklet

The recommendation from [Houdini.How](https://houdini.how) is to publish your worklet as an npm package so that it can be imported _and_ used by accessing it on a CDN such as [unpkg](https://unpkg.com).

This is because of the requirement of running via HTTPS, so unpkg makes it easy to share and include elsewhere such as CodePen.

**To publish via npm**, you will first need to [set up an account](https://www.npmjs.com/signup).

Then within your local project, run `npm publish`.

> The included `prepublish` command will ensure Eleventy has been freshly run to ensure the latest version of your worklet is available.

Within a few minutes you will see your package added to your npm account, and then it will also be available at `https://unpkg.com/your-package-name`

Review the [CodePen Demo](https://codepen.io/5t3ph/pen/NWRpMbv) to see how to then include it outside of your local project.

### Updating Your Worklet

If you make changes to your worklet, use the included `bump` command to easily increment your package number, ex: `npm run bump patch`, then proceed to run `npm publish`.

Your changes will be available within a few minutes.
