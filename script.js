function animateBox(box, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      box.style.opacity = '1';
      box.style.transform = 'translateY(0)';
      setTimeout(resolve, 1000); // Wait for animation to finish
    }, delay);
  });
}

async function runAnimations() {
  const box1 = document.getElementById('box1');
  const box2 = document.getElementById('box2');
  const box3 = document.getElementById('box3');

  await animateBox(box1, 0);    // Start immediately
  await animateBox(box2, 0);    // Start after box1
  await animateBox(box3, 0);    // Start after box2
}

runAnimations();
