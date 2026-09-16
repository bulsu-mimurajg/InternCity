<?php

namespace App\Http\Responses;
use \Laravel\Fortify\Contracts\LoginResponse as LoginResponseContract;
use Symfony\Component\HttpFoundation\Response;

class LoginResponse implements LoginResponseContract
{
    /**
     * Create a new class instance.
     */
    public function toResponse($request): Response
    {
        $user = $request->user();

        $redirect = match (true) {
            $user->hasRole('admin') => route('AdminDashboard', absolute: false),
            $user->hasRole('hte') => route('HteDashboard', absolute: false),
            $user->hasRole('adviser') => route('AdviserDashboard', absolute: false),
            $user->hasRole('student') => route('StudentDashboard', absolute: false),
            default => route('home', absolute: false)
        };
        return redirect()->intended($redirect);
    }
}
