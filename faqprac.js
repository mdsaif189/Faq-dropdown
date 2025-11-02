let ans = document.querySelectorAll(".ques h2")


ans.forEach((item,index) => {
    item.addEventListener("click", () => {
        item.nextElementSibling.classList.toggle("show")
    })

})


/*let a=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let b=0;
for(i=0;i<=a.length;i++){
    if(a[i]%2==0){
        b++;
    }

}
console.log(b);*/

/*let c = [3, 5, 7, 9]
let d = 0;
for (i = 0; i <= c.length; i++) {
    if (c[i] % 2 !== 0) {
        d++;
    }

}
console.log(d);*/

/*for (i = 'A'.charCodeAt();i<='Z'.charCodeAt(); i++) { 
    console.log(String.fromCharCode(i));
    
}*/

