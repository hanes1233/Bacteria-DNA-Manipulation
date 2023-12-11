// Returns a random DNA base
const bacteria = [];

const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};
// Create object of element with it's unique number (id)
let bacteriaFactory = (number,array) => { return {
    specimenNum: number,
    dna: array,
    //Changes first base of elemnt's dna
    mutate() {
        let value = array[0];
        array[0] = returnRandBase();
        if(array[0] != value) {
          console.log(`First value of DNA succesfully changed from ${value} to ${array[0]}.`);
          return this.dna;
        }else {
          return this.mutate();
        }
      }
}};
//compare two elements equality in percentage
const compareDNA = (arr,arr2) => {
  let counter = 0;
  for(let i = 0; i < arr.dna.length; i++) {
    if(arr.dna[i] === arr2.dna[i]) {
      counter++;
    }
  }
  return `Element 1 and Element 2 have ${parseInt(counter/15 * 100)}% DNA in common.`;
}
//Creating and pushing 30 new objects in array
const createThirtyElements = () => {
  for(let i = 0; i < 30; i++) {
    bacteria.push(bacteriaFactory(i,mockUpStrand()));
  };
}
//Check's if element will survive(if percentage of C and G more than 60)
function willLikelySurvive(array) {
  console.log(array);
  let counter = 0;
  for(let i = 0; i < array.dna.length; i++) {
    if(array.dna[i] === 'C' || array.dna[i] === 'G') {
      counter++;
    }
  }
let value = parseInt(counter/array.dna.length *100) >= 60 ? true : false;
return value ? console.log('Bacteria will survive.') : console.log('Bacteria will NOT survive.');
}


//createThirtyElements();
//console.log(bacteria.length);
//console.log(bacteriaFactory(1,mockUpStrand()));
//console.log(bacteriaFactory(1,mockUpStrand()).mutate());
//console.log(compareDNA(bacteria[0],bacteria[1]));
//const displayAllBases = bacteria.forEach(element => { willLikelySurvive(element)});
