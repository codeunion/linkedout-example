// A utility function to log information to the console
var log = function(message) {
  var timestamp = (new Date()).toTimeString();
  console.log('[' + timestamp + ']  ' + message);
};

var hideSchoolEditForms = function() {
  $('form[name="edit_school"]').addClass("hidden");
}

var createSchoolOnSubmit = function() {
  $('.schools').on('submit', 'form[name="new_school"]', function(evt) {
    log("New school form submitted");

    evt.preventDefault();

    var $newSchoolForm = $(this);

    // Use the destination path defined in the form's 'action'
    // attribute, i.e. `/schools`
    var actionPath = $newSchoolForm.attr('action');
    var newSchoolFormData = $(this).serialize();

    log("Sending POST request to " + actionPath);

    $.post(actionPath, newschoolFormData, function(schoolHTML) {
      log("Received response from POST request to " + actionPath);

      log("Adding new school element to list");
      $newSchoolForm.parent('li').before(schoolHTML);

      $newSchoolForm.get(0).reset();
    });
  });
};

var showEditSchoolFormOnClick = function() {
  $('.schools').on('click', '.js_edit_school', function(evt) {
    log("Show edit school form link clicked");

    evt.preventDefault();

    var $schoolElem = $(this).parent('.school');
    var $editSchoolForm = $schoolElem.siblings('form[name="edit_school"]');

    log("Hiding school element and showing school form");
    $schoolElem.addClass('hidden');
    $editSchoolForm.removeClass('hidden');
  });
};

var updateSchoolOnSubmit = function() {
  $('.schools').on('submit', 'form[name="edit_school"]', function(evt) {
    log("Edit school form submitted");

    evt.preventDefault();

    var $editSchoolForm = $(this);

    // Use the destination path defined in the form's 'action'
    // attribute, i.e. `/schools/:school_id`
    var actionPath = $editSchoolForm.attr('action');
    var editSchoolFormData = $editSchoolForm.serialize();

    // The school item to update is the the element of class
    // 'school' in the same containing element (in this case, <li>)
    var $schoolElem = $editSchoolForm.siblings('.school');

    log("Sending PUT request to " + actionPath);

    // Send async PUT request to /schools/:school_id
    $.ajax({
      url: actionPath,
      type: 'PUT',
      data: editSchoolFormData
    }).done(function(responseData) {
      log("Received response from PUT request to " + actionPath);
      // This function will execute when the response comes
      // back from the server
      //
      // We expect to receive the updated school HTML
      // (as a <div> element with school info inside)
      var newSchoolHTML = responseData;

      log("Hiding school form and showing school element");
      $schoolElem.removeClass('hidden');
      $editSchoolForm.addClass('hidden');

      log("Replacing old school info with updated info");
      $schoolElem.replaceWith(newSchoolHTML);
    });
  });
};

var deleteSchoolOnSubmit = function() {
  $('.schools').on('submit', 'form[name="delete_school"]', function(evt) {
    log("Edit school form submitted");

    evt.preventDefault();

    var $deleteEditForm = $(this);

    // Use the destination path defined in the form's 'action'
    // attribute, i.e. `/schools/:school_id`
    var actionPath = $deleteSchoolForm.attr('action');
    var deleteSchoolFormData = $deleteSchoolForm.serialize();

    // Grab the containing <li> element so that we can remove
    // it when the delete request completes
    var $schoolContainerElem = $(this).closest('li');

    log("Sending DELETE request to " + actionPath);

    // Sending a DELETE request requires using the jQuery
    // .ajax() function and configuring the url, type,
    // data, and complete options
    $.ajax({
      url: actionPath,
      type: 'DELETE',
      data: deleteSchoolFormData
    }).done(function() {
      log("Received response from DELETE request to " + actionPath);

      log("Removing deleted school element");
      $schoolContainerElem.remove();
    });
  });
};

$(document).ready(function() {
  hideSchoolEditForms();

  createSchoolOnSubmit();

  showEditSchoolFormOnClick();
  updateSchoolOnSubmit();

  deleteSchoolOnSubmit();
});
