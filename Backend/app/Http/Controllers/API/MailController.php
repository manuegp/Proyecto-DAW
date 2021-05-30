<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Mail\TestMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class MailController extends Controller
{
    public function sendEmail() {

        $details = [
            'title' => 'Mail from Surfside Media',
            'body' => 'This is for testing mail using gmail'
        ];

        Mail::to("manuel.mgp.2001@gmail.com")->send(new TestMail($details));
        return "Email Sent";

    }
}
