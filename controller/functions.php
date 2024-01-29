<?php
function url($link)
{
  return parse_url($_SERVER['REQUEST_URI'])['path'] == $link ? 'active' : '';
}