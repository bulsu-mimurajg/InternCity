<?php

namespace Database\Factories;

use App\Models\Section;
use App\Models\Student;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Student>
 */
class StudentFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $user = User::factory()->student()->create();
        $specialization = ['Web and Mobile Application Development', 'Business Administration', 'Service Management'];

        return [
            'user_id' => $user->id,
            'student_number' => $this->generateStudentNumber(),
            'first_name' => $this->faker->firstName,
            'middle_name' => $this->faker->streetName,
            'last_name' => $this->faker->lastName,
            'phone' => $this->faker->phoneNumber,
            'section' => Section::inRandomOrder()->value('section_name'),
            'specialization' => $this->faker->randomElement($specialization),
            'address' => $this->faker->address,
            'is_active' => true,
            'is_submit' => false,
            'is_placed' => false,
        ];
    }

    public function defaultStudent(): static
    {
        return $this->state(function (array $attributes) {
            return [
                'user_id' => User::factory()->student()->state([
                    'username' => 'clairo',
                    'email' => 'clairo@example.com',
                ]),
            ];
        });
    }

    private function generateStudentNumber(): string
    {
        return now('Y').$this->faker->unique()->numerify('######');
    }
}
