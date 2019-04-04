import { Selector } from 'testcafe';

// BlinkMacSystemFont is being replaced by system-ui in mac osx
const SystemUIFont = process.platform === 'darwin' ? 'system-ui' : 'BlinkMacSystemFont';

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
        .expect(Selector('body').getStyleProperty('font-family')).eql(`-apple-system, ${SystemUIFont}, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`);
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
