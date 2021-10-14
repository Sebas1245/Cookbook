const imageForm = document.querySelector("#imageForm");
const imageInput = document.querySelector("#imageInput");

imageForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const file = imageInput.files[0];

    // get secure url from our server 
    // translate later to AJAX GET request
    const { url } = await fetch("http://localhost:5000/api/recipes/s3url").then(res => res.json()); 
    console.log(url)
    // post image directly to s3 bucket
    // translate later to AJAX PUT request
    // add try catch statement for validation
    await fetch(url, {
        method: "PUT",
        header: {
            "Content-Type": "multipart/form-data"
        },
        body: file
    });
    const imageUrl = url.split('?')[0];
    console.log(imageUrl);
    // post request to server to upload image url along with other data 
});
