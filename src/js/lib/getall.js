require.config({
    paths: {
        jquery: './jquery.min',
        home: './lib/getall',

    }
});

require(['home'], function(home) {
    home.render();
})