

function removeElement(params){
  let input1 = ["a", "b", "c", "d", "e"];
  let input2 = [params];
  let output = [];

  // console.log(input2);

  for (let i = 0; i < input1.length; i++){
    if (input1[i] !== params){
      output.push(input1[i]); //aksi
      // console.log(output); //proses looping
    }
  }
  console.log(output);
}

removeElement("c")