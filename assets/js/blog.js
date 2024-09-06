
const usernameInput = document.querySelector("username");
const title = document.querySelector("title");
const content = document.querySelector("content");
const submit = document.querySelector("submit");
const upperbutton = document.querySelector("upperbutton");
const userNameSpan = document.querySelector("#username"); 
const userTitleSpan = document.querySelector("#title"); 
const userContentSpan = document.querySelector("#content"); 
const bodyEl = document.querySelector("#body"); 


    function renderLastRegistered() {
    
        //Retrive the last username, title, and content and render it to the page
        const blog = localStorage.getItem("blog");
        let blogData = JSON.parse(blog);
        if (blogData===null || blogData===undefined || blogData.length <1 ) {return }
        for (let i = 0; i < blogData.length; i++) {
            const post = blogData[i]
            const titleItem = document.createElement("h4")   //  Create a content element
            titleItem.textContent = post.title
            const contentItem = document.createElement("li")
            contentItem.textContent = post.content
            const usernameItem = document.createElement("li")
            usernameItem.textContent = post.username
            const postItem = document.createElement("section")
            postItem.classList.add("card")
            const listItems = document.createElement("ul")
            postItem.appendChild(titleItem)   // Append the content element to the postItem just like line 22
            listItems.appendChild(contentItem)
            listItems.appendChild(usernameItem)
            postItem.appendChild(listItems)
            bodyEl.appendChild(postItem)
          
        }
    }
    renderLastRegistered();   
           function darkMode () {
            console.log("Got here, Dark Mode")
            const bodyEl = document.querySelector("#bdy"); 
            console.log("Got here, Dark Mode",bodyEl)
            bodyEl.classList.add("dark")
            setTimeout(() => {
                bodyEl.classList.remove("dark")  
            }, 2000);
           }
     