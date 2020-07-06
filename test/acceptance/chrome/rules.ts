import {Selector} from 'testcafe';

fixture `Chrome Rules Tests`
	.page `http://localhost:8080/test/page/with-css.html`;

test('Use a better box model (opinionated).', async t => {
	await t
		.expect(Selector('html').getStyleProperty('box-sizing')).eql('border-box');
});

test('Use a more readable tab size (opinionated).', async t => {
	await t
		.expect(Selector('html').getStyleProperty('tab-size')).eql('4');
});

test('Correct the line height in all browsers.', async t => {
	await t
		.expect(Selector('html').getStyleProperty('font-size')).eql('16px')
		.expect(Selector('html').getStyleProperty('line-height')).eql('18.4px');
});

test('Prevent adjustments of font size after orientation changes in iOS.', async t => {
	await t
		.expect(Selector('html').getStyleProperty('text-size-adjust')).eql('100%');
});

test('Remove the margin in all browsers.', async t => {
	await t
		.expect(Selector('body').getStyleProperty('margin-top')).eql('0px')
		.expect(Selector('body').getStyleProperty('margin-right')).eql('0px')
		.expect(Selector('body').getStyleProperty('margin-bottom')).eql('0px')
		.expect(Selector('body').getStyleProperty('margin-left')).eql('0px');
});

test('Improve consistency of default fonts in all browsers.', async t => {
	await t
		.expect(Selector('body').getStyleProperty('font-family')).eql(`system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"`);
});

test('Add the correct height in Firefox.', async t => {
	await t
		.expect(Selector('hr[data-test--hr]').getStyleProperty('height')).eql('2px');
});

test('Add the correct text decoration in Edge, and Safari.', async t => {
	await t
		.expect(Selector('abbr[data-test--abbr]').getStyleProperty('text-decoration')).eql('underline dotted rgb(0, 0, 0)');
});

test('Add the correct font weight in Chrome, Edge, and Safari.', async t => {
	await t
		.expect(Selector('b[data-test--bold]').getStyleProperty('font-weight')).eql('900')
		.expect(Selector('strong[data-test--bold]').getStyleProperty('font-weight')).eql('900');
});

test('Improve consistency of default fonts in all browsers.', async t => {
	await t
		.expect(Selector('[data-test--code]').getStyleProperty('font-family')).eql('ui-monospace, SFMono-Regular, Consolas, "Liberation Mono", Menlo, monospace');
});

test('Correct the odd `em` font sizing in all browsers.', async t => {
	await t
		.expect(Selector('[data-test--code]').getStyleProperty('font-size')).eql('16px');
});

test('Add the correct font size in all browsers.', async t => {
	await t
		.expect(Selector('[data-test--small]').getStyleProperty('font-size')).eql('12.8px');
});

test('Prevent `sub` and `sup` elements from affecting the line height in all browsers.', async t => {
	await t
		.expect(Selector('[data-test--subsup]').getStyleProperty('font-size')).eql('12px')
		.expect(Selector('[data-test--subsup]').getStyleProperty('line-height')).eql('0px')
		.expect(Selector('[data-test--subsup]').getStyleProperty('position')).eql('relative')
		.expect(Selector('[data-test--subsup]').getStyleProperty('vertical-align')).eql('baseline')
		.expect(Selector('sub[data-test--subsup]').getStyleProperty('bottom')).eql('-3px')
		.expect(Selector('sup[data-test--subsup]').getStyleProperty('top')).eql('-6px');
});

test('Change the font styles in all browsers.', async t => {
	await t
		.expect(Selector('[data-test--forms-1]').getStyleProperty('font-family')).eql('MYCUSTOMFONT')
		.expect(Selector('[data-test--forms-1]').getStyleProperty('font-size')).eql('16px')
		.expect(Selector('[data-test--forms-1]').getStyleProperty('line-height')).eql('18.4px');
});

test('Remove the margin in Firefox and Safari.', async t => {
	await t
		.expect(Selector('[data-test--forms-1]').getStyleProperty('margin-top')).eql('0px')
		.expect(Selector('[data-test--forms-1]').getStyleProperty('margin-right')).eql('0px')
		.expect(Selector('[data-test--forms-1]').getStyleProperty('margin-bottom')).eql('0px')
		.expect(Selector('[data-test--forms-1]').getStyleProperty('margin-left')).eql('0px');
});

test('Remove the inheritance of text transform in Firefox.', async t => {
	await t
		.expect(Selector('button[data-test--forms-1]').getStyleProperty('text-transform')).eql('none')
		.expect(Selector('select[data-test--forms-1]').getStyleProperty('text-transform')).eql('none');
});

test('Correct the inability to style clickable types in iOS and Safari.', async t => {
	await t
		.expect(Selector('button[data-test--forms-1]').getStyleProperty('-webkit-appearance')).eql('button')
		.expect(Selector('[type="button"][data-test--forms-1]').getStyleProperty('-webkit-appearance')).eql('button')
		.expect(Selector('[type="reset"][data-test--forms-1]').getStyleProperty('-webkit-appearance')).eql('button')
		.expect(Selector('[type="submit"][data-test--forms-1]').getStyleProperty('-webkit-appearance')).eql('button');
});

test('Remove the inner border and padding in Firefox.', async t => {
	// `-moz-focus-inner` does not exist in Chrome
});

test('Restore the focus styles unset by the previous rule.', async t => {
	// `-moz-focusring` does not exist in Chrome
});

test('Correct the padding in Firefox.', async t => {
	await t
		.expect(Selector('fieldset[data-test--forms-2]').getStyleProperty('padding-top')).eql('5.6px')
		.expect(Selector('fieldset[data-test--forms-2]').getStyleProperty('padding-right')).eql('12px')
		.expect(Selector('fieldset[data-test--forms-2]').getStyleProperty('padding-bottom')).eql('10px')
		.expect(Selector('fieldset[data-test--forms-2]').getStyleProperty('padding-left')).eql('12px');
});

test('Remove the padding so developers are not caught out when they zero out `fieldset` elements in all browsers.', async t => {
	await t
		.expect(Selector('legend[data-test--forms-2]').getStyleProperty('padding-top')).eql('0px')
		.expect(Selector('legend[data-test--forms-2]').getStyleProperty('padding-right')).eql('0px')
		.expect(Selector('legend[data-test--forms-2]').getStyleProperty('padding-bottom')).eql('0px')
		.expect(Selector('legend[data-test--forms-2]').getStyleProperty('padding-left')).eql('0px');
});

test('Add the correct vertical alignment in Chrome and Firefox.', async t => {
	await t
		.expect(Selector('progress[data-test--forms-2]').getStyleProperty('vertical-align')).eql('baseline');
});

test('Correct the cursor style of increment and decrement buttons in Safari.', async t => {
	// TODO: Pseudo-elements selector not supported by testcafe (See https://github.com/DevExpress/testcafe/issues/2813).
});

test('Correct the odd appearance in Chrome and Safari.', async t => {
	await t
		.expect(Selector('[type="search"][data-test--forms-1]').getStyleProperty('-webkit-appearance')).eql('textfield');
});

test('Correct the outline style in Safari.', async t => {
	await t
		.expect(Selector('[type="search"][data-test--forms-1]').getStyleProperty('outline-offset')).eql('0px');
});

test('Remove the inner padding in Chrome and Safari on macOS.', async t => {
	// TODO: Pseudo-elements selector not supported by testcafe (See https://github.com/DevExpress/testcafe/issues/2813).
});

test('Correct the inability to style clickable types in iOS and Safari.', async t => {
	// TODO: Pseudo-elements selector not supported by testcafe (See https://github.com/DevExpress/testcafe/issues/2813).
});

test('Change font properties to `inherit` in Safari.', async t => {
	// TODO: Pseudo-elements selector not supported by testcafe (See https://github.com/DevExpress/testcafe/issues/2813).
});

test('Add the correct display in Chrome and Safari.', async t => {
	await t
		.expect(Selector('summary[data-test--interactive]').getStyleProperty('display')).eql('list-item');
});
