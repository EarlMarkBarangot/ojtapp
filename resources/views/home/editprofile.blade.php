
            <div class="container">
            <div class="col-md-10 col-md-offset-1">
                <h1>My Profile</h1>
                <div class="container-fluid">
                    <form enctype="multipart/form-data" action="/profile" method="POST">
                        <div class="row">
                            <div class="container">
                                <img src="/uploads/avatar/{{ Auth::user()->avatar }}">
                            </div>
                            <div class="container">
                                Name<input type="text"  class="form-control" id="prof-edit"  name="name" value="{{ Auth::user()-> name }}"><br>
                                Nickname<input type="text"  class="form-control" id="prof-edit"  name="nickname" value="{{ Auth::user()-> nickname }}">
                            </div>
                        </div>
                        <input type="hidden" name="_token" value="{{ csrf_token() }}">
                        <input type="submit" class="btn btn-primary">
                    </form>

                </div>
            </div>
        </div>

    <br>