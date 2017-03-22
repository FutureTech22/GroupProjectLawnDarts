$.ajax({url: "https://randomuser.me/api/?results=3",
  success: function(response){
      response.results.forEach(function(pic){
        $('#user').append(`
        <div class="col-md-4 people">
          <img src="${pic.picture.large}"
        </div>
      `);
    })
  }})
$.ajax({url: "https://json-data.herokuapp.com/darts/testimonials",
  success: function(response){
    response.results.forEach(function(test){
      $('#testGoesHere').append(`
        <div class="col-md-4">
          <h5>${test.name}</h5
          <p>${test.review}</p>
        </div>
      `);
    })
  }})
  $.ajax({url: "https://json-data.herokuapp.com/darts/companies",
    success: function(response){
      response.results.forEach(function(comp){
        $('#companiesHere').append(`
          <div class="col-md-3">
           <img src="${comp.image_url}">
          </div
        `);
      })
    }})
