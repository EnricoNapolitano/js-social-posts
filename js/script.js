//* FUNCTIONS
const createPost = () => {
    for (let i=0; i<postsData.length; i++){
        postInfo += `
        <div class="post">
            <div class="post__header">
              <div class="post-meta">
                <div class="post-meta__icon">
                  <img class="profile-pic" src="${postsData[i].photo}" alt="${postsData[i].name}" />
                </div>
                <div class="post-meta__data">
                  <div class="post-meta__author">${postsData[i].name}</div>
                  <div class="post-meta__time">${postsData[i].date}</div>
                </div>
              </div>
            </div>
            <div class="post__text">
            ${postsData[i].text}
            </div>
            <div class="post__image">
              <img src="${postsData[i].picture}" alt="" />
            </div>
            <div class="post__footer">
              <div class="likes js-likes">
                <div class="likes__cta">
                  <button class="like-button js-like-button" href="#" data-postid="1">
                    <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                    <span class="like-button__label">Mi Piace</span>
                  </button>
                </div>
                <div class="likes__counter">Piace a <b id="like-counter-1" class="js-likes-counter">${parseInt(postsData[i].likes)}</b> persone</div>
              </div>
            </div>
          </div>
        `
     }
     return postInfo;
}


//* DOMS ELEMENT
const postElm = document.querySelector('.posts-list')
let postInfo = '';


postElm.innerHTML = createPost();
