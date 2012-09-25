<?php

/*
  Plugin Name: lasimpleagence-galerie
  Description: Ce plugin permet de remplacer la galerie native de Wordpress par une version plus élaborée
  Vesion: 1
 */

//------------------------------------------------------------------------------
// Import Stylesheet
//------------------------------------------------------------------------------

function add_stylesheets() {

    // change this path to load your own custom stylesheet
    $css_path = WP_PLUGIN_URL . '/' . strtolower('simple-gallery') . '/' . 'css/simple-gallery.css';

    // registers your stylesheet
    wp_register_style('simpleGalleryStyles', $css_path);

    // loads your stylesheet
    wp_enqueue_style('simpleGalleryStyles');
}

// Only add the stylesheet if we are NOT on the admin screen
if (!is_admin()) {
    add_action('wp_enqueue_scripts', 'add_stylesheets');
}

//------------------------------------------------------------------------------
// Enqueue Js
//------------------------------------------------------------------------------

function add_js() {

    // change this path to load your own custom stylesheet
    $js_path = WP_PLUGIN_URL . '/' . strtolower('simple-gallery') . '/' . 'js/simple-gallery.js';

    // registers your stylesheet
    wp_register_script('simpleGalleryJs', $js_path);

    // loads your js
    wp_enqueue_script('jquery');
    wp_enqueue_script('simpleGalleryJs');
}

// Only add the stylesheet if we are NOT on the admin screen
if (!is_admin()) {
    add_action('wp_enqueue_scripts', 'add_js');
}

//------------------------------------------------------------------------------
// Gallery
//------------------------------------------------------------------------------
function my_post_gallery($output, $attr) {
    global $post, $wp_locale;

    static $instance = 0;
    $instance++;

    // We're trusting author input, so let's at least make sure it looks like a valid orderby statement
    if (isset($attr['orderby'])) {
        $attr['orderby'] = sanitize_sql_orderby($attr['orderby']);
        if (!$attr['orderby'])
            unset($attr['orderby']);
    }

    extract(shortcode_atts(array(
                'order' => 'ASC',
                'orderby' => 'menu_order ID',
                'id' => $post->ID,
                'itemtag' => 'li',
                'icontag' => 'span',
                'captiontag' => 'ul',
                'columns' => 3,
                'size' => 'full',
                'include' => '',
                'exclude' => ''
                    ), $attr));

    $id = intval($id);
    if ('RAND' == $order)
        $orderby = 'none';

    if (!empty($include)) {
        $include = preg_replace('/[^0-9,]+/', '', $include);
        $_attachments = get_posts(array('include' => $include, 'post_status' => 'inherit', 'post_type' => 'attachment', 'post_mime_type' => 'image', 'order' => $order, 'orderby' => $orderby));

        $attachments = array();
        foreach ($_attachments as $key => $val) {
            $attachments[$val->ID] = $_attachments[$key];
        }
    } elseif (!empty($exclude)) {
        $exclude = preg_replace('/[^0-9,]+/', '', $exclude);
        $attachments = get_children(array('post_parent' => $id, 'exclude' => $exclude, 'post_status' => 'inherit', 'post_type' => 'attachment', 'post_mime_type' => 'image', 'order' => $order, 'orderby' => $orderby));
    } else {
        $attachments = get_children(array('post_parent' => $id, 'post_status' => 'inherit', 'post_type' => 'attachment', 'post_mime_type' => 'image', 'order' => $order, 'orderby' => $orderby));
    }

    if (empty($attachments))
        return '';

    if (is_feed()) {
        $output = "\n";
        foreach ($attachments as $att_id => $attachment)
            $output .= wp_get_attachment_link($att_id, $size, true) . "\n";
        return $output;
    }

    // Diapo
    $diapo = '';
    $pager = '';
    $total = count($attachments);
    $output = apply_filters('gallery_style', "
        <div class='diaporama'>");

    $i = 1;

    foreach ($attachments as $id => $attachment) {
        // Diaporama
        $diapo .= ($i == 1) ? "<ul id='slider1'>" : "";
        $link = isset($attr['link']) && 'file' == $attr['link'] ? wp_get_attachment_link($id, array(574, 574), false, false) : wp_get_attachment_link($id, array(574, 574), true, false);
        $diapo .= "<li>$link<div class='description-media'><h3>" . wptexturize($attachment->post_title) . "</h3>" . wptexturize($attachment->post_content) . "</div></li>";
        $diapo .= ($total == $i) ? "</ul>\n" : "";

        // Pager
        $pager .= ($i == 1) ? "<ul id='pager-slider1'>" : "";
        $link = isset($attr['link']) && 'file' == $attr['link'] ? wp_get_attachment_link($id, array(60, 60), false, false) : wp_get_attachment_link($id, array(54, 54), true, false);
        $pager .= "<li>$link</li>";
        $pager .= ($total == $i) ? "</ul>\n" : "";
        $i++;
    }

    $output .= $diapo . $pager;

    $output .= "
        </div>\n";

    return $output;
}

add_filter('post_gallery', 'my_post_gallery', 10, 2);