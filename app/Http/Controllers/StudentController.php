<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;

class StudentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        return Inertia::render('student/dashboard', [
            'foo' => 'bar',
        ]);
    }
}
