<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use App\Http\Requests;
use Image;

class ProfileController extends Controller
{

     public function __construct()
    {
        $this->middleware('auth');
    }

    /*public function profile(){
        return view("home.profile");
    }

    public function editprofile(){
        return view("home.editprofile");
    }*/

    public function update(Request $request){
        $user = Auth::user();

        $user->name = $request->input('name');
        $user->nickname = $request->input('nickname');
        $user->avatar = Auth::user()->avatar;

        if(empty($request->input('name'))){
            $user->name = Auth::user()->name;
        }

        if(empty($request->input('nickname'))){
            $user->nickname = Auth::user()->nickname;
        }

        if($request->hasFile('avatar')){
            $avatar = $request->file('avatar');
            $filename = time() . '.' . $avatar->getClientOriginalExtension();
            Image::make($avatar)->resize(300,300)->save( public_path('/uploads/avatar/' . $filename));
            $user->avatar = $filename;
        }

        $user->save();
        return view("home.home");
    }
}