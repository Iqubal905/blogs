

const getAllBlogs = async(id) => {

    let url = 'http://localhost:3000/api/blogs'
if(id){
    url += "?id=" + id
}
    const res = await fetch(url,{
        cache : 'no-cache'
    })
    return res.json()
};

export default getAllBlogs;