<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SignupOtp extends Model
{
    protected $fillable = [
        "email",
        "number",
        'otp',
        'expires_at',
    ];
}
