const searchForm=document.querySelector("#search-Form");
const searchBox=document.querySelector("#search-Box");
const searchResult=document.querySelector("#search-Result");
const showMorebtn=document.querySelector("#show-More");
const accessKey="YeETT_P9mRJnf5F7J7q1VakHpGWqkwheTwFuJMvX5-I";
let keyword="";
let page=1;
async function searchImg(){
    keyword=searchBox.value;
    const url=`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;
    const response= await fetch(url);
    const data= await response.json();
    
    if(page===1){
        searchResult.innerHTML="";
    }
    const results=data.results;
    results.map((result)=>{
        const image=document.createElement("img");
        image.src=result.urls.small;
        const imageLink=document.createElement("a");
        imageLink.href=result.links.html;
        imageLink.target="_blank";
        imageLink.appendChild(image);
        searchResult.appendChild(imageLink);
    })
    showMorebtn.style.display = "block";

}
searchForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    page=1;
    searchImg();
})


showMorebtn.addEventListener("click",()=>{
    page++;
    searchImg();
})