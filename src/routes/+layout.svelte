<script>

</script>

<div class="phone-container">
    <slot />
</div>

<style>
    .phone-container
    {
        width: 375px; 
        height: 654px; 
        margin: auto;
        border: 1px solid #ccc;
        border-radius: 30px;
        overflow: hidden;
        background-color: #f9f9f9;
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }
</style>
