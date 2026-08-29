<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->boolean('is_onboarded')->default(false);
            $table->string('business_type')->nullable();
            $table->string('company_name')->nullable();
            $table->string('preference')->nullable();
        });
    }

    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn(['is_onboarded', 'business_type', 'company_name', 'preference']);
        });
    }
};