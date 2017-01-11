Code Challenge!

Create an express application that serves up a static index.html page.

Research and use jQuery's $.get, $.post, and $.ajax for the following:

GET

When a user visits '/'

Show a button with the text "Get User"
When a user clicks "Get User"

Perform an AJAX GET request to '/user'
When the server receives the GET request to '/user'

Return a JSON response with the key "data"

If successful

{
  "data": {
    "name": "Toby"
  }
}
When the Client receives the JSON response

Append the name to DOM.
POST

When a user visits '/numbers.html'

Serve a static page
Provide an input field to enter text.
Provide a button with a click event handler.
When a user enters a series of numbers separated by commas and clicks the button.

Perform an AJAX POST request to '/calc'
Inlude the comma separated numbers in the body of the request
When the server receives the POST request to '/calc'

Read the body of the request
Sum the numbers
Return a JSON response with a "data" or "error" key

If successful

{
  "data": {
    "answer": 6
  }
}
If unsuccessful - the request doesn't include more than one number

{
  "error": {
    "code": 404,
    "message": "Please include a comma separated list of numbers"
  }
}
When the Client receives the JSON response

Append the answer to DOM.
