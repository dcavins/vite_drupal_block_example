# vite-drupal-block-example
 Output the `create-vite` example in a Drupal block.

This modules relies on the [Drupal Vite module](https://www.drupal.org/project/vite), which must be both installed and enabled for the Vite environment in this example block plugin to work. It is not installed by default.

Install the example block module in your site's `modules/custom` directory. Note that this module's directory name must be `vite_drupal_block_example` (there's a hardcoded path in a Vite config file that expects this module to exist at `/modules/custom/vite_drupal_block_example/`). After activation, place the "Vite Drupal Block Example" block in a content area. 

To enter Vite's dev mode, in your terminal change directories into the vite directory inside this module (`cd /vite`) and run `npm install` then `npm run dev`.

Including images in `App.vue` like `<img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />` doesn't seem to work as expected when in the dev environment. Images do work in the built version, resolving to the rollup-produced optimized image, like `<img data-v-0bdc7cd8="" src="/modules/custom/vite_drupal_block_example/dist/assets/vue-5532db34.svg" class="logo vue" alt="Vue logo">`.

Also note that, after building your app (using `npm run build`), you'll need to clear your Drupal cache. It seems like Drupal really likes to have its cache cleaned.
