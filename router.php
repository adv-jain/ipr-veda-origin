<?php

require 'controller/functions.php';

$url = parse_url($_SERVER['REQUEST_URI'])['path'];

// dd($url);

$routes = [
  '/' => 'controller/home.php',
  '/home' => 'controller/home.php',
  '/about' => 'controller/about.php',
  '/contact' => 'controller/contact.php',
  '/credits' => 'controller/credits.php',
  '/404' => 'controller/404.php',
  '/blog' => 'controller/blog.php',
  '/disclaimer' => 'controller/disclaimer.php',
  '/privacy' => 'controller/privacy-policy.php',
  '/refund' => 'controller/refund-policy.php',
  '/find-classes' => 'controller/find-classes.php',
  '/login' => 'controller/login.php',
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