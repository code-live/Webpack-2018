const makeImg = (data) => {
  const img = document.createElement("img");
  img.src = data;
  img.width = 100;
  img.height = 100;
  return img;
}

export default makeImg;