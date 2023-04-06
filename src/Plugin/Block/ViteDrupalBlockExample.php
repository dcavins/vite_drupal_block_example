<?php
namespace Drupal\vite_drupal_block_example\Plugin\Block;

use Drupal\Core\Block\BlockBase;

/**
 * Renders the Vite Test block.
 *
 * @Block(
 *   id = "vite_drupal_block_example",
 *   admin_label = @Translation("Vite Drupal Block Example"),
 *   category = @Translation("Vite Test"),
 * )
 */
class ViteDrupalBlockExample extends BlockBase {

  /**
   * {@inheritdoc}
   */
  public function build() {
    // Fetch the block configuration.
    $config = $this->getConfiguration();

    return [
      '#theme'                              => 'vite_test_template', // Template file to use
      '#vite_drupal_block_example_base_url' => \Drupal::service('extension.list.module')->getPath('vite_drupal_block_example'),
      // Attach JS and CSS, as defined in the module's libraries.yml file.
      '#attached'          => ['library' => ['vite_drupal_block_example/vite-test-base']],
    ];
  }

}