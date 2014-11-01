var createNewJobsOnSubmit = function() {
  $('.jobs').on('submit', 'form[name="new_job"]',function(evt) {
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

    var $jobElem = $(this).parent('.job');
    var $jobEditForm = $jobElem.siblings('form[name="edit_job"]');

    $jobElem.addClass('hidden');
    $jobEditForm.removeClass('hidden');
  });
};

var updateJobOnSubmit = function() {
  $('.jobs').on('submit', 'form[name="edit_job"]', function(evt) {
    evt.preventDefault();

    var jobFormData = $(this).serialize();

    var $jobEditForm = $(this);
    // The job item to update is the the element of class
    // 'job' in the same containing element (in this case, <li>)
    var $jobListItem = $jobEditForm.siblings('.job');

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
      // (as a <div> element with job info inside)
      var newJobHTML = responseData;

      $jobListItem.removeClass('hidden');
      $jobEditForm.addClass('hidden');

      $jobListItem.replaceWith(newJobHTML);
    });
  });
};

var deleteJobOnSubmit = function() {
  $('.jobs').on('submit', 'form[name="delete_job"]', function(evt) {
    evt.preventDefault();

    var jobFormData = $(this).serialize();

    // Grab the containing <li> element so that we can remove
    // it when the delete request completes
    var $parentLiElement = $(this).closest('li');

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
