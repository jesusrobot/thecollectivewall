const publications = document.querySelector('#publications');

const getSavedPosts = () => {
  let savedPosts = localStorage.getItem('savedPosts');

  if(savedPosts === null) {
    localStorage.setItem('savedPosts', '[]');
  } else {
    return JSON.parse(savedPosts);
  }
}

publications.addEventListener('click', (e) => {
  if(e.target.classList.contains('postControlls')) {
    const id = e.target.id;
    const postsLS = getSavedPosts();

    if(postsLS.indexOf(id) === -1) {
      postsLS.push(id);
      localStorage.setItem('savedPosts', JSON.stringify(postsLS));
      e.target.parentElement.classList.add('saved')
      e.target.innerText = 'Quit idea 💾️'
    } else {
      let newPosts = postsLS.filter(post => post !== id);
      localStorage.setItem('savedPosts', JSON.stringify(newPosts));
      e.target.parentElement.classList.remove('saved');
      e.target.innerText = 'Save idea 💾️'
    }


  }
});

document.addEventListener('DOMContentLoaded', getSavedPosts);