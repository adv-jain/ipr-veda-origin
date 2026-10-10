<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('issue_reports', function (Blueprint $table) {
            $table->id();
            
        
            $table->foreignId('user_id')
                  ->constrained()
                  ->cascadeOnDelete();
            
            // Subject — short title
            $table->string('subject');
            
            // Description — detail
            $table->text('description');
            
            // Status — pending / in_progress / resolved
            $table->string('status')->default('pending');
            
            // Admin notes — optional
            $table->text('admin_notes')->nullable();
            
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('issue_reports');
    }
};