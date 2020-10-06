$(document).ready(function(){






show();

//

$('.copy').on('click', copyToClipboard);

  function show() {
    const required = "http://127.0.0.1:5400";
    let location = window.location + "";
    let firstPart = location.substring(0, 21);
  
    if(firstPart === required) {
      const content = `<h4>Show:</h4>
      <p class="r">986f1dcf922e4e8cabb75a3db8811884</p>`
      $('.h').append(content);
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