<script>
    import ReturnToMainButton from "../../components/ReturnToMainButton.svelte";
    let showPopup = false;
    
    // Navigation function to route to other pages
    const navigateTo = (page) =>
    {
        if (page === "third") window.location.href = "/third-page";
        else if (page === "map") window.location.href = "/map-page";
    };
</script>

<div class="content">
    <p class="futuristic-text">Your location is approximately at:</p>
    <div class="container1">Green Parking Garage</div>
    <p class="futuristic-text">~~~~~~~~~~~~~~~~~~</p>
    <p class="futuristic-text">If yes, press below to</p>
    <button class="near-button" on:click={() => navigateTo("third")}>
        Choose door near my location
    </button>
    <p class="futuristic-text">OR</p>
    <button class="map-button" on:click={() => navigateTo("map")}>
        Choose manually on map
    </button>
</div>

<!-- Return to main page button -->
<ReturnToMainButton confirmMessage="Are you sure you want to return to the main page?" />

<style>
    /* General Content Styling */
    .content
    {
        text-align: center;
        padding: 1rem;
        transition: filter 0.3s ease;
    }

    /* Container Styling */
    .container1
    {
        background: #383838;
        color: rgb(252, 252, 252);
        border-radius: 12px;
        padding: 10px;
        margin: 5px auto;
        width: 80%;
        text-align: center;
        font-family: "Roboto Mono", monospace;
        font-size: 2rem;
    }

    /* Button Styling */
    .near-button
    {
        margin: 10px auto;
        padding: 12px 24px;
        border-radius: 12px;
        border: none;
        background: linear-gradient(111deg, #000000, #0b8828); /* Green gradient */
        color: white;
        font-family: "Roboto Mono", monospace;
        font-size: 1.5rem; /* Smaller size compared to OPEN button */
        cursor: pointer;
        transition: background-color 0.7s ease, transform 0.4s ease;
    }

    .near-button:hover
    {
        background: #0b8828; /* Green on hover */
        transform: scale(1.1);
    }

    .map-button
    {
        margin: 10px auto;
        padding: 12px 24px;
        border-radius: 12px;
        border: none;
        background: linear-gradient(111deg, #000000, #929205); /* Yellow gradient */
        color: white;
        font-family: "Roboto Mono", monospace;
        font-size: 1.5rem; /* Smaller size compared to HERE button */
        cursor: pointer;
        transition: background-color 0.3s ease, transform 0.2s ease;
    }

    .map-button:hover
    {
        background: #78781d; /* Yellow on hover */
        transform: scale(1.1);
    }

    /* Futuristic Text */
    .futuristic-text
    {
        font-family: "Roboto Mono", monospace;
        font-size: 1.2rem;
        color: rgb(0, 0, 0);
        text-transform: uppercase;
        margin: 10px 0;
    }
</style>

