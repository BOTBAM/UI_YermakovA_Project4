<script>
    import Popup from "../components/DoorPopup.svelte";
    let showPopup1 = false;
    let showPopup2 = false;

    // Opens the corresponding popup based on the button pressed
    const openPopup = (popup) =>
    {
        if (popup === 1) showPopup1 = true;
        else if (popup === 2) showPopup2 = true;
    };

    // Closes any open popup
    const closePopup = () =>
    {
        showPopup1 = false;
        showPopup2 = false;
    };
    const handleYesClick = () =>
    {
        alert("Opening the door!"); // Was going to have a mini animation but exam week is brutal ._.
        closePopup();
    };
</script>

<div class={`content ${showPopup1 || showPopup2 ? 'blurred' : ''}`}>
    <!-- Main content -->
    <p class="futuristic-text">YOUR LOCATION IS AT:</p>
    <div class="container1">Green Parking Garage</div>

    <div class="inline-container">
        <p class="futuristic-text">NEAR DOORWAY:</p>
        <div class="container2">13GG</div>
    </div>
    <hr class="separator" />

    <!-- Buttons for user interaction -->
    <p class="futuristic-text">IF CORRECT, PRESS BELOW TO</p>
    <button class="open-button" on:click={() => openPopup(1)}>OPEN</button>
    <hr class="separator" />

    <p class="futuristic-text">OTHERWISE, PLEASE SELECT DOOR MANUALLY</p>
    <button class="here-button" on:click={() => openPopup(2)}>HERE</button>
</div>

{#if showPopup1}
    <Popup 
        doorNumber="13GG" 
        location="Green Parking Garage" 
        onYes={handleYesClick} 
        onNo={closePopup} 
    />
{/if}

{#if showPopup2}
    <div class="popup fade-in">
        <p class="futuristic-text">Are you sure you wish to manually select the door?</p>
        <div class="popup-buttons">
            <button class="yes-button" on:click={() => (window.location.href = "/second-page")}>YES</button>
            <button class="no-button" on:click={closePopup}>NO</button>
        </div>
    </div>
{/if}


<style>
    .inline-container
    {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 auto; /* To center */

    }

    /* General Content Styling */
    .content
    {
        text-align: center;
        padding: 1rem;
        transition: filter 0.3s ease; /* For blurred effcet when popups appear */
    }

    .blurred
    {
        filter: blur(5px); /* Blurs the background when a popup is active */
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

    .container2 {
        background: #2aa6c9;
        color: rgb(252, 252, 252);
        border-radius: 12px;
        margin-top: 0%;
        padding: 10px;
        width: auto; /* Adjusts width to fit content */
        text-align: center;
        font-family: "Roboto Mono", monospace;
        font-size: 1.5rem;
    }

    /* OPEN Button Styling */
    .open-button
    {
        padding: 12px 24px;
        border-radius: 12px;
        border: none; /* Enusres no visible border */
        background: linear-gradient(111deg, #383838, #04340f); /* Green gradient */
        color: white;
        font-family: "Roboto Mono", monospace;
        font-size: 2rem;
        cursor: pointer;
        transition: background-color 0.7s ease, transform 0.4s ease;
    }

    .open-button:hover
    {
        background: #0b8828; /* Green on hover */
        transform: scale(1.15);
    }

    .open-button:focus
    {
        outline: none; /* I really disliked the defauld outline */
        box-shadow: 0 0 8px rgba(11, 136, 40, 0.5); /* Adds a green glow on focus */
    }

    /* HERE Button Styling */
    .here-button
    {
        padding: 12px 24px;
        border-radius: 12px;
        border: none; /* Ensures no visible border */
        background: linear-gradient(111deg, #383838, #2f2f02); /* Yellow gradient */
        color: white;
        font-family: "Roboto Mono", monospace;
        font-size: 2rem;
        cursor: pointer;
        transition: background-color 0.3s ease, transform 0.2s ease;
    }

    .here-button:hover
    {
        background: #78781d; /* Yellow on hover */
        transform: scale(1.15);
    }

    .here-button:focus
    {
        outline: none; /* - defauld outline again*/
        box-shadow: 0 0 8px rgba(146, 146, 5, 0.5); /* Adds a yellow glow on focus */
    }


    /* YES and NO Button Styling */
    .yes-button,
    .no-button
    {
        padding: 10px 20px;
        border-radius: 8px;
        border: none;
        font-family: "Roboto Mono", monospace;
        font-size: 2rem;
        cursor: pointer;
        transition: background 0.3s ease, transform 0.2s ease;
    }

    .yes-button
    {
        background: linear-gradient(90deg, #28a745, #34d058);
        color: white;
    }

    .yes-button:hover
    {
        background: linear-gradient(90deg, #218838, #28a745);
        transform: scale(1.05);
    }

    .no-button
    {
        background: linear-gradient(90deg, #dc3545, #e4606d);
        color: white;
    }

    .no-button:hover
    {
        background: linear-gradient(90deg, #c82333, #dc3545);
        transform: scale(1.05);
    }

    /* Popup Styling */
    .popup
    {
        position: absolute;
        top: 20%;
        left: 50%;
        transform: translate(-50%, 0);
        width: 20%;
        background: #121212;
        color: rgb(255, 255, 255);
        border-radius: 12px;
        box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.3);
        padding: 20px;
        text-align: center;
        animation: fade-in 0.5s ease forwards;
        z-index: 10;
    }

    .popup-buttons
    {
        display: flex;
        justify-content: space-around;
        margin-top: 15px;
    }

    /* Popup Animations */
    @keyframes fade-in
    {
        from {
        opacity: 0;
        transform: translate(-50%, -10%);
        }
        to {
        opacity: 1;
        transform: translate(-50%, 0);
        }
    }
</style>
