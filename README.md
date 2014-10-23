# Mini CMS

You already know what a [Content Management System](http://en.wikipedia.org/wiki/Content_management_system) is. In this project we're going to build our own (very small) Content Management System. The content to be managed? Your own résumé.

## Learning Goals

The purpose of this project is develop a richer understanding of how web applications can manipulate data. Through the process of building a site that allows users to read data from and write data to a server, we will explore different kinds of HTTP requests, learn about synchronous vs. asynchronous requests, and use JavaScript to improve the UX (User Experience) of a site through improved client-side behavior.

By the end of the project, we will:

- Understand the difference between a `GET` and `POST` request
- Be able to send data from a client (browser) to a server (running a Sinatra app)
- Be able to use request data to create new records in a database
- Understand how JavaScript can be used to manipulate the DOM
- Be able to use jQuery to send asynchronous requests, listen for a response, and update the DOM

## Getting Started

To get started, you'll need to

- Fork this repository to your own GitHub account
- Open a Terminal and clone this repository to your local computer
- Navigate to the repository directory on your local computer
- Open the repository directory with Sublime Text 3, Atom, or your editor of choice.

### Files In This Repository

### Code Reviews and Feedback

Remember, the absolute, tip-top, #1 priority is asking for and receiving feedback on your code. It's better to "fall short" of an iteration and ask for feedback on an incomplete version than it is to get stuck. It's better to ask for feedback on a hacked-together-but-working version than worry about whether it's "polished enough."

Indeed, even if you know your code is unpolished or incomplete, you may as well ask for feedback so that we can be working on that feedback in parallel while you're polishing or completing your code. The worst that could possibly happen is that we give you feedback you are already aware of.

## Iterations

We've inherited a project that has already been worked on. It is up to v0.5, which contains the following features:

- User can view a résumé page
- User can edit the contents of a resume page

The database can be seeded with sample data using the `rake db:seed` command.

Now it is up to us to add extra features to this project. Our goal for v1.0 is to provide users with a one-page application where they can view their own résumé and add jobs and skills as needed.

The iterations after v1.0 are for more advanced work. If you are up for the challenge, go for it!

### [v0.6] Modularize content with partials

- Partials in Sinatra
- Mental model of a composed layout w/ separate components

### [v0.7] User can add new skills

- Defining `post` endpoints
- Building a form
- Reading data from request `params`

### [v0.8] User can add new jobs

- Same concepts/tools as v0.7

### [v0.9] Create new skills asynchronously

- XMLHTTPRequest vs. HTTP request
- jQuery's `$.post` method
- Reading data from a form in jQuery
- Using a partial as response data
- Appending HTML with jQuery's `.append`

### [v1.0] Create jobs asynchronously

- Same concepts/tools as v0.9

### [v1.1] Edit and delete skills and jobs

### [v1.2] Authentication and authorization

### [v1.3] Skills can have many users

## Finishing Up
