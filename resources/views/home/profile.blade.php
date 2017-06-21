        <div class="container">
            <div class="col-md-10 col-md-offset-1">
                <h1>My Profile</h1>
                <div class="container-fluid">
                        <div class="row">
                            <div class="container">
                                <img src="/uploads/avatar/{{ Auth::user()->avatar }}">
                            </div>
                            <div class="container">
                                Name<input type="text"  class="form-control" id="prof-edit"  name="name" disabled="" value="{{ Auth::user()-> name }}"><br>
                                Nickname<input type="text"  class="form-control" id="prof-edit"  name="nickname" disabled="" value="{{ Auth::user()-> nickname }}">
                            </div>
                        </div>
                        <input type="hidden" name="_token" value="{{ csrf_token() }}">
                        <button class="btn btn-primary" onclick="editProfile()">Edit</button>

                </div>
            </div>
        </div>

    <br>