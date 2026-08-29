<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('signup_otps', function (Blueprint $table) {
            // 'otp' column ke baad expires_at add kar rahe hain
            $table->timestamp('expires_at')->nullable()->after('otp');
        });
    }

    public function down(): void
    {
        Schema::table('signup_otps', function (Blueprint $table) {
            $table->dropColumn('expires_at');
        });
    }
};