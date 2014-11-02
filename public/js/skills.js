var createNewSkillsOnSubmit = function() {
  // What's this with the dollar sign in the variable?
  // It doesn't change how the variable works, it is just an
  // indicator to say "this variable contains a jQuery object"
  var $newSkillForm = getNewSkillForm();

  // Bind to the "submit" event of the new skill form
  $newSkillForm.submit(function (evt) {
    // Prevent the submit from sending an HTTP POST request
    // Instead, we'll handle the request with AJAX
    evt.preventDefault();

    // Grab the form data and serialize it as a string in
    // standard URL-encoded notation
    var skillFormData = $(this).serialize();

    // Send a POST request asynchronously to the "/skills"
    // route on the server, passing the serialized form data
    // in the request body.
    //
    // When a user submits the form to create a new skill,
    // this will send a request to the server to save this
    // skill to the database
    //
    // The insertNewSkillIntoDOM function (argument 3) will
    // be executed when the browser receives a response from
    // the server. It is passed the response body, which in
    // this case is a snippet of HTML representing the newly-
    // created skill.
    $.post("/skills", skillFormData, insertNewSkillIntoDOM);
  });
};

var getNewSkillForm = function() {
  // Select the new skill form using its name attribute
  return $('form[name="new_skill"]');
};

var insertNewSkillIntoDOM = function(newSkillHTML) {
  var $newSkillForm = getNewSkillForm();

  // Add the new skill to the list, just before the form's
  // parent 'li' element
  $newSkillForm.parent('li').before(newSkillHTML);

  // Reset the form so that new skills can be added
  $newSkillForm.get(0).reset();
};

var deleteSkillOnSubmit = function() {
  $('.skills').on('submit', 'form[name="delete_skill"]', function(evt) {
    log("Edit skill form submitted");

    evt.preventDefault();

    var $deleteSkillForm = $(this);

    // Use the destination path defined in the form's 'action'
    // attribute, i.e. `/skills/:skill_id`
    var actionPath = $deleteSkillForm.attr('action');
    var deleteSkillFormData = $deleteSkillForm.serialize();

    // Grab the containing <li> element so that we can remove
    // it when the delete request completes
    var $skillContainerElem = $(this).closest('li');

    log("Sending DELETE request to " + actionPath);

    // Sending a DELETE request requires using the jQuery
    // .ajax() function and configuring the url, type,
    // data, and complete options
    $.ajax({
      url: actionPath,
      type: 'DELETE',
      data: deleteSkillFormData
    }).done(function() {
      log("Received response from DELETE request to " + actionPath);

      log("Removing deleted skill element");
      $skillContainerElem.remove();
    });
  });
};


// Wait to execute all code until the document is ready
// (i.e. all of the DOM nodes have been loaded)
$(document).ready(function() {
  createNewSkillsOnSubmit();

  deleteSkillOnSubmit();
});
