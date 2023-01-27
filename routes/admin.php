<?php

use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\UserController;
use Illuminate\Support\Facades\Route;

Route::prefix('admin')->as('admin.')->middleware(['auth', 'admin'])->group(function () {
  Route::controller(DashboardController::class)->group(function () {
    Route::get('/dashboard', 'index')->name('dashboard');
  });

  Route::controller(UserController::class)->group(function () {
    Route::get('/user', 'index')->name('user');
  });
});
