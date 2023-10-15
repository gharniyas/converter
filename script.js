function convert(){
let cel=Number(document.getElementById("input").value)
let far=(cel*1.8)+32
let result=document.getElementById("result")
result.innerHTML=far.toFixed(3)+"F"
}