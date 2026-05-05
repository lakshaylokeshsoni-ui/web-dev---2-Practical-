async function fetchPosts() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();

    data.slice(0, 5).forEach(post => {
      console.log(post.title);
    });

  } catch (error) {
    console.error('Error:', error);
  }
}

fetchPosts();