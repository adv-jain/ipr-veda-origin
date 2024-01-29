<?php

// $url = parse_url($_SERVER['REQUEST_URI'])['path'];
$url = basename($_SERVER['REQUEST_URI']);
$routes = [
  'home' => 'controller/home.php',
  '/' => 'controller/home.php',
  'about' => 'controller/about.php',
  'contacts' => 'controller/contacts.php',
  'credits' => 'controller/credits.php',
  '404' => 'controller/404.php',
  'blog' => 'controller/blog.php',
  'disclaimer' => 'controller/disclaimer.php',
  'privacy' => 'controller/privacy-policy.php',
  'refund' => 'controller/refund-policy.php',
];

function abort($code = 404)
{
  http_response_code($code);
  require "controller/{$code}.php";
}

function routesToController($url, $routes)
{
  if (array_key_exists($url, $routes)) {
    require $routes[$url];
  } else {
    abort();
  }
}

routesToController($url, $routes);