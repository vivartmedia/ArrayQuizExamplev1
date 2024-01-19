const url = '../data/quizdata.json';
var elements = [];

fetch(url)
  .then(response => response.json())
  .then(data => {
    
    for (let i = 0; i< data.length; i++){
        if (data.People[i].age<30){
            var inTwentees =   elements.push(data.People[i].age);
            
        }
     
    } console.log(inTwentees)
    // console.log(data.People[0].age) ;
  });