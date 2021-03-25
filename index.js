let views = document.getElementById('views');
let price = document.getElementById('price');
let switcher = document.getElementById('span1');
let switcher2 = document.getElementById('span2');

let inputRange = document.getElementsByTagName('input')[0];

const viewsList = ['10K', '50K', '100K', '500K', '1M'];
const pricesList = [8, 12, 16, 24, 36];


inputRange.addEventListener('input', function(){
    views.textContent = viewsList[this.value] ;
})

switcher.addEventListener('click', function (){
    
    switcher.style.display = 'none';
    switcher2.style.display = 'inline-block';


})

switcher2.addEventListener('click', function (){
    
    switcher.style.display = 'inline-block';
    switcher2.style.display = 'none';

})

inputRange.addEventListener('input',function(){

    if(switcher.style.display == 'none'){
    price.textContent = pricesList[this.value] * 0.75;
    } else{
        price.textContent = pricesList[this.value];
    }

});

