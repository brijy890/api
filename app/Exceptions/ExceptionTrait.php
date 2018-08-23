<?php

namespace App\Exceptions;

use Illuminate\Database\Eloquent\ModelNotFoundException as ModelNotFoundException;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException as NotFoundHttpException;

trait ExceptionTrait
{
    public function apiException($request, $e)
    {
        if ($e instanceof ModelNotFoundException) {
            return response()->json([
                "error" => "Product Model Not Found",
            ], Response::HTTP_NOT_FOUND);
        }
        if ($e instanceof NotFoundHttpException) {
            return response()->json([
                "error" => "Incorrect Route",
            ], Response::HTTP_NOT_FOUND);
        }
    }
}
