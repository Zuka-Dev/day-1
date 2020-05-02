const increase = document.querySelector('#upper-count'),
      decrease = document.querySelector('#lower-count'),
      reset=document.querySelector('#reset');
      let input  = document.querySelector('input')
const increment = ()=> {
input.value = parseInt(input.value)+1;
input.style.borderColor='rgb(82, 230, 82)';
};
const decrement = ()=> {
input.value = parseInt(input.value)-1;
input.style.borderColor='rgb(231, 42, 42)';
};
const reseting = ()=>{
          location.reload();
}
const loadEventListener = ()=> {
 increase.addEventListener("click", increment);
 decrease.addEventListener("click", decrement);
 reset.addEventListener("click", reseting);
};
loadEventListener();