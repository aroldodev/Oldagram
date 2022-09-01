/* Creating an array of objects. */
let posts = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "images/avatar-vangogh.jpg",
    post: "images/post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: 21,
    doneLike: false,
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/avatar-courbet.jpg",
    post: "images/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
    doneLike: false,
  },
  {
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "images/avatar-ducreux.jpg",
    post: "images/post-ducreux.jpg",
    comment:
      "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 152,
    doneLike: false,
  },
];

/* Creating a variable called card_container and assigning it to the element with the id of
card-container. It is also creating a variable called renderedPosts and assigning it to an empty
string. */
let card_container = document.getElementById("card-container");
let renderedPosts = "";

/**
 * It takes the index of the post and renders the post in the HTML
 * @param index - the index of the post in the posts array
 */
function publishPost(index) {
  renderedPosts += `<section class="card">
  <div class="card-user">
    <img id="avatar" class="card-user-avatar" src=${posts[index].avatar} >
    <div class="card-user-data">
      <h3 id="name" class="enfasis">${posts[index].name}</h3>
      <p id="location" class="card-user-data-location">${posts[index].location}</p>
    </div>
  </div>

  <img id="post${index}" class="card-post" src=${posts[index].post}>
  
  <div class="card-details">
    <div class="card-details-icons">
      <img id="like-icon${index}" class="icon" src="images/icon-heart.png" alt="">
      <img class="icon" src="images/icon-comment.png" alt="">
      <img class="icon" src="images/icon-dm.png" alt="">
    </div>
    <h3 id="likes${index}" class="enfasis">${posts[index].likes} likes</h3>
    <p id="comment" class="card-details-comment"><span id ="username" class="enfasis">${posts[index].username} </span>   ${posts[index].comment}</p>
  </div>
</section>`;
}

/**
 * It loops through the posts array, calls the publishPost function for each post, and then sets the
 * innerHTML of the card_container element to the renderedPosts variable
 */
function render() {
  for (let i = 0; i < posts.length; i++) {
    publishPost(i);
  }
  card_container.innerHTML = renderedPosts;
}

/* Calling the render function. */
render();


/* Adding an event listener to the like icon of each post. When the like icon is clicked, it calls the
addLike function and passes the index of the post as a parameter. */
document.getElementById("like-icon0").addEventListener("click", function(){
  doLike(0)
});

document.getElementById("like-icon1").addEventListener("click", function(){
  doLike(1)
});

document.getElementById("like-icon2").addEventListener("click", function(){
  doLike(2)
});


/* Adding an event listener to the post image of each post. When the post image is double clicked, it
calls the addLike function and passes the index of the post as a parameter. */
document.getElementById("post0").addEventListener("dblclick" , function(){
  doLike(0)
});

document.getElementById("post1").addEventListener("dblclick", function(){
  doLike(1)
});

document.getElementById("post2").addEventListener("dblclick", function(){
  doLike(2)
});


/**
 * If the post has not been liked, then add a like. If the post has been liked, then remove a like
 * @param index - the index of the post in the posts array
 */
function doLike(index){
  if (posts[index].doneLike == false){
    moreLikes(index)
  } else {
    lessLikes(index)
  }
}


/**
 * If the user has not liked the post, then the user can like the post. If the user has liked the post,
 * then the user can unlike the post
 * @param index - the index of the post in the posts array
 */
function moreLikes(index){
  posts[index].likes +=1;
  let element = document.getElementById(`likes${index}`)
  element.innerHTML = `<h3 id="likes${index}" class="enfasis">${posts[index].likes} likes</h3>`
  posts[index].doneLike = true;
  document.getElementById(`like-icon${index}`).src="images/icon-heart-like.png";
}

function lessLikes(index){
  posts[index].likes -=1;
  let element = document.getElementById(`likes${index}`)
  element.innerHTML = `<h3 id="likes${index}" class="enfasis">${posts[index].likes} likes</h3>`
  posts[index].doneLike = false;
  document.getElementById(`like-icon${index}`).src="images/icon-heart.png";
}