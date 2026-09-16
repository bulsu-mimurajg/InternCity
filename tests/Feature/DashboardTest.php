<?php

use App\Models\User;
use Database\Seeders\RolePermissonSeeder;

beforeEach(function () {
    $this->seed(RolePermissonSeeder::class);
});

test('guests are redirected to the login page', function () {
    $response = $this->get(route('StudentDashboard'));
    $response->assertRedirect(route('login'));
});

test('authenticated users can visit the dashboard', function () {
    $user = User::factory()->student()->create();
    $this->actingAs($user);

    $response = $this->get(route('StudentDashboard'));
    $response->assertOk();
});
