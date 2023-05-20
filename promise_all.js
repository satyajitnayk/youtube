function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

// Calling the function sequentially
console.time('sequential');
for (let i = 0; i < 100; i++) {
  await delay(100);
}
console.timeEnd('sequential');

// Calling the function parallely using promise.all
console.time('parallel');
const allPromises = [];
for (let i = 0; i < 100; i++) {
  allPromises.push(delay(100));
}
await Promise.all(allPromises);
console.timeEnd('parallel');
