
var e = document.getElementById("dropDown");
var container = document.querySelector(".cont");
function getData(value){
    axios.get(`https://saurav.tech/NewsAPI/top-headlines/category/${value}/in.json`)
    .then((res) =>{
        const arr = res.data.articles.sort(() => 0.5 - Math.random()).splice(0,12);
        const defaultImg = "https://images.pexels.com/photos/7097097/pexels-photo-7097097.jpeg?auto=compress&cs=tinysrgb&w=1600";
        console.log(arr)
        arr.map((value) => {
            const card = 
            `
                <div class="w-full sm:w-full md:w-full flex flex-col p-3">
                    <div class="bg-white rounded-lg shadow-lg overflow-hidden flex-1 flex flex-col">
                    <div class="h-48"><img class="w-full h-full"src="${value.urlToImage == null ? defaultImg : value.urlToImage}" onerror="this.onerror=null;this.src='${defaultImg}'"></div>
                    <a style="margin:0;padding:0;" href="${value.url}" target="_blank">
                    <div class="p-4 flex-1 flex flex-col" style="">
                        <h3 class="mb-4 text-2xl">${value.title}</h3>
                        <div class="mb-4 text-grey-darker text-sm flex-1">
                        <p>${value.description.slice(0, 250)}</p>
                        </div>
                        <a href="#" class="border-t border-grey-light pt-2 text-xs 
                        text-grey hover:text-red uppercase no-underline tracking-wide">${value.author}</a>
                    </div>
                    </a>
                    </div>
                </div>
            `
            container.innerHTML += card;
        })
    })
}
function onChange() {
  var value = e.value;
  container.innerHTML = " "
  getData(value);
}
e.onchange = onChange
onChange();
