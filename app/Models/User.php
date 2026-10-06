<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens; 
use Spatie\Permission\Traits\HasRoles;
class User extends Authenticatable
{
    use HasApiTokens, Notifiable; 
    use HasRoles;
    protected $fillable = [
        'name',
        'email',
        'number',
        'password',
        'is_onboarded',     
         'company_name',      
          'business_type',     
          'preference', 
          'role'
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];
    public function payments()
{
    return $this->hasMany(Payment::class);
}
}
