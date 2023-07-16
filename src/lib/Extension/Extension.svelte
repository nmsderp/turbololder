<script>
    export let name = "Extension";
    export let image = "";
    export let url = "";
    export let owner = "my dog";

    function copyURL(url) {
        navigator.clipboard.writeText(url);
        alert("copeed");
    }
    function copyCode(url) {
        fetch(url)
            .then((res) =>
                res
                    .text()
                    .then((code) => {
                        navigator.clipboard.writeText(code);
                        alert("copeed");
                    })
                    .catch(alert)
            )
            .catch(alert);
    }
</script>

<div class="ext">
    <div class="image-container">
        <img src={image} alt="ExtensionBanner" />
    </div>
    <h1>{name}</h1>
    <p>
        <slot />
        <br />
        extension maded by {owner}!!
    </p>
    <br />
    <button
        style="background: rgb(96, 96, 255);border-color: rgb(34, 34, 255);"
        on:click={() => copyURL(url)}
    >
        copy URL
    </button>
    <a href={"https://turbowarp.org/editor?extension=" + url} target="_blank">
        <button
            style="background: rgb(255, 96, 96);border-color: rgb(255, 34, 34);font-size:16px"
        >
            use this one
        </button>
    </a>
    <button
        style="background: rgb(54, 209, 60);border-color: rgb(44, 158, 49);"
        on:click={() => copyCode(url)}
    >
        copy CODE
    </button>
</div>

<style>
    img {
        width: 300px;
        height: 150px;
    }
    button {
        padding: 8px;
        font-size: 24px;
        border-radius: 6px;
        border-style: solid;
        font-weight: bold;
        cursor: pointer;
        color: white;
        background: gray;
        border-color: rgb(87, 87, 87);
    }

    .ext {
        background: white;
        border: 2px black solid;
        border-radius: 8px;
        padding: 48px;
        margin: 16px;
    }
    .image-container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>
