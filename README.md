# LinkedOut

You already know what a [Content Management System](http://en.wikipedia.org/wiki/Content_management_system) is. In this project we're going to build our own (very small) Content Management System. The content to be managed? Your own résumé.

Think of it like we're going to build a one-person [LinkedIn](https://www.linkedin.com/).

If you want to know more about _why_ we are doing this, you can read the [Learning Goals](#learning-goals) section at the end of this document.

## Getting Started

You'll need SQLite3 to complete this project. If you haven't installed it already, read our [guide for installing SQLite3][sqlite3-install].

Once you have SQLite3 working, you can set up your development environment with the following steps:

1. Fork and clone this repository
- Install the dependent gems: `bundle install --without production`
- Create a `.env` file from the default `cp .env.example .env`
- Seed the database with `bundle exec rake db:seed`
- Run the server and restart when files change `bundle exec rerun -c rackup`

### Files In This Repository

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

## Learning Goals

The purpose of this project is develop a richer understanding of how web applications can manipulate data using asynchronous requests. Through the process of building a site that allows users to read data from and write data to a server, we will learn about synchronous vs. asynchronous requests and use JavaScript to improve the UX (User Experience) of a site through improved client-side behavior.

By the end of the project, we will:

- Be able to use jQuery to send asynchronous requests, listen for a response, and update the DOM
- Be able to use request data to create new records in a database
- Understand how JavaScript can be used to manipulate the DOM

[sqlite3-install]:https://github.com/codeunion/fundamentals-of-web-development/wiki/Resources-and-Tools#sqlite
