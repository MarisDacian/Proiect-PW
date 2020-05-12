function getRandomInt(max) {
    let x;
    x = Math.floor(Math.random() * Math.floor(max + 1)) + 5;

    return x;

}

function random() {


    let x = getRandomInt(20);

    return x;
}

function ordonate(arr = []) {

    arr.sort(function(a, b) {
        return a.tonage - b.tonage;
    });
    return arr;
}

let arrGoodContainer = [];
let contorSort=0;
function findMaxSubarraySum(arr = [], n, sum,max_cont_number) {

    let max_sum = 0;
    let contor_container = 0;
    arr = ordonate(arr);

    for (let i = n-1; i >= 0; i--) {
  
//console.log(arr[i].tonage);
        if (arr[i].tonage + max_sum <= sum) {
            max_sum = max_sum + arr[i].tonage;
            contor_container++;
          
             arrGoodContainer[contorSort]=arr[i];
             contorSort++;
        }

        if (contor_container == max_cont_number) {
            i = -1;
            console.log("Maxim container:" + contor_container);
        }

    }

    return max_sum;
}


function arrGenerator(arr = [], m) {

    for (let i = 0; i < m; i++) {
      myContainer =new Container(random(),40,"Brazilia","SUA","432-435",2,3,11);
        arr[i] =myContainer ;

    }
    return arr;
}


