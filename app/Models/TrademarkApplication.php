<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Model;
class TrademarkApplication extends Model{
protected $fillable=[
        'trade_id',
        'user_id',
        'trademark_type',
        'business_activity',
        'selected_classes',
        'plan',
        'amount',
        'payment_status',
        'current_step',
        'razorpay_order_id',
        'razorpay_payment_id',
];
protected $casts = [
        'selected_classes' => 'array',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
    /**
 * Generate unique trade ID
 */
public static function generateTradeId(): string
{
    $year = now()->format('Y');

    $last = self::whereYear('created_at', $year)
        ->whereNotNull('trade_id')
        ->orderBy('id', 'desc')
        ->first();

    $sequence = 1;
    if ($last && preg_match('/-(\d+)$/', $last->trade_id, $matches)) {
        $sequence = (int) $matches[1] + 1;
    }

    return sprintf('IPR-%s-%04d', $year, $sequence);
}
}

