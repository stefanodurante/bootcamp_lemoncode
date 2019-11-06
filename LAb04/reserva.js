var getRoomType = () => document.getElementById("room-type").value;
var getSpa = () => document.getElementById("spa").checked;
var getRoomCapacity = () => document.getElementById("room-capacity").value;
var nightsNum = () => document.getElementById("nights").value;
var nightsParkNum = () => document.getElementById("park-nights").value;

function handleInfo() {
  console.log(getRoomType());
  console.log(getSpa());
  console.log(getRoomCapacity());
  console.log(nightsNum());
  console.log(nightsParkNum());
}

document.getElementById("calculate").addEventListener("click", handleInfo); 
