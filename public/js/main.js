// Wait to execute all code until the document is ready
// (i.e. all of the DOM nodes have been loaded)
$(document).ready(function() {

  // Select the new skill form using its name attribute
  var $newSkillForm = $('form[name="new_skill"]');

  // Bind to the "submit" event of the new skill form
  $newSkillForm.submit(function (evt) {

    // Prevent the submit from sending an HTTP POST request
    // Instead, we'll handle the request with AJAX
    evt.preventDefault();

    // Grab the new skill name from the form, since this is
    // the data we want to send to the server
    var newSkillName = $newSkillForm.find('input[name="skill[name]"]')
                                    .val();

    // Then put it into a JavaScript object so that we can send
    // it to the server (where it will be parsed into a Ruby hash)
    var newSkillData = { "skill_name": newSkillName };

    // Send a POST request asynchronously to the "/skills"
    // route on the server, passing the serialized form data
    // in the request body.
    //
    // When a user submits the form to create a new skill,
    // this will send a request to the server to save this
    // skill to the database
    //
    // The anonymous function (third argument passed to $.post)
    // is executed when the browser receives a response from
    // the server. It is passed the response body, which in
    // this case is a snippet of HTML representing the newly-
    // created skill.
    $.post("/skills", newSkillData, function(newSkillHTML) {

      // Add the new skill to the list, just before the form's
      // parent 'li' element
      $newSkillForm.parent('li')
                   .before(newSkillHTML);

      // Reset the form so that new skills can be added
      $newSkillForm.get(0).reset();

    });
  });
});
