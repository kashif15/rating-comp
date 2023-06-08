const buttons = document.querySelectorAll(".list__item").length;
const submit = document.querySelector(".btn__submit");
const rating = document.querySelector(".span__value");
const card = document.querySelector(".card");
const success = document.querySelector(".success");

let value;

for(var i=0; i<buttons; i++)
{
	document.querySelectorAll(".list__item")[i].addEventListener("click",function(e){

		for(var j=0; j<buttons; j++)
		{
			document.querySelectorAll(".list__item")[j].classList.remove("list__change");
		}
		e.target.classList.add("list__change");
    	value = e.target.textContent;

	});
}


submit.addEventListener("click", function(){
  rating.textContent = value;
  card.style.display = "none";
  success.style.display = "flex";
});
