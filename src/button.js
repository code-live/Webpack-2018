
/**
 * 
 * 
 * @param {string} btnName 
 * @returns {Element}
 */
const makeBtn = (btnName) => {
  const btnLabel =  `Button ${btnName}`;
   const btn = document.createElement("button");
   btn.innerText = btnLabel;

   return btn;
}

module.exports = makeBtn;