<script>
  export let doorNumber = ""; // Door number
  export let location = ""; // Location
  export let color = "#2aa6c9"; // Default color
  export let onYes = () => {}; // "YES" button handler
  export let onNo = () => {}; // "NO" button handler
</script>

<div class="popup fade-in" style="--popup-color: {color};">
  <p class="futuristic-text">OPENING DOORWAY:</p>
  <div class="container2" style="background: var(--popup-color);">{doorNumber}</div>
  <p class="futuristic-text">AT</p>
  <div class="container1">{location}</div>
  <p class="futuristic-text">PLEASE CONFIRM ACTION</p>
  <div class="popup-buttons">
    <button class="yes-button" on:click={onYes}>YES</button>
    <button class="no-button" on:click={onNo}>NO</button>
  </div>
</div>

<style>
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

  .container2
  {
    background: #2aa6c9;
    color: rgb(252, 252, 252);
    border-radius: 12px;
    padding: 10px;
    margin: 5px auto;
    width: 30%;
    text-align: center;
    font-family: "Roboto Mono", monospace;
    font-size: 2rem;
  }

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
