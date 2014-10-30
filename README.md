# LinkedOut

You already know what a [Content Management System](http://en.wikipedia.org/wiki/Content_management_system) is. In this project we're going to build our own (very small) Content Management System. The content to be managed? Your own résumé.

Think of it like we're going to build a one-person [LinkedIn](https://www.linkedin.com/). That being said, you will be able to build more interesting, multi-user features after you've built an MVP.

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

```sh
├── .env.example # a sample .env file for setting environment variables
├── .gitignore # list of files to be ignored by git
├── CODE_OF_CONDUCT.md # standards of relating between contributors
├── CONTRIBUTING.md # how to contribute
├── Gemfile # list of gems that this project uses
├── Gemfile.lock # a "locked" version of the Gemfile, which includes version numbers for all the gems
├── LICENSE.md # license for project material
├── README.md # you are here. ;D
├── Rakefile # a place to store one-off commands (like seeding the database)
├── config # put configuration scripts in this folder
│   └── dotenv.rb # like this one! for the dotenv gem
├── config.ru # this tells our web server how to run
├── linkedout.rb # the most important file! this is the heart of our Sinatra web app, where we define how to respond to requests from across the web
├── models.rb # where we define the data models for the app, using an ORM like DataMapper
├── public # a folder to hold "static assets" like CSS files, images, and JavaScript files
│   ├── main.css # our custom CSS
│   └── normalize.css # a commonly used CSS library to aid in cross-browser compatibility
└── views # a folder to hold the HTML templates for our pages
    ├── layout.erb # this is the main template for our site
    └── resumes # a sub-folder, to hold specific templates related to résumés
        └── show.erb # the template for the résumé show page
```

## Releases

We've inherited a project that has already been worked on. It is up to release 0.8.0, which contains the following features:

- A user can view a résumé show page
- A user can edit the contents of a résumé via separate edit pages
- A user can add **skills** and **jobs** via forms on the résumé show page

Now it is up to us to add extra features to this project. Our goal for release 1.0.0 is to provide users with a one-page application where they can view their own résumé and add jobs and skills as needed.

The _releases after 1.0.0 are for more advanced work_. If you are up for the challenge, go for it!

### Release 0.9.0: Create new skills asynchronously

Requirements:

- [ ] A user may add skills directly on their résumé show page
- [ ] Adding skills does not require a page refresh (i.e. must be AJAX)
- [ ] Added skills immediately show on the page in the appropriate spot

Resources:

- Anatomy of a jQuery POST request [TODO: Needs writeup in wiki]
- Sending POST requests with AJAX: [API documentation for the `jQuery.post()` function][jquery-api-post] (make sure to read some of the examples)
- Adding content to the DOM with jQuery: [Documentation for jQuery's `.append()` function][jquery-api-append]

- Using a partial as response data

### Release 1.0.0: Create jobs asynchronously

Requirements:

- [ ] A user may add jobs directly to their résumé show page, including the job _title_, _description_, and _company name_
- [ ] Adding jobs does not require a page refresh (i.e. must be AJAX)
- [ ] Added jobs immediately show on the page in the appropriate spot

Resources:

- Sending form data in an AJAX request [TODO: Needs writeup in wiki]
- Reading and serializing data from a form in jQuery: [jQuery's `.serialize()` function][jquery-api-serialize]

### Release 1.1.0: Improve the CSS

_Everything from this release forward is optional: continue at your own risk/pleasure._

This website is not so good-looking. Make it more good-looking with CSS. You'll need to know a little bit about the [fundamentals of User Interface design](http://blog.teamtreehouse.com/10-user-interface-design-fundamentals).

### Release 1.2.0: Edit and delete skills and jobs

Requirements:

- [ ] A user can edit skills from the résumé show page
- [ ] A user can edit jobs from the résumé show page
- [ ] A user can delete skills from the résumé show page
- [ ] A user can delete jobs from the résumé show page
- [ ] All editing and deleting of skills and jobs does not require a page refresh

### Release 1.3.0: Support multiple users

Requirements:

- [ ] Multiple users can create their own résumés
- [ ] Resumes can be viewed at [friendly URLs](http://en.wikipedia.org/wiki/Semantic_URL), e.g. `/resumes/jane-smith`

### Release 1.4.0: Filter by skill

Requirements:

- [ ] A user can search for other users by a specific skill
- [ ] Clicking on a skill links to a page listing all users with that skill at a URL like `/skills/web-development`

## Finishing Up

## Learning Goals

The purpose of this project is develop a richer understanding of how web applications can manipulate data using asynchronous requests. Through the process of building a site that allows users to read data from and write data to a server, we will learn about synchronous vs. asynchronous requests and use JavaScript to improve the UX (User Experience) of a site through improved client-side behavior.

By the end of the project, we will:

- Be able to use jQuery to send asynchronous requests, listen for a response, and update the DOM
- Be able to use request data to create new records in a database
- Understand how JavaScript can be used to manipulate the DOM

[sqlite3-install]:https://github.com/codeunion/fundamentals-of-web-development/wiki/Resources-and-Tools#sqlite
[jquery-api-post]:http://api.jquery.com/jquery.post/
[jquery-api-append]:http://api.jquery.com/append/
[jquery-api-serialize]:http://api.jquery.com/serialize/
