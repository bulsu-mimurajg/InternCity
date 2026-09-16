<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        $this->call(SectionSeeder::class);
        $this->call(RolePermissonSeeder::class);

        User::factory()->admin()->create([
            'username' => 'faye',
            'email' => 'faye@example.com',
        ]);

        User::factory()->hte()->create([
            'username' => 'maria',
            'email' => 'maria@example.com',
        ]);

        User::factory()->adviser()->create([
            'username' => 'emman',
            'email' => 'emman@example.com',
        ]);

        $this->call(StudentSeeder::class);
    }
}
