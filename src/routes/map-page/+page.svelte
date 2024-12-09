<script>
    import { onMount } from "svelte";
    import { writable } from "svelte/store";
    import ReturnToMainButton from "../../components/ReturnToMainButton.svelte";
    let map;
    let searchQuery = ""; // User's search input
    let errorMessage = writable("");

    
    const openPopup = () =>
    {
        showPopup = true;
    };

    const closePopup = () =>
    {
        showPopup = false;
    };

    onMount(async () =>
    {
        if (typeof window !== "undefined")
        {
            // Dynamically import Leaflet
            const L = await import("leaflet");

            // Initialize the map
            map = L.map("map").setView([35.6895, 139.6917], 14);

            // Add OpenStreetMap tile layer
            L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
            {
                attribution: false,
            }).addTo(map);

            // Fix rendering issues by invalidating the size after rendering
           
            setTimeout(function () { map.invalidateSize() }, 800);

            // Add default markers
      const markers = [
        { lat: 35.6895, lng: 139.6917, name: "13GG" },
        { lat: 35.6905, lng: 139.6927, name: "12GG" },
        { lat: 35.6885, lng: 139.6907, name: "17GG" },
      ];

      markers.forEach(({ lat, lng, name }) => {
        L.marker([lat, lng]).addTo(map).bindPopup(`
          <b>${name}</b><br>
          <button onclick="alert('Opening ${name}')">Open Door</button>
        `);
      });

      map.invalidateSize(); // Ensure the map resizes properly
    }
  });

  async function searchLocation() {
    if (!searchQuery) {
      errorMessage.set("Please enter a location to search.");
      return;
    }

    try {
      // Call Nominatim API to get location details
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
          searchQuery
        )}`
      );
      const data = await response.json();

      if (data.length === 0) {
        errorMessage.set("Location not found. Please try another search.");
        return;
      }

      // Get the first result and move the map
      const { lat, lon } = data[0];
      map.setView([parseFloat(lat), parseFloat(lon)], 15);

      // Add a marker at the searched location
      L.marker([parseFloat(lat), parseFloat(lon)])
        .addTo(map)
        .bindPopup(`<b>${searchQuery}</b>`)
        .openPopup();

      errorMessage.set(""); // Clear any previous error messages
    } catch (error) {
      console.error(error);
      errorMessage.set("An error occurred while searching. Please try again.");
    }
  }
</script>

<div class="page-container">
  <div class="search-container">
    <input
      type="text"
      placeholder="Search for a location..."
      bind:value={searchQuery}
    />
    <button on:click={searchLocation}>Search</button>
  </div>
  <p class="error-message" let:error>{$errorMessage}</p>
  <div class="map-container">
    <div id="map" class="map"></div>
  </div>
</div>
<ReturnToMainButton confirmMessage="Are you sure you want to return to the main page?" />
<style>

  .page-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
  }

  .search-container {
    position: relative;
    z-index: 2; /* Higher z-index to appear above the map */
    width: 340px;
    max-width: 310px;
    margin: 20px auto; /* Center the search bar */
    display: flex;
    justify-content: space-between;
    gap: 10px;
    padding: 10px;
    background: rgba(255, 255, 255, 0.8); /* Semi-transparent background */
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Subtle shadow for contrast */
  }

  .search-container input {
    flex: 1;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 8px;
  }

  .search-container button {
  padding: 10px;
  border-radius: 8px;
  border: none;
  background-color: #383838; /* Initial background color */
  color: white; /* Text color */
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease; /* Smooth transition */
}

.search-container button:hover {
  background-color: #2aa6c9; /* New background color on hover */
  color: #ffffff; /* Optional: Adjust text color on hover */
  transform: scale(1.05); /* Slight zoom effect on hover */
}

  .error-message {
    position: relative;
    z-index: 2;
    color: red;
    font-size: 0.9rem;
    margin: 10px auto;
    text-align: center;
  }

  .map-container {
    width: 340px;
    max-width: 600px;
    height: 620px;
    border: 1px solid #ddd;
    border-radius: 10px;
    overflow: hidden;
    position: absolute;
  }

  .map {
    width: 100%;
    height: 100%;
    background-color: #f0f0f0;
  }
</style>