var createNewJobsOnSubmit = function() {
  var $newJobForm = getNewJobForm();

  $newJobForm.submit(function (evt) {
    evt.preventDefault();

    var jobFormData = $(this).serialize();

    $.post("/jobs", jobFormData, insertNewJobIntoDOM);
  });
};

var getNewJobForm = function() {
  return $('form[name="new_job"]');
};

var insertNewJobIntoDOM = function(newJobHTML) {
  var $newJobForm = getNewJobForm();

  $newJobForm.parent('li').before(newJobHTML);

  $newJobForm.get(0).reset();
};

var showJobEditFormOnClick = function() {
  $('.jobs').on('click', '.js_edit_job', function(evt) {
    evt.preventDefault();

    var $jobListItem = $(this).parent('li');
    var $jobEditForm = $jobListItem.next('li');

    $jobListItem.addClass('hidden');
    $jobEditForm.removeClass('hidden');
  });
};

var updateJobOnSubmit = function() {
  var $editJobForm = $('form[name="edit_job"]');

  $editJobForm.submit(function(evt) {
    evt.preventDefault();

    var jobFormData = $(this).serialize();

    var $jobEditForm = $(this).parent('li');
    // The job item to update is the previous <li> element
    // before the current <li> containing the form
    var $jobListItem = $jobEditForm.prev('li');

    // Send async PUT request to /jobs/edit
    $.ajax({
      url: '/jobs/edit',
      type: 'PUT',
      data: jobFormData
    }).done(function(responseData) {
      // This function will execute when the response comes
      // back from the server
      //
      // We expect to receive the updated job HTML
      // (as a <li> element with job info inside)
      var newJobHTML = responseData;

      $jobListItem.removeClass('hidden');
      $jobEditForm.addClass('hidden');

      $jobListItem.replaceWith(newJobHTML);
    });
  });
};

var deleteJobOnSubmit = function() {
  var $deleteJobForm = $('form[name="delete_job"]');

  $deleteJobForm.submit(function (evt) {
    evt.preventDefault();

    var jobFormData = $(this).serialize();

    // Grab the parent <li> element so that we can remove
    // it when the delete request completes
    var $parentLiElement = $(this).parent('li');

    // Sending a DELETE request requires using the jQuery
    // .ajax() function and configuring the url, type,
    // data, and complete options
    $.ajax({
      url: '/jobs',
      type: 'DELETE',
      data: jobFormData,
      complete: function() { $parentLiElement.remove(); }
    });
  });
};

$(document).ready(function() {
  createNewJobsOnSubmit();

  showJobEditFormOnClick();
  updateJobOnSubmit();

  deleteJobOnSubmit();
});
