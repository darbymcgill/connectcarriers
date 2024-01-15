
<?php


function connect_carriers_includes() {
    
    wp_enqueue_style('page-styles', get_stylesheet_uri());
    wp_enqueue_script('custom-style', get_template_directory_uri() . '/js/main.js', array('jquery'), microtime(), true);
   
}

add_action('wp_enqueue_scripts', 'connect_carriers_includes');
