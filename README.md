<div align='center'>
  <img src="https://jynx.vercel.app/images/logo.png" width="80px" />
</div>

<h1 align="center">Jynx</h1>

<p align="center">
<strong>
Rapidly create and control responsive, theme-focused and type-safe components, directly from your jsx.
</strong>
</p>

<div align="center">

![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/silkstudio/jynx/main.yml?branch=main&label=CI&logo=git&logoColor=white)
![npm](https://img.shields.io/npm/v/jynx)
![npm](https://img.shields.io/npm/dw/jynx)
![GitHub Repo stars](https://img.shields.io/github/stars/silkstudio/jynx)
![GitHub](https://img.shields.io/github/license/silkstudio/jynx)

</div>

<hr style="height: 1px; margin-bottom: 2.375em;"/>

`Jynx` is a performant and intuitive utility library for the _'CSS-in-JS era'_, allowing for
responsive, theme-focused, type-safe styled-components to be rapidly created and
controlled directly from your jsx.

Originally built in-house by [Silk Studio](/) to streamline our own development pipeline, `Jynx` is now available to use in your own projects and comes with support for: 

- rapid component styling through the use of style-props
- using objects and arrays to create mobile-first, responsive designs
- integration with a global theme that's accessed directly from your props
- written in Typescript and fully type-safe

<hr style="opacity: 0;"/>

### ✏️ &nbsp;Getting Started

Check out the [introduction](https://jynx.vercel.app/introduction) to get up and running or head to [jynx.vercel.app](https://jynx.vercel.app) to view the full documentation.

### 🔗 &nbsp;Quick Links

- [Introduction](https://jynx.vercel.app/getting-started/introduction)
- [Responsive Styles](https://jynx.vercel.app/getting-started/responsive-styles)
- [Themes](https://jynx.vercel.app/getting-started/themes)
- [API Reference](https://jynx.vercel.app/reference/api)
- [Types](https://jynx.vercel.app/reference/types)
- [Advanced Theming](https://jynx.vercel.app/theming/setup)
- [Creating Style Functions](https://jynx.vercel.app/utilities/create-style-function)

### 💻 &nbsp;Development

Jynx uses [shipjs](https://github.com/algolia/shipjs) for managing it's releases. For devs issuing a new release, simply run `yarn release` in your local terminal and follow the CLI wizard.

#### __Notes on Releasing__
- When merging a shipjs-created PR always make sure to `Squash & Merge` *(failure to do so will cause issues due to the commit name)*.
- If you are experiencing auth issues with git/github you may need to authorise a new `GITHUB_TOKEN`.

### 📄 &nbsp;License

`Jynx` is MIT licensed, Copyright © 2022-present 

<footer>
<hr style="height: 1px; margin: 2.375em auto 0.75em"/>
<div style="font-size: 0.75em; opacity: 0.625">2022 © Silk Studio</div>
</footer>
