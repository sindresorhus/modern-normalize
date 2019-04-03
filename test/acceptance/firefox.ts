import { Selector } from 'testcafe';

fixture `Firefox Tests`
    .page `http://localhost:8080/test/page/index.html`;

test('Add the correct height in Firefox.', async t => {
    await t
        .expect(Selector('hr[data-test--hr]').getStyleProperty('height')).eql('2px');
});

test('Add the correct text decoration in Chrome, Edge, and Safari.', async t => {
    await t
        .expect(Selector('abbr[data-test--abbr]').getStyleProperty('text-decoration')).eql('underline dotted');
});

test('Add the correct font weight in Chrome, Edge, and Safari.', async t => {
    await t
        .expect(Selector('b[data-test--bold]').getStyleProperty('font-weight')).eql('700')
        .expect(Selector('strong[data-test--bold]').getStyleProperty('font-weight')).eql('700');
});
