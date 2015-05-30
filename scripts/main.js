(function(){
  'use strict';

  $(document).ready(function(){
    $.ajax({
      url: "https://api.github.com/users/skrich-x",
       headers: {
        "Authorization": "token " + GITHUB_TOKEN
       }

    }).then(function(user) {
      $('.user').prepend(JST['user'](user));
      console.log(user);
  });

    $.ajax({
    url: "https://api.github.com/users/skrich-x/repos",
     headers: {
    "Authorization": "token " + GITHUB_TOKEN

}
  }).then(function(repos) {
    $('.repos').append(JST['repos'](repos));
    console.log(repos);
  });
});

  // $(document).ready(function(){
  //  var code = window.location.href.match(/\?code=(.*)/)[1];
  //   if(code) {
  //     $.getJSON('http://localhost:9999/authenticate/'+code, function(data) {
  //       console.log('data is',data)
  //     });
  //   }
  // });
  //
  // $('button').on('click', function(e){
  //   window.location.replace('https://github.com/login/oauth/authorize?client_id=5b1c415eb446deb20032');
//  });
})();
