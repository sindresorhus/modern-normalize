<div align="center">
	<img src="https://rawgit.com/sindresorhus/modern-normalize/master/media/logo.svg" alt="modern-normalize">
	<br>
	<br>
	<br>
	<br>
	<br>
</div>


## Differences from [`normalize.css`](https://github.com/necolas/normalize.css)

- Half the size
- Includes only normalizations for the latest Chrome, Firefox, and Safari
- [Doesn't force `font-family: sans-serif` on buttons and inputs](https://github.com/necolas/normalize.css/issues/694)
- [Sets `box-sizing: border-box`](https://www.paulirish.com/2012/box-sizing-border-box-ftw/)
- Actively maintained

All credit should go to `normalize.css`. I just removed some cruft and added some improvements.

If you have questions about the source, check out the [original source](https://github.com/necolas/normalize.css/blame/master/normalize.css) and [this](https://github.com/necolas/normalize.css#extended-details-and-known-issues) for details.

[**The goal of this project is to make itself obsolete.**](https://github.com/sindresorhus/modern-normalize/issues/2)

[![Build Status](https://travis-ci.org/sindresorhus/modern-normalize.svg?branch=master)](https://travis-ci.org/sindresorhus/modern-normalize)


## Install

```
$ npm install modern-normalize
```

<a href="https://www.patreon.com/sindresorhus">
	<img src="https://c5.patreon.com/external/logo/become_a_patron_button@2x.png" width="160">
</a>


## Usage

```css
@import 'node_modules/modern-normalize/modern-normalize.css';
```

or

```html
<link rel="stylesheet" href="node_modules/modern-normalize/modern-normalize.css">
```

This package also includes a base style with better defaults:

```css
@import 'node_modules/modern-normalize/modern-base.css';
```


## License

MIT
