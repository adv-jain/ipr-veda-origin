<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

use App\Models\User;
use App\Models\Payment;
use Spatie\Permission\Models\Role;

// Admin Role create karein aur user ko assign karein
$adminRole = Role::firstOrCreate(['name' => 'admin']);

$adminUser = User::firstOrCreate(
    ['email' => 'admin@test.com'],
    [
        'name' => 'Admin User',
        'password' => bcrypt('password123'),
        'onboarding_step' => 3,
        'role' => 'admin',
    ]
);
$adminUser->assignRole($adminRole);

// Regular dummy users onboarding steps ke saath
User::factory()->count(5)->create(['onboarding_step' => 1]);
User::factory()->count(5)->create(['onboarding_step' => 2]);
User::factory()->count(5)->create(['onboarding_step' => 3]);
