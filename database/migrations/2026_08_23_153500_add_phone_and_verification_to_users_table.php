<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('users', function (Blueprint $table) {
            // e.g. 919876543210 (country code + number, no + or spaces)
            $table->string('phone_number')->unique()->nullable()->after('email');
            $table->boolean('is_verified')->default(false)->after('phone_number');
        });
    }

    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn(['phone_number', 'is_verified']);
        });
    }
};