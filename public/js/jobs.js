// A utility function to log information to the console
var log = function(message) {
  var timestamp = (new Date()).toTimeString();
  console.log('[' + timestamp + ']  ' + message);
};

var createJobOnSubmit = function() {
  $('.jobs').on('submit', 'form[name="new_job"]', function(evt) {
    log("New job form submitted");

    evt.preventDefault();

    var $newJobForm = $(this);
    var newJobFormData = $(this).serialize();

    log("Sending POST request to /jobs");

    $.post("/jobs", newJobFormData, function(jobHTML) {
      log("Received response from POST request to /jobs");

      log("Adding new job element to list");
      $newJobForm.parent('li').before(jobHTML);

      $newJobForm.get(0).reset();
    });
  });
};

var showEditJobFormOnClick = function() {
  $('.jobs').on('click', '.js_edit_job', function(evt) {
    log("Show edit job form link clicked");

    evt.preventDefault();

    var $jobElem = $(this).parent('.job');
    var $editJobForm = $jobElem.siblings('form[name="edit_job"]');

    log("Hiding job element and showing job form");
    $jobElem.addClass('hidden');
    $editJobForm.removeClass('hidden');
  });
};

var updateJobOnSubmit = function() {
  $('.jobs').on('submit', 'form[name="edit_job"]', function(evt) {
    log("Edit job form submitted");

    evt.preventDefault();

    var $editJobForm = $(this);
    var editJobFormData = $editJobForm.serialize();

    // The job item to update is the the element of class
    // 'job' in the same containing element (in this case, <li>)
    var $jobElem = $editJobForm.siblings('.job');

    log("Sending PUT request to /jobs/edit");

    // Send async PUT request to /jobs/edit
    $.ajax({
      url: '/jobs/edit',
      type: 'PUT',
      data: editJobFormData
    }).done(function(responseData) {
      log("Received response from PUT request to /jobs/edit");
      // This function will execute when the response comes
      // back from the server
      //
      // We expect to receive the updated job HTML
      // (as a <div> element with job info inside)
      var newJobHTML = responseData;

      log("Hiding job form and showing job element");
      $jobElem.removeClass('hidden');
      $editJobForm.addClass('hidden');

      log("Replacing old job info with updated info");
      $jobElem.replaceWith(newJobHTML);
    });
  });
};

var deleteJobOnSubmit = function() {
  $('.jobs').on('submit', 'form[name="delete_job"]', function(evt) {
    log("Edit job form submitted");

    evt.preventDefault();

    var $deleteJobForm = $(this);
    var deleteJobFormData = $deleteJobForm.serialize();

    // Grab the containing <li> element so that we can remove
    // it when the delete request completes
    var $jobContainerElem = $(this).closest('li');

    log("Sending DELETE request to /jobs");

    // Sending a DELETE request requires using the jQuery
    // .ajax() function and configuring the url, type,
    // data, and complete options
    $.ajax({
      url: '/jobs',
      type: 'DELETE',
      data: deleteJobFormData
    }).done(function() {
      log("Received response from DELETE request to /jobs");

      log("Removing deleted job element");
      $jobContainerElem.remove();
    });
  });
};

$(document).ready(function() {
  createJobOnSubmit();

  showEditJobFormOnClick();
  updateJobOnSubmit();

  deleteJobOnSubmit();
});
