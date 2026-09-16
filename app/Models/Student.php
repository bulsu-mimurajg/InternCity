<?php

namespace App\Models;

use Database\Factories\StudentFactory;
use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

#[Fillable('user_id', 'student_number', 'first_name', 'middle_name', 'last_name', 'phone', 'section', 'specialization', 'is_submit', 'is_placed', 'is_active')]
class Student extends Model
{
    /** @use HasFactory<StudentFactory> */
    use HasFactory;
}
