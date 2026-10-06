<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Auth;

class AdminMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  Closure(Request): (Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {

    if(Auth::check() && request->user()->hasRole('admin')){
        return $next($request);
    }
    if($request->expectsJson){
return response()->json(['message'=>'Unauthorized. Admin access required.'],403);
    }
    return redirect('/')->with('error', 'You do not have admin access.');
        
    }
}
