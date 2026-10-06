<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class RoleSeeder extends Seeder
{
    public function run(): void
    {
        // Role agar pehle se hai toh wahi use karega, naya nahi banayega
        $adminRole = Role::firstOrCreate(['name' => 'admin']);
        $userRole = Role::firstOrCreate(['name' => 'user']);

        // Admin user ko create ya update karein
        $admin = User::updateOrCreate(
            ['email' => 'admin@gmail.com'],
            [
                'name' => 'Admin User',
                'password' => Hash::make('password123'), // Proper bcrypt hash
                'role' => 'admin',
                'is_onboarded' => true,
            ]
        );

        // Role assign karein
        $admin->assignRole($adminRole);
    }
}