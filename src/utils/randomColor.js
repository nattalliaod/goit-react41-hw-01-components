export const randomColor = () => {
  const rgbColor = () => Math.floor(Math.random() * 256);

  return `rgb(${rgbColor()},${rgbColor()},${rgbColor()})`;
}