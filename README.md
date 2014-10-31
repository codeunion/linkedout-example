# LinkedOut

A one-person [LinkedIn](https://www.linkedin.com/). That being said, you will be able to build more interesting, multi-user features after you've built an MVP.

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

_Note: there are other, smaller [releases][gh-help-releases] within this repository. The releases listed here correspond to significant changes to the application's features. Each of the releases here is represented by a corresponding [pull request][gh-help-pull-requests]._

### v[0.4.0]

[View pull request](../../pull/2).
[Download release](https://github.com/codeunion/linkedout-example/archive/v0.4.0.zip).

- [X] A user can view a résumé show page
- [X] Résumé show page displays user profile info, skills, and jobs
- [X] User can edit user profile
- [X] User can edit jobs
- [X] User can edit skills

### v[0.6.0]

[View pull request](../../pull/3).
[Download release](https://github.com/codeunion/linkedout-example/archive/v0.6.0.zip).

- [X] Site looks not-so-terrible
- [X] HTML is modularized with sections and partials

### v[0.8.0]

[View pull request](../../pull/4).
[Download release](https://github.com/codeunion/linkedout-example/archive/v0.8.0.zip).

- [X] User can add skills directly from the résumé show page
- [X] User can add jobs directly from the résumé show page

### v[1.0.0]

[View pull request](../../pull/5).
[Download release](https://github.com/codeunion/linkedout-example/archive/v1.0.0.zip).

- [X] A user may add skills directly on their résumé show page
- [X] Adding skills does not require a page refresh (i.e. must be AJAX)
- [X] Added skills immediately show on the page in the appropriate spot
- [X] A user may add jobs directly to their résumé show page, including the job title, description, and company name
- [X] Adding jobs does not require a page refresh (i.e. must be AJAX)
- [X] Added jobs immediately show on the page in the appropriate spot

This is the first release with JavaScript and jQuery included. As a reference, here are some of the resources used to accomplish the features in this release:

- Sending POST requests with AJAX: [API documentation for the `jQuery.post()` function][jquery-api-post] (make sure to read some of the examples)
- Adding content to the DOM with jQuery: [Documentation for jQuery's `.append()` function][jquery-api-append]
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

[sqlite3-install]:https://github.com/codeunion/fundamentals-of-web-development/wiki/Resources-and-Tools#sqlite
[jquery-api-post]:http://api.jquery.com/jquery.post/
[jquery-api-append]:http://api.jquery.com/append/
[jquery-api-serialize]:http://api.jquery.com/serialize/
[gh-help-releases]:https://help.github.com/articles/about-releases/
[gh-help-pull-requests]:https://help.github.com/articles/using-pull-requests/
