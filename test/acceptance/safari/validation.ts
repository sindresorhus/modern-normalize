import { Selector } from 'testcafe';

fixture `Safari Validation Tests`
    .page `http://localhost:8080/test/page/without-css.html`;

test('Use a better box model (opinionated).', async t => {
    await t
        .expect(Selector('html').getStyleProperty('box-sizing')).notEql('border-box');
});

test('Use a more readable tab size (opinionated).', async t => {
    await t
        .expect(Selector('html').getStyleProperty('tab-size')).notEql('4');
});

test('Correct the line height in all browsers.', async t => {
    await t
        .expect(Selector('html').getStyleProperty('font-size')).eql('16px')
        .expect(Selector('html').getStyleProperty('line-height')).notEql('18.4px');
});

test('Prevent adjustments of font size after orientation changes in iOS.', async t => {
    await t
        .expect(Selector('html').getStyleProperty('text-size-adjust')).notEql('100%');
});

test('Remove the margin in all browsers.', async t => {
    await t
        .expect(Selector('body').getStyleProperty('margin-top')).notEql('0px')
        .expect(Selector('body').getStyleProperty('margin-right')).notEql('0px')
        .expect(Selector('body').getStyleProperty('margin-bottom')).notEql('0px')
        .expect(Selector('body').getStyleProperty('margin-left')).notEql('0px');
});

test('Improve consistency of default fonts in all browsers.', async t => {
    await t
        .expect(Selector('body').getStyleProperty('font-family')).notEql('-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"');
});
    
test('Add the correct height in Firefox.', async t => {
    await t
        .expect(Selector('hr[data-test--hr]').getStyleProperty('height')).notEql('2px');
});

test('Add the correct text decoration in Chrome, Edge, and Safari.', async t => {
    // await t
    //     .expect(Selector('abbr[data-test--abbr]').getStyleProperty('text-decoration')).notEql('underline dotted');
});

test('Add the correct font weight in Chrome, Edge, and Safari.', async t => {
    await t
        .expect(Selector('b[data-test--bold]').getStyleProperty('font-weight')).notEql('900')
        .expect(Selector('strong[data-test--bold]').getStyleProperty('font-weight')).notEql('900');
});
