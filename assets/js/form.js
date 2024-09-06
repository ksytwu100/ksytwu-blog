// Handle form submission
// Store blog articles
// redirect the blog page includes white and black page flashing 
  
    const usernameInput = document.getElementById('username');
    const titleInput = document.getElementById('title');
    const contentInput = document.getElementById('content');
    const SaveButton = document.getElementById('save');

    SaveButton.addEventListener('click', function(event) {
      event.preventDefault();

     // Create user object 
    const userData = {
      username: usernameInput.value,
      title: titleInput.value,
      content: contentInput.value
    }; 
    const blog = localStorage.getItem("blog") 
    let blogData = JSON.parse(blog);
    if (!blogData) {
      blogData = []
    }
    blogData.push(userData)
     // Set new submisstion to local storage
    localStorage.setItem("blog",JSON.stringify(blogData));
    window.location.href = "./blog.html"
  });

    
