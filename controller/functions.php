<?php
function url($link)
{
  return parse_url($_SERVER['REQUEST_URI'])['path'] == $link ? 'active' : '';
}

function dd($para)
{
  echo '<pre>';
  die(var_dump($para));
  echo '</pre>';
  die();
}