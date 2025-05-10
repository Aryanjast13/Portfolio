// enum StatusCodes {
//     200 - OK
// 201 - Created  # Response to successful POST or PUT
// 302 - Found # Temporary redirect such as to /login
// 303 - See Other # Redirect back to page after successful login
// 304 - Not Modified
// 400 - Bad Request
// 401 - Unauthorized  # Not logged in
// 403 - Forbidden  # Accessing another user's resource
// 404 - Not Found
// 500 - Internal Server Error
// }

export enum StatusCodes {
    OK = 200,
    Created = 201,
    BadRequest = 400,
    Unauthorized = 401,
    Forbidden = 403,
    NotFound = 404,
    InternalServerError=500
}