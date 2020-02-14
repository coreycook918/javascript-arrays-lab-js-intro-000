var kittens = [ "Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten('new kitten') {
  var kittens = destructivelyAppendKitten('new kitten')
  kittens.push('new kitten')
  return kittens
}
