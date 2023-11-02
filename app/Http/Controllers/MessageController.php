<?php

namespace App\Http\Controllers;

use App\Events\Message;
use Illuminate\Http\Request;

class MessageController extends Controller
{
    public function index(){
        return view('chat');
    }

    public function sendMessage(Request $request){
        $user_name = $request->user_name;
        $message = $request->message;

        event(new Message($user_name, $message));

        return ['success' => true];
    }
}
