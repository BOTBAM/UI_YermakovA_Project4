<script>
    export let confirmMessage = "Are you sure you want to return to the main page?";

    let showPopup = false;

    const handleReturn = () =>
    {
        window.location.href = "/"; // Redirect to the main page
    };
</script>

<div class="return-button-container">
    <button class="return-button" on:click={() => (showPopup = true)}>
        ↩
    </button>

    {#if showPopup}
        <div class="popup-overlay">
        <div class="popup">
            <p>{confirmMessage}</p>
            <div class="popup-buttons">
            <button class="confirm" on:click={handleReturn}>YES</button>
            <button class="cancel" on:click={() => (showPopup = false)}>NO</button>
            </div>
        </div>
        </div>
    {/if}
</div>

<style>
    .return-button-container
    {
        position: relative;
        bottom: 20px;
        right: -37%;
        z-index: 100;
    }

    .return-button
    {
        background-color: #383838;
        color: white;
        border: none;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        font-size: 24px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
    }

    .popup-overlay
    {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 200;
    }

    .popup
    {
        background: white;
        padding: 20px;
        border-radius: 8px;
        width: 20%;
        text-align: center;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    }

    .popup-buttons
    {
        margin-top: 20px;
        display: flex;
        gap: 10px;
        justify-content: center;
    }

    .popup-buttons button
    {
        padding: 10px 20px;
        border: none;
        border-radius: 8px;
        cursor: pointer;
    }

    .popup-buttons .confirm
    {
        background-color: #007bff;
        color: white;
    }

    .popup-buttons .cancel
    {
        background-color: #ccc;
        color: black;
    }
    /* Popup Animations */
    @keyframes fade-in
    {
        from
        {
        opacity: 0;
        transform: translate(-50%, -10%);
        }
        to
        {
        opacity: 1;
        transform: translate(-50%, 0);
        }
    }
</style>
