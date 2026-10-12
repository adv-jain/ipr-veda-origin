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
        Schema::create('whatsapp_notifications', function (Blueprint $table) {
            $table->id();

            // Kis user ko notification gaya
            $table->foreignId('user_id')
                  ->constrained()
                  ->cascadeOnDelete();

            // Konsi application ka tha (agar applicable ho)
            $table->foreignId('application_id')
                  ->nullable()
                  ->constrained('trademark_applications')
                  ->nullOnDelete();

            // Kis WhatsApp number pe gaya (format: 919876543210)
            $table->string('number', 20);

            // Kyun gaya — category
            $table->enum('reason', [
                'abandoned_onboarding',
                'pay_later',
                'otp',
                'welcome',
                'other',
            ])->default('other');

            // Kaunsa Meta template use hua
            $table->string('template_name');

            // Status — sent ya failed
            $table->enum('status', ['sent', 'failed'])->default('sent');

            // Agar failed hua to error message
            $table->text('error_message')->nullable();

            $table->timestamps();

            // Indexes for faster queries
            $table->index('status');
            $table->index('reason');
            $table->index('created_at');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('whatsapp_notifications');
    }
};