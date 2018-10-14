<?php

// Add a custom options page to associate ACF fields with
if ( function_exists( 'acf_add_options_page' ) ) {
    acf_add_options_page( [
        'page_title' => 'Business Data',
        'menu_title' => 'Business Data',
        'menu_slug'  => 'business-settings',
        'capability' => 'manage_options',
        'post_id'    => 'business-settings',
        'redirect'   => false,
    ] );
}
