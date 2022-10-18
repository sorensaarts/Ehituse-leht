$(document).ready(function () {
  var small={width: "200px",height: "116px"};
  var large={width: "800px",height: "532px"};
  var count=1; 
  $("#imgtab",).css(small).on('click',function () { 
      $(this).animate((count==1)?large:small);
      count = 1-count;
  });
});

$(document).ready(function () {
  var small={width: "200px",height: "116px"};
  var large={width: "800px",height: "532px"};
  var count=1; 
  $("#imgtab2").css(small).on('click',function () { 
      $(this).animate((count==1)?large:small);
      count = 1-count;
  });
});

$(document).ready(function () {
  var small={width: "200px",height: "116px"};
  var large={width: "800px",height: "532px"};
  var count=1; 
  $("#imgtab3").css(small).on('click',function () { 
      $(this).animate((count==1)?large:small);
      count = 1-count;
  });
});

$(document).ready(function () {
  var small={width: "200px",height: "116px"};
  var large={width: "800px",height: "532px"};
  var count=1; 
  $("#imgtab4").css(small).on('click',function () { 
      $(this).animate((count==1)?large:small);
      count = 1-count;
  });
});


$(document).ready(function () {
  var small={width: "200px",height: "116px"};
  var large={width: "800px",height: "532px"};
  var count=1; 
  $("#imgtab5").css(small).on('click',function () { 
      $(this).animate((count==1)?large:small);
      count = 1-count;
  });
});


$(document).ready(function () {
  var small={width: "200px",height: "116px"};
  var large={width: "800px",height: "532px"};
  var count=1; 
  $("#imgtab6").css(small).on('click',function () { 
      $(this).animate((count==1)?large:small);
      count = 1-count;
  });
});

var slideIndex = 0;
carousel();

