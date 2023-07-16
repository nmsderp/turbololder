<script>
    import { onMount } from "svelte";

    import Extension from "$lib/Extension/Extension.svelte";

    let locationOrigin;

    onMount(() => {
        locationOrigin = location.origin;
    });
</script>

<div class="main">
    <div style="height:24px" />

    <h1 style="text-decoration: none;background:black" class="branding">
        <img
            class="logo"
            src="/favicon.png"
            alt="tubroawoplaodtrewtrfewwedfewsdfe"
        />

        <span style="color:#ff0000">w</span>
        <span style="color:#f51b09">e</span>
        <span style="color:#ec3612">l</span>
        <span style="color:#e3501b">c</span>
        <span style="color:#da6924">o</span>
        <span style="color:#d1822d">m</span>
        <span style="color:#c89836;margin-right:10px">e</span>
        <span style="color:#b6c048">t</span>
        <span style="color:#add151;margin-right:10px">o</span>
        <span style="color:#9aeb64">t</span>
        <span style="color:#91f46d">u</span>
        <span style="color:#88fa76">r</span>
        <span style="color:#7ffe7f">b</span>
        <span style="color:#76fe88">o</span>
        <span style="color:#64f79a">l</span>
        <span style="color:#5beea3">o</span>
        <span style="color:#51e3ad">l</span>
        <span style="color:#48d6b6">d</span>
        <span style="color:#3fc6bf">e</span>
        <span style="color:#36b4c8;margin-right:10px">r</span>
        <span style="color:#2489da">(</span>
        <span style="color:#1b71e3">t</span>
        <span style="color:#1258ec">m</span>
        <span style="color:#093ef5">)</span>
    </h1>

    <p>we have extens9ions</p>
    <p>use them</p>

    <p style="background:white">
        Unlike custom extensions on other websites, extensions listed here are
        extensions listed here.
        <br />
        To use these extensions in TurboWarp, figure it out. Some of these extensions
        may work in other Scratch mods while others will not.
        <br />
        To use these in the desktop app, i dont know how to do it.
    </p>

    <div class="box">
        <p>
            These extensions are not compatible with Scratch. Projects that use
            these extensions can't be uploaded to the Scratch website.
            <br />
            They can, however, be used in the TurboWarp packager.
        </p>
    </div>

    <div class="box red-box">
        <p>
            These extensions are not unsandboxed.
            <br />
            Click the "copy code" button to load an extension by text in TurboWarp
        </p>
    </div>

    <div class="list">
        <Extension
            name="McUtils"
            image="https://extensions.turbowarp.org/images/Lily/McUtils.png"
            owner="LilyMakesThings"
            url="https://extensions.turbowarp.org/Lily/McUtils.js"
        >
            Helpful utilities for any fast food employee.
            <br />
            Created by LilyMakesPlusExtensions
        </Extension>
        <Extension
            name="MR BEAST UTILTITIES"
            image="/images/Mr_Beast_Utilitities.svg"
            owner="JeremyGamer13"
            url={locationOrigin + "/extensions/mrbeastutil.js"}
        >
            the best blockes ever
        </Extension>
        <Extension
            name="Jungle Inferno"
            image="/images/none.png"
            owner="LilyMakesThings"
            url={locationOrigin + "/extensions/jungleinferno.js"}
        >
            a good
        </Extension>
    </div>

    <div style="height:256px" />
</div>

<style>
    .logo {
        height: 64px;
    }
    .branding {
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    .main {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .box {
        background: rgb(56, 216, 136);
        border: rgb(32, 131, 82) 2px solid;
        border-radius: 8px;
        padding: 4px;
        margin: 4px;
    }
    .list {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
    }

    .red-box {
        background-color: rgb(233, 69, 69);
        border-color: rgb(156, 23, 23);
        color: white;
    }
</style>
