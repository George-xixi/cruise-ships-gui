const portName = document.querySelector("#portName");
const itineraryList = document.querySelector("#list-of-ports");
const form = document.querySelector("#form");

form.addEventListener("submit", (event) => {
  const newPort = new Port(portName.value);
  const newListItem = document.createElement("li");
  console.log(newPort);
  itinerary.ports.push(newPort);
  console.log(itinerary);
  portName.value = "";

  newListItem.innerHTML = newPort.name;
  itineraryList.appendChild(newListItem);

  event.preventDefault();
});
