function watchForm() {
  
    $('.form-wrapper').submit(event => {
    event.preventDefault();
    let stateCode = $('.App-title').text();
  })
}

function StartApp() {
  watchForm();
}


$(StartApp);
