<?php

namespace Database\Seeders;

use App\Models\Section;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class SectionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $sections = [
            '4A-G1', '4A-G2',
            '4B-G1', '4B-G2',
            '4C-G1', '4C-G2',
            '4E-G1', '4E-G2',
        ];

        foreach ($sections as $sectionName) {
            Section::create([
                'section_name' => $sectionName,
                'status' => 'active',
            ]);
        }
    }
}
