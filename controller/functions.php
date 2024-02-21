<?php

function dd($para)
{
  echo '<pre>';
  var_dump($para);
  echo '</pre>';
  die();
}

function page($link)
{
  return $_SERVER['REQUEST_URI'] == $link ? ' active' : '';
}
