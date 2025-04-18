document.addEventListener("DOMContentLoaded", function() {
    fetch('data/plants.json')
        .then(response => response.json())
        .then(plants => {
            const dropdown = document.getElementById("seasonSelect");
            const plantList = document.getElementById("plantList");

            dropdown.addEventListener("change", function() {
                plantList.innerHTML = "";
                plants.filter(plant => plant.season === this.value)
                      .forEach(plant => {
                          const li = document.createElement("li");
                          li.textContent = plant.name + " - Sunlight: " + plant.sunlight;
                          plantList.appendChild(li);
                      });
            });
        });
});
