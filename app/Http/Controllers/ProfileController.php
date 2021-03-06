<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Input;
use App\Http\Requests;
use Image;

class ProfileController extends Controller
{

    public function __construct(){
        $this->middleware('auth');
    }

    public function getCurrent(){
        $user = Auth::user();
        $img = '/uploads/avatar/' . $user->avatar;
        return ['nickname' => $user->nickname, 'name' => $user->name, 'avatar' => $img];
    }

    public function edit(Request $request){

        $user = Auth::user();

        $user->name = Input::get('name');
        $user->nickname = Input::get('nickname');
        $user->avatar = Auth::user()->avatar;

        if(empty(Input::get('name'))){
            $user->name = Auth::user()->name;
        }

        if(empty(Input::get('nickname'))){
            $user->nickname = Auth::user()->nickname;
        }

        if($request->hasFile('avatar')){
            $avatar = Input::file('avatar');
            $filename = time() . '.' . $avatar->getClientOriginalExtension();
            Image::make($avatar)->resize(300,300)->save( public_path('/uploads/avatar/' . $filename));
            $user->avatar = $filename;
        }
        $imgSave = 'uploads/avatar/' . $user->avatar;
        $user->save();

        return ['msg' => 'Success', 'nick' => Input::get('nickname'), 'name' => Input::get('name'), 'avatar' => $imgSave];
    }
}