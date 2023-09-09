hexo.extend.injector.register(
    'head_end',
    '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@docsearch/css@3"/>'
)
hexo.extend.injector.register(
    'body_end',
    `
    <script src="https://cdn.jsdelivr.net/npm/@docsearch/js@3"></script>
    <script type="text/javascript">
        docsearch({
            appId: 1F91G08XY8,
            apiKey: 287b922719bf274446e7efe015eb5fbf,
            indexName: reardon,
            insights: true,
            container: 'div#nav-right::before'
            debug: true
        });
    </script>
    `
)