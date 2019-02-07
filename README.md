# Bookr - landing page


-----------------

**Bookr - your next read. Right there.** is a social platform that can help you find the next book to read. Think of it as the AirBnB of text books - we deliver you the best experience of reading with the peer-reviewed text books.

Bookr was originally developed by a team of developers at [Lambda School](https://github.com/LambdaSchool).


## Table of contents

* [Technologies used and dependencies](#built-with)
* [Installation](#installation)
* [Contribution guidelines](#contribution-guidelines)
* [License](#license)

## Built with

* HTML5
* CSS3 (LESS)
* JavaScript (ECMAScript 6+)

## Dependencies

* [Bootstrap 4.1.7](https://getbootstrap.com)
* [jQuery 3.3.1](http://jquery.com)
* [Popper.js 1.14.3](https://popper.js.org)
* [Font Awesome 4.7.0](https://fontawesome.com)
* [aos (next)](https://github.com/michalsnik/aos)

## Installation

The easiest way to get this web page up and running is to use [Netlify](https://www.netlify.com).
1. Fork the repository.
2. Set up an account at Netlify (or log in if you already have an account).
3. Click "New site from Git".
4. Connect your Github account to Netlify using the button under the **Continuous Deployment** section.
5. Select the forked repository.
6. You are all set!

## Contribution guidelines

### Contributing to Bookr

So, you want to contribute to this repository? You may contribute in several ways:

* Create new features
* Fix bugs
* Improve documentation and examples
* Translate any document here to your language

### Table of contents

* [Contributing to Bookr](#contributing-to-bookr)
* [Developing Bookr](#developing-bookr)
* [Reporting a bug](#reporting-a-bug)
* [Request a feature](#request-a-feature)
* [Commit messages](#commit-messages)
* [Code style](#code-style)

### Developing Bookr

There are several source files in the project. The main HTML file is [index.html](index.html). The main styles file is [/css/index.css](/css/index.css) that is a result of compilation of the LESS files available in the [/less](/less) directory. You can use `less-watch-compiler` to convert your LESS to CSS, i.e. by running a command `less-watch-compiler less css index.less` (of course you need to install it first).

### Reporting a bug

Use the [GitHub issue tracker](https://github.com/bw-bookr/bookr-landing/issues) to report any bug you find.

Bug description should include:

* How to reproduce the bug;
* Concise and relevant title;

It would be nice to have some code showing how to reproduce the bug - you can use [gist](https://gist.github.com) or [CodePen](https://codepen.io) for uploading your code.

### Request a feature

Use the [GitHub issue tracker](https://github.com/bw-bookr/bookr-landing/issues) to request a new feature.
Keep in mind that `Bookr` intends to be simple webpage
Feel free to rewrite it using your favorite framework or library (i.e. using Angular, Vue or React) in the forked repository.

## Commit messages

Commit messages should includes a GitHub reference number and an easy to understand sentence describing the work you did.

### Code style

Feel free to use the newest ECMAScript features. ES2015, ES2017, ES2018...they are all more than welcome. When adding new things, be sure to link them correctly.

## For more information

* [Lambda School](https://lambdaschool.com)

## License

[MIT License](LICENSE)