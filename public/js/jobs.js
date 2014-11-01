var createJobOnSubmit = function() {
  $('.jobs').on('submit', 'form[name="new_job"]', function(evt) {
    evt.preventDefault();

    var $newJobForm = $(this);
    var newJobFormData = $(this).serialize();

    $.post("/jobs", newJobFormData, function(jobHTML) {
      $newJobForm.parent('li').before(jobHTML);

      $newJobForm.get(0).reset();
    });
  });
};

var showEditJobFormOnClick = function() {
  $('.jobs').on('click', '.js_edit_job', function(evt) {
    evt.preventDefault();

    var $jobElem = $(this).parent('.job');
    var $editJobForm = $jobElem.siblings('form[name="edit_job"]');

    $jobElem.addClass('hidden');
    $editJobForm.removeClass('hidden');
  });
};

var updateJobOnSubmit = function() {
  $('.jobs').on('submit', 'form[name="edit_job"]', function(evt) {
    evt.preventDefault();

    var $editJobForm = $(this);
    var editJobFormData = $editJobForm.serialize();

    // The job item to update is the the element of class
    // 'job' in the same containing element (in this case, <li>)
    var $jobElem = $editJobForm.siblings('.job');

    // Send async PUT request to /jobs/edit
    $.ajax({
      url: '/jobs/edit',
      type: 'PUT',
      data: editJobFormData
    }).done(function(responseData) {
      // This function will execute when the response comes
      // back from the server
      //
      // We expect to receive the updated job HTML
      // (as a <div> element with job info inside)
      var newJobHTML = responseData;

      $jobElem.removeClass('hidden');
      $editJobForm.addClass('hidden');

      $jobElem.replaceWith(newJobHTML);
    });
  });
};

var deleteJobOnSubmit = function() {
  $('.jobs').on('submit', 'form[name="delete_job"]', function(evt) {
    evt.preventDefault();

    var $deleteJobForm = $(this);
    var deleteJobFormData = $deleteJobForm.serialize();

    // Grab the containing <li> element so that we can remove
    // it when the delete request completes
    var $jobContainerElem = $(this).closest('li');

    // Sending a DELETE request requires using the jQuery
    // .ajax() function and configuring the url, type,
    // data, and complete options
    $.ajax({
      url: '/jobs',
      type: 'DELETE',
      data: deleteJobFormData
    }).done(function() {
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
