const fruits = ["Avocado", "Lychee", "Blackberry", "Blueberry", "Jackfruit"]
const large = new Array(10000).fill("Lychee")

function findLychee(fruits) {
  let t0 = performance.now();
  for (let i = 0; i < fruits.length; i++) {
    if (fruits[i] === "Lychee") {
      console.log("Found", fruits[i]);
    }
  }
  let t1 = performance.now();

  console.log('Call to findLychee took: ' + (t1 - t0) + ' Milliseconds');
}

// findLychee(fruits)
findLychee(large)


/*
So instead of using performance now and using time to measure the efficiency of our function, we can
just calculate how many operations a computer has to perform because each operation takes time on a
computer.

So big O allows us and concerns us with how many steps it takes in a function.
*/