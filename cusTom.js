/*
 ==============================
 cusTom.js allows you to show custom dialog boxes
 Alert, Prompt, Confirm
 ==============================
 Alert(your_header, your_text, button_text, background-color, color);
 ==============================
 Prompt(your_text, FalseBtn_text, TrueBtn_text, background-color, color, input_Color).then(text=>{
   console.log(text)
 })
 ==============================
 Confirm(your_text, FalseBtn_text, TrueBtn_text, background-color, color).then(ac=>{
   console.log("You clicked on true button");
   //for false button its not gonna work!
 })
 ==============================
*/

function Alert(header, text, button, bgColor, textColor) {
  document.body.style.pointerEvents = "none";
  document.body.style.userSelect = "none";
  document.body.style.overflow = "hidden";
  document.body.style.boxSizing = "border-box";
  var cntr = document.createElement("center");
  var db = document.createElement("div");
  var hdr = document.createElement("h3");
  var txt = document.createElement("p");
  var btn = document.createElement("button");
  //if else start
  if (header == null) {
    hdr.innerText = "Alert";
  } else {
    hdr.innerText = header;
  }
  if (text == null) {
    txt.innerText = "This is an Alert";
  } else {
    txt.innerText = text;
  }
  if (button == null) {
    btn.innerText = "OK";
  } else {
    btn.innerText = button;
  }
  if (bgColor == null) {
    db.style.background = "#fff";
  } else {
    db.style.background = bgColor;
  }
  if (textColor == null) {
    txt.style.color = "#000";
    hdr.style.color = "#000";
  } else {
    txt.style.color = textColor;
    hdr.style.color = textColor;
  }
  //if else close...
  //styling.. start//
  //==============//
  //styling.. cntr//
  cntr.style.position = "fixed";
  cntr.style.top = "0";
  cntr.style.left = "0";
  cntr.style.width = "100%";
  cntr.style.boxSizing = "border-box";
  cntr.style.height = "100%";
  cntr.style.margin = "8px";
  cntr.style.overflow = "visible";
  cntr.style.display = "flex";
  cntr.style.justifyContent = "center";
  cntr.style.alignItems = "center";
  //styling.. db//
  db.style.width = "300px";
  db.style.height = "auto";
  db.style.fontFamily = "Arial";
  db.style.overflow = "hidden";
  db.style.margin = "8px";
  db.style.userSelect = "none";
  db.style.boxShadow =
    "0 0 0 3024px rgba(0,0,0,.5), 0 0 20px 3px rgba(0,0,0,.5)";
  db.style.padding = "0px 20px 20px 0px";
  //styling.. hdr, not a camera opt haha...!
  hdr.style.textAlign = "left";
  hdr.style.margin = "8px 8px 8px 28px";
  // hdr.style.paddingLeft = "20px";
  hdr.style.padding = "10px 0px 0px 0px";
  //styling.. txt
  txt.style.userSelect = "text";
  txt.style.margin = "8px";
  txt.style.textAlign = "left";
  txt.style.wordBreak = "break-all";
  txt.style.padding = "0px 0px 0px 20px";
  txt.style.lineHeight = "23px";
  //styling.. btn.
  btn.style.pointerEvents = "auto";
  btn.style.fontWeight = "bold";
  btn.style.margin = "8px 8px 8px 235px";
  btn.style.padding = "0";
  btn.style.cursor = "pointer";
  btn.style.background = "none";
  btn.style.border = "none";
  btn.style.color = "#009578";
  //styling.. close//
  //==JS==//
  db.append(hdr, txt, btn);
  btn.addEventListener("click", function () {
    document.body.removeChild(cntr);
    document.body.style.pointerEvents = "auto";
    document.body.style.userSelect = "auto";
    document.body.style.overflow = "auto";
    document.body.style.boxSizing = "inherit";
  });

  cntr.appendChild(db);
  document.body.appendChild(cntr);
}

function Prompt(text, b1, b2, bgColor, textColor, inpColor) {
  document.body.style.pointerEvents = "none";
  document.body.style.userSelect = "none";
  document.body.style.overflow = "hidden";
  document.body.style.boxSizing = "border-box";

  var cntr = document.createElement("center");
  var db = document.createElement("div");
  var hdr = document.createElement("h4");
  var txt = document.createElement("input");
  var btnDiv = document.createElement("div");
  var btn1 = document.createElement("button");
  var btn2 = document.createElement("button");
  //if else start//
  if (text == null) {
    hdr.innerText = "What is Your Name..?";
  } else {
    hdr.innerText = text;
  }
  if (b1 == null) {
    btn1.innerText = "CANCEL";
  } else {
    btn1.innerText = b1;
  }
  if (b2 == null) {
    btn2.innerText = "OK";
  } else {
    btn2.innerText = b2;
  }
  if (bgColor == null) {
    db.style.background = "#fff";
  } else {
    db.style.background = bgColor;
  }
  if (textColor == null) {
    hdr.style.color = "#222";
  } else {
    hdr.style.color = textColor;
  }
  if (inpColor == null) {
    txt.style.color = "#222";
  } else {
    txt.style.color = inpColor;
  }
  //if else close
  //styling.. start
  //styling.. cntr
  cntr.style.position = "fixed";
  cntr.style.top = "0";
  cntr.style.left = "0";
  cntr.style.width = "100%";
  cntr.style.height = "100%";
  cntr.style.boxSizing = "border-box";
  cntr.style.margin = "8px";
  cntr.style.overflow = "visible";
  cntr.style.display = "flex";
  cntr.style.justifyContent = "center";
  cntr.style.alignItems = "center";
  //styling.. db
  db.style.width = "300px";
  db.style.height = "auto";
  db.style.display = "flex";
  db.style.flexDirection = "column";
  db.style.margin = "8px";
  db.style.padding = "17px";
  db.style.overflow = "hidden";
  db.style.alignItems = "center";
  db.style.fontFamily = "Arial";
  db.style.boxShadow =
    "0 0 0 3024px rgba(0,0,0,.5), 0 0 20px 3px rgba(0,0,0,.5)";
  //styling.. hdr
  hdr.style.width = "100%";
  hdr.style.textAlign = "left";
  hdr.style.margin = "8px 8px 8px 30px";
  hdr.style.padding = "0";
  hdr.style.userSelect = "none";
  //styling.. txt
  txt.style.width = "90%";
  txt.style.border = "none";
  txt.style.borderBottom = "2px solid #009758";
  txt.style.padding = "4px";
  txt.style.margin = "8px";
  txt.style.background = "none";
  txt.style.outline = "none";
  txt.style.pointerEvents = "auto";
  //styling.. buttons
  //btnDiv
  btnDiv.style.width = "80%";
  btnDiv.style.margin = "8px";
  btnDiv.style.height = "auto";
  btnDiv.style.display = "flex";
  btnDiv.style.justifyContent = "right";
  btnDiv.style.padding = "20px 0px 0px 0px";
  // btn1
  btn1.style.margin = "0px 10px 0px 0px";
  btn1.style.background = "none";
  btn1.style.border = "none";
  btn1.style.color = "#009758";
  btn1.style.fontWeight = "bold";
  btn1.style.padding = "0px";
  btn1.style.cursor = "pointer";
  btn1.style.pointerEvents = "auto";
  //btn 2
  btn2.style.background = "none";
  btn2.style.border = "none";
  btn2.style.color = "#009758";
  btn2.style.fontWeight = "bold";
  btn2.style.margin = "0px";
  btn2.style.padding = "0px";
  btn2.style.cursor = "pointer";
  btn2.style.pointerEvents = "auto";
  //styling.. close

  //extra
  btnDiv.append(btn1, btn2);
  db.append(hdr, txt, btnDiv);
  cntr.appendChild(db);
  document.body.appendChild(cntr);
  //=============================//

  //==JS Start==//
  btn1.onclick = function () {
    document.body.removeChild(cntr);
    document.body.style.pointerEvents = "auto";
    document.body.style.userSelect = "auto";
    document.body.style.overflow = "auto";
    document.body.style.boxSizing = "inherit";
  };

  return new Promise(function (value) {
    btn2.onclick = function () {
      value(txt.value);
      document.body.removeChild(cntr);
      document.body.style.pointerEvents = "auto";
      document.body.style.userSelect = "auto";
      document.body.style.overflow = "auto";
      document.body.style.boxSizing = "inherit";
      return;
    };
  });

  //==JS Close==//
}

function Confirm(text, b1, b2, bgColor, textColor) {
  document.body.style.pointerEvents = "none";
  document.body.style.userSelect = "none";
  document.body.style.overflow = "hidden";
  document.body.style.boxSizing = "border-box";

  var cntr = document.createElement("center");
  var db = document.createElement("div");
  var hdr = document.createElement("h5");
  var btnDiv = document.createElement("div");
  var btn1 = document.createElement("button");
  var btn2 = document.createElement("button");
  //IF ELSE Start
  if (text == null) {
    hdr.innerText = "Are You Sure?";
  } else {
    hdr.innerText = text;
  }
  if (b1 == null) {
    btn1.innerText = "NO";
  } else {
    btn1.innerText = b1;
  }
  if (b2 == null) {
    btn2.innerText = "YES";
  } else {
    btn2.innerText = b2;
  }
  if (bgColor == null) {
    db.style.background = "#fff";
  } else {
    db.style.background = bgColor;
  }
  if (textColor == null) {
    hdr.style.color = "#000";
  } else {
    hdr.style.color = textColor;
  }
  //IF ELSE Close
  //styling.. start
  cntr.style.position = "fixed";
  cntr.style.top = "0";
  cntr.style.left = "0";
  cntr.style.width = "100%";
  cntr.style.height = "100%";
  cntr.style.boxSizing = "border-box";
  cntr.style.margin = "8px";
  cntr.style.overflow = "visible";
  cntr.style.display = "flex";
  cntr.style.justifyContent = "center";
  cntr.style.alignItems = "center";
  //styling.. db
  db.style.width = "300px";
  db.style.height = "auto";
  db.style.display = "flex";
  db.style.padding = "8px";
  db.style.margin = "0";
  db.style.overflow = "hidden"
  db.style.flexDirection = "column";
  db.style.alignItems = "center";
  db.style.boxShadow =
    "0 0 0 3024px rgba(0,0,0,.5), 0 0 20px 3px rgba(0,0,0,.5)";
  //styling.. hdr
  hdr.style.width = "90%";
  hdr.style.textAlign = "left";
  hdr.style.margin = "20px 0 0 10px";
  hdr.style.userSelect = "none";
  hdr.style.wordBreak = "break-all";
  hdr.style.fontFamily = "Arial";
  hdr.style.fontSize = "15px";
  hdr.style.padding = "0px 8px 0px 0px";
  //styling.. buttons;
  btnDiv.style.width = "80%";
  btnDiv.style.height = "auto";
  btnDiv.style.display = "flex";
  btnDiv.style.padding = "0px";
  btnDiv.style.justifyContent = "right";
  btnDiv.style.margin = "20px";
  // btn1
  btn1.style.margin = "0px 10px 0px 0px";
  btn1.style.background = "none";
  btn1.style.border = "none";
  btn1.style.color = "#009758";
  btn1.style.fontWeight = "bold";
  btn1.style.padding = "0px";
  btn1.style.cursor = "pointer";
  btn1.style.pointerEvents = "auto";
  //btn 2
  btn2.style.background = "none";
  btn2.style.border = "none";
  btn2.style.color = "#009758";
  btn2.style.padding = "0px";
  btn2.style.fontWeight = "bold";
  btn2.style.margin = "0";
  btn2.style.cursor = "pointer";
  btn2.style.pointerEvents = "auto";
  //styling.. close
  btnDiv.append(btn1, btn2);
  db.append(hdr, btnDiv);
  cntr.appendChild(db);
  document.body.appendChild(cntr);
  //=============================//

  //==JS Start==//
  btn1.onclick = function () {
    document.body.removeChild(cntr);
    document.body.style.pointerEvents = "auto";
    document.body.style.userSelect = "auto";
    document.body.style.overflow = "auto";
    document.body.style.boxSizing = "inherit";
  };
  //
  return new Promise((action) => {
    btn2.onclick = function () {
      action();
      document.body.removeChild(cntr);
      document.body.style.pointerEvents = "auto";
      document.body.style.userSelect = "auto";
      document.body.style.overflow = "auto";
      document.body.style.boxSizing = "inherit";
      return;
    };
  });
  //==JS==//
}
//Prepared By  \\\___( ***-@PieCoder_79-*** )__///
//Hosted By ("-KIPTER-");
