// ..........Object


// var elonMask= {jacket:true,jacketColor:"navy",hairColor:"black", face:"smile" }

// console.log(elonMask['jacketColor']);

// var elonMask2={

//     jacket:{
//         jacketColor:"navy",
//         jacketQuality:"good",
//         jacketPrice:"200USD"

//     },

//     face:{

//         expressio:"smile",
//         sunglass:true,
//         beard:false
//     }
// }

// console.log(elonMask2['jacket']['jacketPrice']);


//---------- for in loop

// var jackma={jacket:true,jacketColor:"navy",hairColor:"black", face:"smile" }

// for (let props in jackma)

// {
//     // console.log(jackma[props])

//     console.log(props+"= "+ jackma[props])
// }


// --------decission making

var jackma={jacket:true,jacketColor:"navy",hairColor:"black", face:"smile" };

if(jackma['jacketColor']=="red"){

console.log("The jacket color is Red");

}else if(jackma['jacketColor']=="blue"){

    console.log("The jacket color is Blue");
}else{

    console.log("The jacket color not found");
}

