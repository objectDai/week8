require.config({
    paths: {
        jquery: './jquery.min',
        home: './lib/getall',

    }
});

require(['shopcar'], function(shopcar) {
    shopcar.render();
})