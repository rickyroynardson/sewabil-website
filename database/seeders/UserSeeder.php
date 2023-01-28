<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

use function PHPSTORM_META\map;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'name' => 'Akun Admin',
            'email' => 'akunadmin@mail.com',
            'email_verified_at' => now(),
            'password' => Hash::make('akunadmin'),
            'is_admin' => true
        ]);

        User::create([
            'name' => 'Akun User',
            'email' => 'akunuser@mail.com',
            'email_verified_at' => now(),
            'password' => Hash::make('akunuser'),
        ]);
    }
}
