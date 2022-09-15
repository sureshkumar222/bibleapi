
async function foo(){
    let res=await fetch("https://bible-api.com/John+3:16"); 
    let res1=await res.json();
    try {
        var div=document.createElement("div");
        div.innerHTML=`
        <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
  <div class="card-header">${res1.reference}</div>
  <div class="card-body">
    <p class="card-text">book_id: ${res1.verses[0].book_id} </p>
    <p class="card-text">book_name: ${res1.verses[0].book_name}</p>
    <p class="card-text">chapter: ${res1.verses[0].chapter}</p>
    <p class="card-text">verse: ${res1.verses[0].verse}</p>
     <p class="card-text">${res1.text} </p>

  </div>
    
  </div>
</div>
        `;
       
document.body.append(div);


console.log(res1.reference);
console.log(res1.book_id);
console.log(res1.book_name);
console.log(res1.chapter);
console.log(res1.verse);
console.log(res1.text);

        
    } catch (error) {
        console.log(error);
        
    }
}
foo();