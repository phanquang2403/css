const autoCss = (start = 1, end) => {
  const arrResult = [];
  for (start; start <= end; start++) {
    arrResult.push(
      `
      .h-${start} {
        height: ${start * 0.25}rem; /* ${start * 0.25 * 16}px */
      }
    `
    );
  }
  console.log(arrResult.join(" "));
};

autoCss(4, 80);
