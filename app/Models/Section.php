<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

#[Fillable(['section_id', 'section_name'])]
class Section extends Model
{
    /**
     * Get the valid status values
     */
    public static function getValidStatuses(): array
    {
        return ['active', 'archived'];
    }

    /**
     * Get the students in this section.
     */
    public function students(): HasMany
    {
        return $this->hasMany(Student::class, 'section_id');
    }
}
