const colors = ["black", "salmon"];
colors.current = 0;

setInterval(() => {
  const current = colors.current % colors.length;
  document.body.style.backgroundColor = colors[current];
  colors.current++;
}, 2000);
