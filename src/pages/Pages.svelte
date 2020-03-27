<script>
  import page from 'page';

  import DefaultLayout from '../layouts/DefaultLayout/DefaultLayout';

  import Home from './Home/Home';

  let pageProps = {
    component: Home,
    layout: DefaultLayout,
  };

  page('/', () => {
    pageProps = {
      component: Home,
      layout: DefaultLayout,
    };
  });

  page.start();
</script>

<svelte:component this={pageProps.layout}>
  <svelte:component this={pageProps.component} />
</svelte:component>
