$(document).ready(function(){


$('.copy').on('click', copyToClipboard);


  function copyToClipboard() {
    let temp = $("<input>");
    $("body").append(temp);
    temp.val($(this).text()).select();
    document.execCommand("copy");
    temp.remove();
  }
})