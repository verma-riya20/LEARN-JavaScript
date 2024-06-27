let num="33"
 console.log(typeof num);

 //conversion from string to number
 let score=Number(num);
 console.log(typeof score)

 let a="22sbi"
 console.log(typeof a);
 let b=Number(a);
 console.log(typeof b)

 //since a is not a pure number but it can be converted using Number()
 console.log(b);

 //"33"=>33
 //"33abd"=>NaN(not a number)
 //null=>0
 //undefined=>NaN
 //true=>1

 let value=true;
 //conversion to boolean
 let boolvalue=Boolean(value)
 console.log(boolvalue)

 //true/false=>1/0
 //" "=>false
 //"riya"=> true


 let name=33
 ///conversion to string 

 let str=String(name)
 console.log(str)
 console.log(typeof str)



 ////////*****************OPERATIONS**********/////////

 let str1="ri"
 let str2="ya"
 console.log(str1+str2)
 console.log(2+1+"4")  // first two gets added then concatenate
 console.log("2"+4+5)  // all three concatenate

 //prefix and postfix

 let greatno=100
 let y=greatno++;
 console.log(y,greatno)
 let x=++greatno
 console.log(x,greatno)
