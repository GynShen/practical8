@extends('layouts.auth')
@section('content')
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Dashboard</div>
                    <div class="card-body">
                        You must be the priviledged administrator of this site!
                    </div>
                    <button class="btn btn-primary" onclick="window.location.href='{{ route('logout') }}'">Logout</button>
                </div>
            </div>
        </div>
    </div>
@endsection
