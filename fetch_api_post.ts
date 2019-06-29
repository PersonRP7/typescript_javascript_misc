The getCookie function is from the django documentation.

function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i].trim();
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}
var csrftoken = getCookie('csrftoken');


const when_upvoted = () => {
 fetch('/url/', {
   method:'post',
   headers:{
     'X-CSRFToken':csrftoken,
     'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8',
     'X-Requested-With':'XMLHttpRequest'
   },
   // credentials: 'include' //Not necessary.
 })
}
