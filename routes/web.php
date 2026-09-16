<?php

use App\Http\Controllers\StudentController;
use Illuminate\Support\Facades\Route;

Route::inertia('/', 'welcome')->name('home');
Route::inertia('/about', 'about')->name('about');
Route::inertia('/contact', 'contact')->name('contact');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::middleware(['role:admin'])->group(function () {
        Route::inertia('admin/dashboard', 'admin/dashboard')->name('AdminDashboard');
    });
    Route::middleware(['role:hte'])->group(function () {
        Route::inertia('hte/dashboard', 'hte/dashboard')->name('HteDashboard');
    });
    Route::middleware(['role:adviser'])->group(function () {
        Route::inertia('adviser/dashboard', 'adviser/dashboard')->name('AdviserDashboard');
    });
    Route::middleware(['role:student'])->group(function () {
        Route::get('student/dashboard', [StudentController::class, 'index'])->name('StudentDashboard');
    });
});

require __DIR__.'/settings.php';
