<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Credit extends Model
{
    protected $fillable = [
        'title',
        'last_updated',
        'description',
    ];

    protected $casts = [
        'last_updated' => 'date',
    ];
}