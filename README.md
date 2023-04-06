# vite-drupal-block-example
 Output the `create-vite` example in a Drupal block.

 This modules relies on the [Drupal Vite module](https://www.drupal.org/project/vite).

 Install this module in your site's `modules/custom` directory. After activation, place the "Vite Drupal Block Example" block in a content area. Note that the module's directory name must be `vite_drupal_block_example`.

 To enter Vite's dev mode, in your terminal change directories into the vite directory inside this module (`cd /vite`) and run `npm install` then `npm run dev`.

 Including images in `App.vue` like `<img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />` don't seem to work as expected when in the dev environment. They do work in the built version, resolving to the rollup-produced optimized image, like `<img data-v-0bdc7cd8="" src="/modules/custom/vite_drupal_block_example/dist/assets/vue-5532db34.svg" class="logo vue" alt="Vue logo">`.

 Also note that, after building your app (using `npm run build`), you'll need to clear your Drupal cache. It seems like Drupal really likes to have its cache cleaned.
