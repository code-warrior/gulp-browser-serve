# A Gulp Template for Serving Files from a Root Folder and Refreshing the Browser

(v0.0.1)

**Note**: You’ll need to have Java installed before you continue.

This repository provides a simple command line interface, or CLI, tool that launches your default browser and refreshes the browser anytime a file is changed in the root folder, making the development of simple static web projects easier by not having to manually reload the browser.

This tool also provides the option to use a browser other than your operating system’s default browser. See the **Usage** sections for more.

_Testing has been carried out in Windows 10, Mac OS X 10.12+, and Fedora Linux._

## Installation

All the required Node modules need to be installed before you proceed. From the root of this repo, type `npm i`, which will create a folder called `node_modules` and download the plugins listed under the `devDependencies` section in the `package.json` file. If you encounter an `ERR!` message on a Mac or Linux about `EACCES`, then you’ll need to run the command as the super user: `sudo npm i`.

## Usage for the Default Browser

Type `gulp serve` and wait a moment. Your default browser will launch in a `localhost` environment that looks for `index.html`. When you’re done, type `ctrl+c`.

### Usage for Non-default Browsers

To use any of the non-default browsers, type `gulp BROWSER serve`, where `BROWSER` is one of the browsers listed when you type `gulp --tasks`. For example, to use Firefox I’d type `gulp firefox serve`.

## Scaffold

Since this tool continuously polls _all_ folders in the root, you can use any scaffolding you want. A common scaffold, however, is included: `css` for CSS and `js` for JavaScript and JavaScript-based libraries.
