<?php

namespace App\Actions\Fortify;

use App\Concerns\PasswordValidationRules;
use App\Concerns\ProfileValidationRules;
use App\Models\Student;
use App\Models\User;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Laravel\Fortify\Contracts\CreatesNewUsers;
use Throwable;

class CreateNewUser implements CreatesNewUsers
{
    use PasswordValidationRules, ProfileValidationRules;

    /**
     * Validate and create a newly registered user.
     *
     * @param  array<string, string>  $input
     *
     * @throws Throwable
     */
    public function create(array $input): User
    {
        Validator::make($input, [
            ...$this->profileRules(),
            'password' => $this->passwordRegistrationRules(),
        ])->validate();

        return DB::transaction(function () use ($input) {
            // 1. Create the User
            $user = User::create([
                'first_name' => $input['first_name'],
                'middle_name' => $input['middle_name'] ?? null,
                'last_name' => $input['last_name'],
                'username' => $input['username'],
                'email' => $input['email'],
                'password' => Hash::make($input['password']),
            ]);

            $user->assignRole('student');

            // 2. Create the Student record linked to the user
            Student::create([
                'user_id' => $user->id,
                'student_number' => $input['username'], // since username is the student number
                'first_name' => $input['first_name'],
                'middle_name' => $input['middle_name'] ?? null,
                'last_name' => $input['last_name'],
                'phone' => $input['contact_number'],
                'section' => $input['section'],
                'specialization' => $input['specialization'],
                'is_submit' => false,
                'is_placed' => false,
                'is_active' => true,
            ]);

            return $user;
        });
    }
}
