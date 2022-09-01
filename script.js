const posts = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "images/avatar-vangogh.jpg",
    post: "images/post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: 21,
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/avatar-courbet.jpg",
    post: "images/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
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
  },
];

let card_container = document.getElementById("card-container");

let renderedPosts = "";

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

function render() {
  for (let i = 0; i < posts.length; i++) {
    publishPost(i);
  }
  card_container.innerHTML = renderedPosts;
}

render();



document.getElementById("like-icon0").addEventListener("click", function(){
  addLike("0");
});

document.getElementById("like-icon1").addEventListener("click", function(){
  addLike("1");
});

document.getElementById("like-icon2").addEventListener("click", function(){
  addLike("2");
});

document.getElementById("post0").addEventListener("dblclick" , function(){
  addLike("0");
});

document.getElementById("post1").addEventListener("dblclick", function(){
  addLike("1");
});

document.getElementById("post2").addEventListener("dblclick", function(){
  addLike("2");
});

function addLike(index){
  let IDcounter = "likes";
  IDcounter += index;

  let likeCounter = document.getElementById(IDcounter);
  let likeCounterValue = parseInt(likeCounter.innerHTML);
  let newlikes = likeCounterValue +1;
  likeCounter.innerHTML = `${newlikes} likes`;
}


