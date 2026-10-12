<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class WhatsAppNotification extends Model
{
    use HasFactory;
    
protected $table = 'whatsapp_notifications';

    // ---------- Reason constants ----------
    const REASON_ABANDONED    = 'abandoned_onboarding';
    const REASON_PAY_LATER    = 'pay_later';
    const REASON_OTP          = 'otp';
    const REASON_WELCOME      = 'welcome';
    const REASON_OTHER        = 'other';

    // ---------- Status constants ----------
    const STATUS_SENT   = 'sent';
    const STATUS_FAILED = 'failed';

    /**
     * Mass-assignable columns
     */
    protected $fillable = [
        'user_id',
        'application_id',
        'number',
        'reason',
        'template_name',
        'status',
        'error_message',
    ];

    /**
     * Casts
     */
    protected $casts = [
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    // ==================================================
    // RELATIONS
    // ==================================================

    /**
     * Notification kis user ko gayi
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Notification kis application ke liye thi (agar applicable)
     */
    public function application()
    {
        return $this->belongsTo(TrademarkApplication::class, 'application_id');
    }

    // ==================================================
    // SCOPES
    // ==================================================

    /**
     * Sirf sent notifications
     */
    public function scopeSent($query)
    {
        return $query->where('status', self::STATUS_SENT);
    }

    /**
     * Sirf failed notifications
     */
    public function scopeFailed($query)
    {
        return $query->where('status', self::STATUS_FAILED);
    }

    /**
     * Sirf abandoned onboarding notifications
     */
    public function scopeAbandoned($query)
    {
        return $query->where('reason', self::REASON_ABANDONED);
    }

    /**
     * Sirf pay later notifications
     */
    public function scopePayLater($query)
    {
        return $query->where('reason', self::REASON_PAY_LATER);
    }

    /**
     * Aaj ki notifications
     */
    public function scopeToday($query)
    {
        return $query->whereDate('created_at', today());
    }

    // ==================================================
    // HELPER METHODS
    // ==================================================

    /**
     * Human-readable reason label
     */
    public function getReasonLabelAttribute(): string
    {
        return match ($this->reason) {
            self::REASON_ABANDONED => 'Abandoned Onboarding',
            self::REASON_PAY_LATER => 'Pay Later',
            self::REASON_OTP       => 'OTP',
            self::REASON_WELCOME   => 'Welcome',
            default                => 'Other',
        };
    }

    /**
     * Human-readable status label
     */
    public function getStatusLabelAttribute(): string
    {
        return match ($this->status) {
            self::STATUS_SENT   => 'Sent',
            self::STATUS_FAILED => 'Failed',
            default             => 'Unknown',
        };
    }

    /**
     * Status ke liye color (UI badges ke liye)
     */
    public function getStatusColorAttribute(): string
    {
        return match ($this->status) {
            self::STATUS_SENT   => 'green',
            self::STATUS_FAILED => 'red',
            default             => 'gray',
        };
    }
}