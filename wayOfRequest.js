        // We have 3 most waysto create and send request to server.

            // 1) XMLHttpRequest (old way of doing)


const XMLHttpRequest=require("xhr2");
const url="http://jsonplaceholder.typicode.com/posts";
const xhr=new XMLHttpRequest();
xhr.open("GET",url);
xhr.onload=function(){
    console.log(xhr.response)
}
xhr.send()


            // 2) fetch Api (New way of doing)


const fetch=require("node-fetch");
const URL="http://jsonplaceholder.typicode.com/posts";
fetch(URL)
    .then(response=>{
        return response.json();
    })
    .then(data=>{
        console.log(data)
    })

            // Request in promises(with async and await)....


const URL1="http://jsonplaceholder.typicode.com/posts";
const fetch =require("node-fetch");
console.log("start script")
async function getposts(){
    const response=await fetch(URL1);
    if (!response.ok){
        throw new Error("something went wrong")
    }
    const data=await response.json();
    return (data);
}
getposts().then(data1=>{
    console.log(data1);
}).catch(error=>{
    console.log(error);
    console.log("error inside");
})
console.log("End script");



            // 3) axios (this is third party library);


const axios=require("axios");
const Url="http://jsonplaceholder.typicode.com/posts";
axios.get(Url)
    .then(response=>{
        console.log(response.data)
    })

