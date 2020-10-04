$(document).ready(function(){


show();

$('.copy').on('click', copyToClipboard);

  function show() {
    const required = "http://127.0.0.1:5400";
    let location = window.location + "";
    let firstPart = location.substring(0, 21);
  
    if(firstPart === required) {
      $('.hidden').css('display', 'block');
    }
  }

  function copyToClipboard() {
    let temp = $("<input>");
    $("body").append(temp);
    temp.val($(this).text()).select();
    document.execCommand("copy");
    temp.remove();
  }
})