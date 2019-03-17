var likeCount = 0;
var commentCount = 0;
var likeTxt = document.getElementById('like-txt');
var likeBtn = document.getElementById('like-btn');

var editSaveBtn = document.getElementById('edit-save-btn');

var commentBox = document.getElementById('comment-box');

show();

function show() {
    if(likeCount == 0) {
        likeTxt.innerHTML = '<kbd> Be the first one to like this! </kbd>';
        likeBtn.innerHTML = '<i class="fa fa-thumbs-up"></i> Like';
    } else if(likeCount == 1) {
        likeTxt.innerHTML = '<kbd> 1 person likes this! </kbd>';
        likeBtn.innerHTML = '<i class="fa fa-thumbs-up"></i> Liked!';
    } else {
        likeTxt.innerHTML = '<kbd> '+likeCount+' people have liked this! </kbd>';
        likeBtn.innerHTML = '<i class="fa fa-thumbs-up"></i> Liked!';
    }
    
    if(commentCount == 0) {
        var comment = document.createElement('div');
        comment.setAttribute('class','comment-blank');
        comment.innerHTML = ' ';
        commentBox.appendChild(comment);
    }
}

function Like() {
    likeCount++;
    show();
}

function doComment(comment_textarea) {
    var txt = comment_textarea.value;
    if(txt != '') {
        var comment = document.createElement('div');
        comment.setAttribute('class','comment');
        comment.setAttribute('id','comment-id='+commentCount);
        comment.innerHTML = txt;
        commentBox.insertBefore(comment, commentBox.firstChild);
        commentCount++;
        //console.log(comment);
        show();
        comment_textarea.value = '';
    } else {
        alert("The comment field cannot be left empty!");
    }
    
}

function edit() {
    var blogTitle = document.getElementById('blogTitle');
    var blogTitleNew = document.getElementById('blogTitleNew');
    var blogText = document.getElementsByClassName('blogText')[0];
    var blogBody = document.getElementById('blogBody');
    
    var title = document.createElement('textarea');
    title.setAttribute('class','blogTitleTextarea');
    title.setAttribute('id','blogTitleNew');
    title.innerHTML = blogTitleNew.innerHTML;
    
    blogTitle.removeChild(blogTitleNew);
    blogTitle.appendChild(title);
    
    var body = document.createElement('textarea');
    body.setAttribute('class','blogBodyTextarea');
    body.setAttribute('id','blogBody')
    body.innerHTML = blogBody.innerHTML;
    
    blogText.removeChild(blogBody);
    blogText.appendChild(body);
    
    editSaveBtn.innerHTML = 'Save <i class="fa fa-save"></i>';
    editSaveBtn.setAttribute('onclick','save()');
}

function save() {
    var blogTitle = document.getElementById('blogTitle');
    var blogTitleNew = document.getElementById('blogTitleNew');
    var blogText = document.getElementsByClassName('blogText')[0];
    var blogBody = document.getElementById('blogBody');
    
    var span = document.createElement('span');
    span.setAttribute('class','blogTitle');
    span.innerHTML = blogTitleNew.value;
    span.setAttribute('id','blogTitleNew');
    
    blogTitle.removeChild(blogTitleNew);
    blogTitle.appendChild(span);
    
    var p = document.createElement('p');
    p.setAttribute('id','blogBody');
    p.innerHTML = blogBody.value;
    
    blogText.removeChild(blogBody);
    blogText.appendChild(p);
    
    editSaveBtn.innerHTML = 'Edit <i class="fa fa-edit"></i>';
    editSaveBtn.setAttribute('onclick','edit()');
}