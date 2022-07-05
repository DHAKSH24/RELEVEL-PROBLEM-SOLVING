// FIND THE SMALLEST VALUE IN GIVEN INPUT (12,44,2) WITHOUT USING COMPARISON OPERATOR //

/* ALGORITHM OF THIS PROGRAMME 

*CREATE A FUNCTION 

*DECLARE THE VARIABLE C 

*CREATE THE WHILE LOOP 

*CHECK THE INPUT USING FUNCTION 

*/

function smallest(x,y,z)
{
    let c = 0;

    while(x && y && z){
        x--;
        y--;
        z--;
        c++;
    }
     return c;
}

let x = 12,y = 44 , z = 2;
console.log("smallest of number of input is " + smallest(x,y,z));