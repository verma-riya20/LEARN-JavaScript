//primitive

const name="riya"
const age=19
const email=undefined
const score=null   //type object
const mentionedId=false
console.table([name,age,email,score,mentionedId])

//symbol=> differentiate two same values
const a=Symbol("2")
const b=Symbol("2")
console.log(a==b)
// non primitive
const flowers=["rose","sunflower","merigold"]

let obj={
    name:"riya",
    age:19
}

const firstfunc=function(){
    console.log("hello")
}
console.log(typeof firstfunc)
