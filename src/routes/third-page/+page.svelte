<script>
    import ReturnToMainButton from "../../components/ReturnToMainButton.svelte";
    import DoorPopup from "../../components/DoorPopup.svelte";

    // List of doors with unique colors
    const doors =
    [
        { id: "13GG", color: "#2aa6c9" },
        { id: "12GG", color: "#28a745" },
        { id: "17GG", color: "#dc3545" },
        { id: "5WG", color: "#f39c12" },
        { id: "1LC", color: "#8e44ad" },
        { id: "3LC", color: "#e67e22" }, 
        { id: "11LL", color: "#3498db" }
    ];

    let showPopup = false;
    let selectedDoor = {};

    const openPopup = (door) =>
    {
        selectedDoor = door;
        showPopup = true;
    };

    const closePopup = () =>
    {
        showPopup = false;
        selectedDoor = {};
    };

    const handleYesClick = () =>
    {
        alert(`Opening doorway: ${selectedDoor.id}`);
        closePopup();
    };
</script>

<div class="content">
    <p class="futuristic-text">Doorways near you:</p>
    <div class="scroll-container">
        {#each doors as door}
        <div class="container1">
            <button
            class="door-button"
            style="--button-color: {door.color};"
            on:click={() => openPopup(door)}
            >
            {door.id}
            </button>
        </div>
        {/each}
    </div>
</div>

{#if showPopup}
    <DoorPopup
        doorNumber={selectedDoor.id}
        location="Green Parking Garage"
        color={selectedDoor.color}
        onYes={handleYesClick}
        onNo={closePopup}
    />
{/if}

<ReturnToMainButton confirmMessage="Are you sure you want to return to the main page?" />

<style>
    /* General Content Styling */
    .content
    {
        text-align: center;
        padding: 1rem;
        transition: filter 0.3s ease;
    }

    /* Scroll Container */
    .scroll-container
    {
        border: 3px solid #ddd;
        border-radius: 10px;
        height: 480px;
        width: 340px;
        max-width: 600px;
        overflow-y: auto;
        padding: 10px;
    }

    /* Door Container Styling */
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

    /* Door Button Styling */
    .door-button
    {
        margin: 10px auto;
        padding: 1px 54px;
        border-radius: 12px;
        border: none;
        background: var(--button-color, #2aa6c9); /* Tried out unique color passed via inline style (saw on youtube shorts haha)*/
        color: white;
        font-family: "Roboto Mono", monospace;
        font-size: 3rem;
        cursor: pointer;
        transition: background-color 0.3s ease, transform 0.2s ease;
    }

    .door-button:hover
    {
        transform: scale(1.1);
        filter: brightness(1.2); /* Slight brightening on hover */
    }

    /* My Futuristic Text Styling */
    .futuristic-text
    {
        font-family: "Roboto Mono", monospace;
        font-size: 1.2rem;
        color: rgb(0, 0, 0);
        text-transform: uppercase;
        margin: 10px 0;
    }
</style>
