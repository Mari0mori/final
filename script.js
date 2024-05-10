$(document).ready(function() {
    $('#submit-comment').click(function() {
        var displayName = $('#display-name').val();
        var commentText = $('#comment').val();
        
        if (displayName && commentText) {
            var commentHTML = '<div class="comment"><p><strong>' + displayName + ':</strong> ' + commentText + '</p><button class="edit-comment">Edit</button><button class="delete-comment">Delete</button></div>';
            $('#comment-list').prepend(commentHTML);
            $('#display-name').val('');
            $('#comment').val('');
        } else {
            alert('Please enter your display name and comment.');
        }


    });
    $(document).on('click', '.delete-comment', function() {
        $(this).parent('.comment').remove();
    });

    $(document).on('click', '.edit-comment', function() {
        var commentText = $(this).siblings('p').text().trim();
        var editedComment = prompt('Edit your comment:', commentText);
        if (editedComment !== null) {
            $(this).siblings('p').text(editedComment);

        }
    });
});
