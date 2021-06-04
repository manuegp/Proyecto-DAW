<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class TestMail extends Mailable
{
    use Queueable, SerializesModels;

    public $details;
    public $prueba;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($details, $prueba)
    {
        $this->details = $details;
        $this->prueba = $prueba;

    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->from('a@gmail.com')->subject('Test Mail from Surfside Media')->view('emails.TestMail');
    }
}
