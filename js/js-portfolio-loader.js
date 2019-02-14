[
    'https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js',
    'js/main-min.js',
    'js/portfolio-post-jq.js'
].forEach(function(src) {
    var script = document.createElement('script');
    script.src = src;
    script.async = false;
    document.head.appendChild(script);
});
