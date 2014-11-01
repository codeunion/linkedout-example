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
  $('.js_edit_job').click(function(evt) {
    evt.preventDefault();

    var $jobListItem = $(this).parent('li');
    var $jobEditForm = $jobListItem.next('li');

    $jobListItem.addClass('hidden');
    $jobEditForm.removeClass('hidden');
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

  deleteJobOnSubmit();
});
