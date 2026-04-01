@extends('layouts.auth')
@section('content')
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                @foreach ($posts as $post)
                    @can('view', $post)
                        <div class="card mb-3">
                            <div class="card-header">{{ $post->title }}</div>
                            <div class="card-body">
                                {{ $post->content }}
                                @can('update', $post)
                                    <a href="/posts/edit/{{ $post->id }}" class="btn btn-primary">Edit</a>
                                @endcan
                                @can('delete', $post)
                                    <a href="/posts/destroy/{{ $post->id }}" class="btn btn-danger">Delete</a>
                                @endcan
                            </div>
                        </div>
                    @endcan
                @endforeach
            </div>
        </div>
    </div>
@endsection
