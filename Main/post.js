var food_icon = document.getElementById("food_pic")
var where_icon = document.getElementById("where_pic")
var image_icon = document.getElementById("image_pic")
var region1 = document.getElementById("post_region1")
var region2 = document.getElementById("post_region2")


food_icon.addEventListener("mouseover", function(){
  this.src = "./material/HxH1_food_change.svg";
  region1.style.visibility = "visible";
  region1.style.opacity = "100%";
  region2.style.visibility = "hidden";
  region2.style.opacity = "0%";
})
food_icon.addEventListener("mouseout", function(){
    this.src = "./material/HxH1_food.svg";
})
where_icon.addEventListener("mouseover", function(){
  this.src = "./material/HxH2_where_change.svg";
  region1.style.visibility = "hidden";
  region1.style.opacity = "0%";
  region2.style.visibility = "visible";
  region2.style.opacity = "100%";
})
where_icon.addEventListener("mouseout", function(){
    this.src = "./material/HxH2_where.svg";
})
image_icon.addEventListener("mouseover", function(){
  this.src = "./material/HxH3_image_change.svg";
  region1.style.visibility = "hidden";
  region1.style.opacity = "0%";
  region2.style.visibility = "visible";
  region2.style.opacity = "100%";
})
image_icon.addEventListener("mouseout", function(){
    this.src = "./material/HxH3_image.svg";
})

$(document).ready(function() {
  $('#button').click((event) => {
    event.preventDefault()
    $.get('./post', {
      pic: $('#post_region2 input[name=tag6]').val(),
      name: $('#post_region1 input[name=tag1]').val(),
      food: $('#post_region1 input[name=tag2]').val(),
      whether: $('#post_region1 input[name=tag3]').val(),
      place: $('#post_region2 input[name=tag4]').val(),
      where: $('#post_region2 input[name=tag5]').val(),
      comment: $('#post_region1 input[name=introduction]').val(),
      }, (data) => {
    })
  
  })

});


