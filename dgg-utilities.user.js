// ==UserScript==
// @name         [dev] d.gg utilities
// @namespace    https://www.destiny.gg/
// @version      dev-2022.10.10
// @description  [dev] small, but useful tools for both regular dggers and newbies alike
// @author       vyneer
// @match        *://*.destiny.gg/embed/chat*
// @include      /https?:\/\/www\.destiny\.gg\/embed\/chat/
// @run-at       document-start
// @allFrames    true
// @grant        GM.xmlHttpRequest
// @connect      vyneer.me
// @connect      youtube.com
// @downloadURL  none
// @homepageURL  https://github.com/vyneer/dgg-chat-gui-scripts
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAEg3pUWHRSYXcgcHJvZmlsZSB0eXBlIGV4aWYAAHjarVZr0hwnDPzPKXIE9IbjAIKq3CDHTzP77Tp24qpUYth5MYyQ1K1my/7j91N+QyNWLmrRvLtXNO3aeeCm1VdTHBMHP7+nya7vRs97ej0U/jb83Yv3ODFG5Nv4+2pfBn378XQqLiFcORn+3AEPN9wvP2GY9DyJ8BYSf84hVfp17Tk+i5SX2c9q/Fev2jtE/n5c1/P0aedkK+fsV7hDHTnyryDpZd3fE5EplSd7jh44DPfx9I7eSh11kdasC2mduO/EJPWQUtKgQ/u5LlpwS3lz4Mq8WJ6xJsGdl9SCqPV2OhzSJaUJy0I2BKP88YWedfuz3KKGhZMwkwnGCF9wuadf0X9q6Jx100WXU/yiA/zi55ZuDuWeMQtpp/NCjZA4+kv/sV0sBTjZk+aGAEedLxPT6IUqFUyRB1zBRMP1BSxFfhlAirC2wRkSIFCdxMipBnMQIY8N+AwYaizKExCQGSe8ZBVwL7jxXRvfBD1z2fg1jDICECaXyw0ADWClqDXwJ7SBQ8PE1Mzcwpp1Gy6ubu7g963HERIaFh4RLXqMJk2bNW/RWmm9jc5dUK/WvUdvvfcxsOiA5YGvByaMMXnK1GnTZ8w2+xwL9Fm6bPmK1crqaySnpKalZ2TLnmPTBpW2btu+Y7fd9zig2pGjxw4K8bTTz/igRuWr9H7s/x41eqPGD1J3YnxQw6cRbxN05cUuZkCMlYB4XARAaL6Y1UYKYbvQXcxqZ1SFMby0C07SRQwI6ia2Qx/sviH3HW5F9X/hxm/kyoXuVyBXLnQ/Qe7vuP0Dank1flUpD0K3DG9Sq6D8IEJ1xqa229wSp2bmhnPd0s4ykDpG+h7TE8KEYUiJZ+kyez3SQ85A8KhnGB4Si+7CZ9a42j7u+fBc+0yBF1hMZOFRYud1dJaQ5THch57s8Hyreuo8e/G4Rg9worEb3vicdyQXbOE6Q7TSrjYymhaArweBLWjqSqB9EtjLSuTHM9URoiPOlg0Qel0rZ4NIgnLSUOknZkWNaznNEgqON+KTYdwoN2g1ba3dgYTjGyjzBBE7zRxaAV9fDVphE8bbWBOiUXSlxUKoMhukXbofFIAik2oA0DTBgLUCe9CY0chm3YEc5eh9AUksYjkC25FsxraEzPYIG3IaAANhCWHpqbaA1QIpCbkNXShchE4zAsa7XzmMIR5cCGyrAyyTYf8h3bYNlMHkwtCl3AC5bssNsl5yD7nZto1E8bSBvXMN0hWwV/cOEzCYNqYjv5ABBkdLtWsbIneeo/rIL8r0MzUSfwjOWg9Vpvs+iBqOgECgDLa5gw2RUBFUFEzAfZ0LPFUwT3dP/G24/2amMISc1glW7EqBC4BpdFwnlpFAlvddpAO1Iwk+58ygjBG2ecIOKgHGkeCYYzsEY7a7MS85Dh4NEESr8+F+9kHxoyywZaP01qibAkKz4FJrKGgbagkE3SdN7s0hjZAtPEHLrqhKw9MtV1jtydBs2DDolIHIZDwViTZqy+beByWF+u7lTyjmcQULXXVFAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAEwUlEQVRYha2WS4wUVRSGv1uvbu159AATu6onkTiAo8wMGRNiYBKJxsdSiUuNccHShQuDhoUxLiYkLsUwS3GLcSNGY2QhRhaSsCGIJDMIjHbDECcwzADdVXWPi+pqbldX9yByk0rduo/z/3XuOf+5yvd9AVBKISKYfRFBKUXePND+7jW/pVLFD6qcOX2KYrHYsT5tllKqA8TsW5bVNWa2dC5vf71+jfLmzZz84TuKxWLX+vRxuii1/iwLZoL2a0oplO2xZ+8synOxbBvLsjD/XQFa66Tv+74opajVaoRh2AVikskSExG01lSrVTzPA2Drawc4/dVnvPzKS9wNQwZdh59P/8YLh0+2jjVGdMzvh99IjPi+L604EK21aK0lbb365pjWWsIwlEqlIr7vS6VSEUAc1xZAXn39TRkobxERkVBE4jgWsMR13QTX930JgqCDgPmY4OY7+0RRJKVSSRRKAAGkUChKeWSTnDl7Ti4uXBJAzl+6LLUbK3JhYVGCIBCr71kakU3r3OI47jimKIqYnt7FzdvrXK1fY6Fe5+LVvzl/+Qrvf3SIe6vrvPvOWxz/+hvqN28xODREDDw1/lSCYcZANvWyaTU6OoqIsLy8jGVZxHHM1NQUa7fXWPprqU20GvgMl8t8e+J7vIFyEnUkQWcJaKUI7zWYmdxBlwdMDTCDDcDzPAqFQodn9u/fD5J4xWsl1YWFP/ni6DxOaQCUboMD6FYMP1YscOvWaqIDWYHopw0mIdu2mZub4/o/Nyh7NkVP47ouhw5+wIv79mFZ6f91p65yHUqQeCCb2/0UL7t+fHycrY7NmHIouAUsNEeOHMnAGXEURSCCHTVQAwNYpruzMZAHmB1bXFykYcH8J+9RGhzGwe5aa+7xHIe9M5Psmp5maGgoPwZMMnmeMb/n5+e5wj0mN4+wdHeVUMB2MwIryTEHm4aZnNhObJjpyIK2PPaIi7GxMUSEpaWlNtFms8nIyAhhM8J1bJrAs0/v4Hr9Bmf/uIBojYfmidEt+L7fZdPJA+snv+bmdK7RaCSyHMZs27adt8ef5OjdO5Qch5HhAarVKkEQdNkAcHqV3GxpziMK4LouWmtO/fIrtm3RuNNk06DLh8/vZeczOwiCAK11l50U0zHB8gCyNT89JtOI1ro9ns6JCNVqNddrHR7ILsiCb1R+0322bedWS1NHTIx0LlcHehEyx/MU80H3m3MdaZgnv3nZYOpFLxFL+/0IQp8j6HUNS8f6iVOv7w0JQH4gZo3lZch/aeaejmKUjfiNvJAXdBu5PGvvf+tAtnCl6yYmJtr7nJs1dn76E2ghFo3SMec+P5AQMI1spAPr6+vtG1HexSVts7OzrK2toZSiWaux+9gioBEBW8cQh/c90Ms1WRCAlZWV3HXm98zMDMvLy4gIUb3O7LFFtGjQOnmLQHw/i5w8g70IZaM/78pWKBSSOTz2fLmA1jFax9CKD9EC6IfTgWypzgZqCo77OLvnfkTrCB1HJA5IwEU0Or4v2w+tA9nvdrWzPZ77+AQ61gl5SUBT0slYhoCIEARBT83u15RS7TovEjN18DiN9VWQlADJ2ZOQ0QISR23bKggC6Vf/80roo2oiktwJH6RoPGrw1Oa/KHllCRWO8awAAAAASUVORK5CYII=
// ==/UserScript==

// ==Changelog==
// v1.7
// * move all the settings into a custom menu
// * speedup banned phrase detection
// * better mutelinks mode support (now detects SOME links in your messages!)
// * message gets scanned on context menu paste now as well
// * add a feature to show destiny's last vod on embed check
// * slight sticky mentions visibility improvement
// * script should work on strims.gg now
// * new svg icon
// * focus the chat input after double clicking a username to copy to input (big thanks to @mattroseman <3)
// * fix the LIVE prepend bug that kept adding it to the title (big thanks to @mattroseman <3)
// * switch to the timestamp update model (might be buggy, but hopefully not)
// v1.6 - 2022-04-23
// * add an option to prevent you from sending a message containing a banned/nuked phrase
// * add an option to format yt embeds directly in messages
// * add an option to select the embed button icon (thanks Igor for the outline version, thanks Voiture for the SVG version! <3)
// * add an option to color the text area when mutelinks is on
// * if you hover over the mutelinks icon a popup makes it more clear what's happening
// * add an option to add 'LIVE' to title when watching on bigscreen
// * firemonkey compatibility
// * add an option to hide individual flairs (big thanks to Voiture <3)
// * add an option to stick recent mentions to top of chat (big PepoTurkey to Voiture gobl)
// * add an option to ignore certain phrases, decoupled from harsh ignore setting (big PepoTurkey to Voiture gobl)
// * add an option to double click a username to append it to the input box (big thanks to @mattroseman <3)
// v1.5.2 - 2022-04-20
// * add all strims links
// v1.5.1 - 2021-11-20
// * fix (source) links not working in some cases
// v1.5 - 2021-11-19
// * add an option to disable autoscroll down (so, when the "More messages below" bar appears, it won't scroll down if you uncheck the setting)
// * add an option to see title/channel name of youtube embeds
// * add an option to see title of twitch embeds
// * now shows the nuked phrases when you hover over the nuke button
// * set saturation of embed icon to 0 (because win 11 made the emoji purple MMMM)

// DEBUG MODE, DON'T SET TO TRUE IF YOU DON'T KNOW WHAT YOU'RE DOING
// replaces the data given by the server with data provided below and makes nuke/mutelinks buttons always active
const DEBUG = false;
const DEBUG_NUKE_DATA = [
  {
    time: "2020-03-20T14:28:23.382748",
    type: "meganuke",
    duration: "10m",
    word: "test",
  },
  {
    time: "2020-03-20T14:28:23.382748",
    type: "meganuke",
    duration: "10m",
    word: "test2",
  },
];
const DEBUG_LINKS_DATA = [
  {
    status: "on",
  },
];

const timeOptions = {
  hour12: false,
  hour: "2-digit",
  minute: "2-digit",
};

const mutelinksChecklist = [
  "https://",
  "http://",
  "www.",
  ".com",
  ".org",
  ".ru",
  ".net",
  ".uk",
  ".au",
  ".in",
  ".de",
  ".ir",
  ".ca",
  ".gov",
  ".be",
  ".tv",
  ".it"
];

let phrases = [];
let phrasesEtag = "";
let nukes = [];
let nukesCompiled = [];
let mutelinks = false;
let foundPhraseOrNuke = false;

let nukesTimestamp = 0;
let mutelinksTimestamp = 0;
let phrasesTimestamp = 0;

class ConfigItem {
  constructor(keyName, defaultValue) {
    this.keyName = keyName;
    this.defaultValue = defaultValue;
  }
}
const configItems = {
  alwaysScrollDown  : new ConfigItem("alwaysScrollDown",   true    ),
  changeTitleOnLive : new ConfigItem("changeTitleOnLive",  false   ),
  embedIconStyle    : new ConfigItem("embedIconStyle",     1       ),
  doubleClickCopy   : new ConfigItem("doubleClickCopy",    false   ),
  embedsOnLaunch    : new ConfigItem("embedsOnLaunch",     false   ),
  showLastVOD       : new ConfigItem("showLastVOD",        false   ),
  lastEmbeds        : new ConfigItem("lastEmbeds",         false   ),
  lastIfNone        : new ConfigItem("lastIfNone",         false   ),
  embedTime         : new ConfigItem("embedTime",          30      ),
  twitchEmbedFormat : new ConfigItem("twitchEmbedFormat",  1       ),
  youtubeEmbedFormat: new ConfigItem("youtubeEmbedFormat", 1       ),
  colorOnMutelinks  : new ConfigItem("colorOnMutelinks",   false   ),
  phraseColor       : new ConfigItem("phraseColor",        "1f0000"),
  nukeColor         : new ConfigItem("nukeColor",          "1f1500"),
  mutelinksColor    : new ConfigItem("mutelinksColor",     "120016"),
  customPhrases     : new ConfigItem("customPhrases",      []      ),
  customPhrasesSoft : new ConfigItem("customPhrasesSoft",  []      ),
  customColor       : new ConfigItem("customColor",        "1f0000"),
  customSoftColor   : new ConfigItem("customSoftColor",    "260019"),
  editEmbeds        : new ConfigItem("editEmbeds",         false   ),
  preventEnter      : new ConfigItem("preventEnter",       false   ),
  hiddenFlairs      : new ConfigItem("hiddenFlairs",       []      ),
  stickyMentions    : new ConfigItem("stickyMentions",     false   ),
  ignorePhrases     : new ConfigItem("ignorePhrases",      false   ),
  ignoredPhraseList : new ConfigItem("ignoredPhraseList",  []      ),
};
class Config {
  #configItems;
  #configKeyPrefix;
  constructor(configKeys, keyPrefix) {
    this.#configItems = configKeys;
    this.#configKeyPrefix = keyPrefix;
    // Creates setter funcs in this object (config)
    // So when the config.key value is changed it is also saved in localStorage
    for (const key in this.#configItems) {
      const configKey = this.#configItems[key];
      const keyName = configKey.keyName;
      const privateKeyName = `#${keyName}`;
      Object.defineProperty(this, key, {
        set: function (value) {
          // Set the private value
          this[privateKeyName] = value;
          // Save it to persistent storage as well
          this.#save(keyName, value);
        },
        get: function () {
          // Check if value is saved in config object
          if (this[privateKeyName] === undefined) {
            // If not, load it from persistent storage, or use default value
            this[privateKeyName] = this.#load(keyName) ?? configKey.defaultValue;
          }
          return this[privateKeyName];
        },
      });
    }
  }
  #getFullKeyName(configKey) {
    return `${this.#configKeyPrefix}${configKey}`;
  }
  #save(configKey, value) {
    // Persist the value in LocalStorage
    const fullKeyName = this.#getFullKeyName(configKey);
    window.localStorage.setItem(fullKeyName, JSON.stringify(value));
  }
  #load(configKey) {
    // Get the value we persisted, in localStorage
    const fullKeyName = this.#getFullKeyName(configKey);
    const item = window.localStorage.getItem(fullKeyName);
    if (item != null) {
      const parsedItem = JSON.parse(item);
      return parsedItem;
    }
  }
};
const config = new Config(configItems, "vyneer-util.");

document.addEventListener(
  "keypress",
  function (e) {
    let textarea = document.querySelector("#chat-input-control");
    if (e.key === "Enter" && !e.altKey && foundPhraseOrNuke && config.preventEnter) {
      e.preventDefault();
      e.stopImmediatePropagation();
      textarea.classList.add("alertAnim");
      setTimeout(() => {
        textarea.classList.remove("alertAnim");
      }, 1000);
    }
    return false;
  },
  true
);

// firemonkey compatibility stuff pepeW
if (document.readyState !== "loading") {
  injectScript();
} else {
  document.addEventListener("DOMContentLoaded", injectScript);
}

function injectScript() {
  let chatlines = document.querySelector(".chat-lines");
  let textarea = document.querySelector("#chat-input-control");
  let scrollnotify = document.querySelector(".chat-scroll-notify");
  let livePill = undefined;
  
  try {
    livePill = !window.parent.location.href.includes("embed")
    ? window.parent.document.querySelector("#host-pill-type")
    : undefined
  } catch (e) {
    console.warn(`[WARNING] [dgg-utils] script might be running in cross-origin frame, can't get the live pill, the "change title on live" feature wont work - ${e}`);
  }

  let utilSettingsStyle = document.createElement("style");
  let utilSettingsStyleString = `
    #util-settings-btn {
        width: 95%;
        height: 32px;
        color: #B9B9B9;
        background-color: #030303;
        margin-left: 2.5%;
    }
    
    #util-settings-btn:hover {
        cursor: pointer;
        border: 2px solid #B9B9B9;
    }
  
    #util-settings #util-settings-form {
        margin: .9em 0;
    }

    #util-settings .form-group {
        margin: .9em .9em;
        display: block;
        position: relative
    }

    #util-settings h4 {
        font-size: 0.9em;
        margin-top: 1.8em;
        margin-bottom: .9em;
        padding-left: .9em;
        color: #494949;
        text-transform: uppercase;
        font-weight: 600
    }

    #util-settings label {
        display: inline-block;
        font-weight: normal;
        max-width: 100%;
        margin-bottom: .6em
    }

    #util-settings .checkbox label {
        margin-bottom: 0;
        font-weight: 400;
        max-width: 100%;
        cursor: pointer;
        display: flex;
        justify-items: center;
        align-items: center
    }

    #util-settings .checkbox input {
        margin: 0 .3em 0 0;
        line-height: normal;
        box-sizing: border-box;
        padding: 0
    }

    #util-settings select {
        border-radius: .25em;
        padding: .3em;
        width: 100%
    }
  `
  utilSettingsStyle.innerHTML = utilSettingsStyleString;
  utilSettingsStyle.id = "utilSettingsStyle";
  document.head.appendChild(utilSettingsStyle);

  let alertAnimationStyle = document.createElement("style");
  let keyFrames = `
  :root {
    --flashing-color: #1f0000;
  }

  @keyframes bannedAlert {
    0%,
    50%,
    100% {
      background-color: #111;
    }

    25%,
    75% {
      background-color: var(--flashing-color);
    }
  }

  .alertAnim {
    animation: bannedAlert 1s;
  }`;
  alertAnimationStyle.innerHTML = keyFrames;
  document.head.appendChild(alertAnimationStyle);

  // make an observer to show an update message after the "connected" alert in chat
  let updateObserver = new MutationObserver((mutations) => {
    for (let mutation of mutations) {
      for (let node of mutation.addedNodes) {
        if (node.matches('div[class="msg-chat msg-status "]')) {
          if (
            node
              .querySelector('span[class="text"]')
              .innerHTML.includes("Connected.")
          ) {
            // checking the scripts version
            // we check the difference between the current install's version and the API
            // if the API shows there's an update, show a message
            GM.xmlHttpRequest({
              method: "GET",
              url: "https://vyneer.me/tools/script/dev",
              onload: (response) => {
                if (response.status == 200) {
                  let data = JSON.parse(response.response);
                  if ("link" in data && "version" in data) {
                    if (GM_info.script.version < data.version) {
                      new DGGMsg(
                        `Hey! Looks like you're using an older version of d.gg utilities (v${GM_info.script.version}). You can download the latest version v${data.version} here - <a href="${data.link}" target="_blank">${data.link}</a>`,
                        "msg-info msg-historical",
                        ""
                      );
                      chatlines.scrollTop = chatlines.scrollHeight;
                    }
                  }
                } else {
                  console.error(`[ERROR] [dgg-utils] couldn't check for updates - HTTP status code: ${response.status} - ${response.statusText}`);
                }
              },
              onerror: () => {
                console.error(`[ERROR] [dgg-utils] couldn't check for updates - HTTP error`);
              },
              ontimeout: () => {
                console.error(`[ERROR] [dgg-utils] couldn't check for updates - HTTP timeout`);
              }
            });

            // show embeds on launch
            if (config.embedsOnLaunch) {
              embeds();
            }

            updateObserver.disconnect();
          }
        }
      }
    }
  });
  updateObserver.observe(chatlines, { childList: true });

  // Add custom style rules to this
  let settingsCss = "";

  // making a button for message sending
  let chatToolsArea = document.querySelectorAll(".chat-tools-group")[1];
  let sendAnywayButton = document.createElement("a");
  sendAnywayButton.id = "send-anyway-btn";
  sendAnywayButton.className = "chat-tool-btn";
  sendAnywayButton.title = "Send Anyway";
  sendAnywayButton.style.display = "none";
  let sendAnywayButton_i = document.createElement("i");
  sendAnywayButton_i.className = "btn-icon";
  sendAnywayButton_i.innerHTML = "✉️";
  sendAnywayButton_i.style.fontStyle = "normal";
  sendAnywayButton_i.style.fontSize = "larger";
  sendAnywayButton_i.style.textAlign = "center";
  sendAnywayButton_i.style.textShadow = "0 0 white";

  sendAnywayButton.addEventListener("click", () => {
    // this one to actually send the message
    textarea.dispatchEvent(
      new KeyboardEvent("keypress", {
        key: "Enter",
        keyCode: 13,
        code: "Enter",
        which: 13,
        altKey: true,
      })
    );
    // this one to update the text area
    textarea.dispatchEvent(
      new KeyboardEvent("keyup", {
        key: "Enter",
        keyCode: 13,
        code: "Enter",
        which: 13,
        altKey: true,
      })
    );
  });

  // making a button for embeds
  let embedsButton = document.createElement("a");
  embedsButton.id = "embeds-btn";
  embedsButton.className = "chat-tool-btn";
  embedsButton.title = "Embeds";
  let embedsButton_i = document.createElement("i");
  embedsButton_i.className = "btn-icon";
  if (config.embedIconStyle !== 1) {
    embedsButton_i.innerHTML = "🎬";
  } else {
    embedsButton_i.style.backgroundImage = `url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8' standalone='no'%3F%3E%3Csvg width='25' height='25' viewBox='-25 -10 150 150' version='1.1' id='svg5' xml:space='preserve' xmlns='http://www.w3.org/2000/svg' xmlns:svg='http://www.w3.org/2000/svg'%3E%3Cdefs id='defs2' /%3E%3Cpath style='opacity:1;fill:%23ffffff;fill-opacity:1;stroke-width:0.406658' d='m 92.631299,98.472455 c 0,3.664485 -3.18611,6.614595 -7.14375,6.614595 H 10.399791 c -3.9576372,0 -7.0776042,-3.01626 -7.0776042,-6.680745 0,-8.21058 0.06729,-51.199364 0.06729,-57.368996 L 92.635479,40.896992' id='lower' /%3E%3Crect style='opacity:1;fill:%23ffffff;fill-opacity:1;stroke-width:0.334081' id='upper' width='89.762489' height='14.542242' x='-6.0129457' y='22.639624' transform='matrix(0.96526009,-0.26129094,0.25636721,0.96657946,0,0)' /%3E%3C/svg%3E%0A")`;
  }
  embedsButton_i.style.fontStyle = "normal";
  embedsButton_i.style.fontSize = "larger";
  embedsButton_i.style.textAlign = "center";
  switch (config.embedIconStyle) {
    case 3:
      embedsButton_i.style.filter = "saturate(0)";
      break;
    case 4:
      embedsButton_i.style.color = "transparent";
      embedsButton_i.style.textShadow = "0 0 white";
      break;
  }

  // making an error alert
  let chatWhispersArea = document.querySelectorAll(".chat-tools-group")[0];
  let errorAlert = document.createElement("a");
  errorAlert.id = "error-alert";
  errorAlert.className = "chat-tool-btn";
  errorAlert.title = "Can't connect to vyneer.me";
  errorAlert.style.cursor = "unset";
  errorAlert.style.display = "none";
  let errorAlert_i = document.createElement("i");
  errorAlert_i.className = "btn-icon";
  errorAlert_i.innerHTML = "⚠️";
  errorAlert_i.style.fontStyle = "normal";
  errorAlert_i.style.fontSize = "larger";
  errorAlert_i.style.textAlign = "center";
  errorAlert_i.style.color = "red";
  errorAlert_i.style.opacity = 1;

  // making a button for the nuke alert
  let nukeAlertButton = document.createElement("a");
  nukeAlertButton.id = "nukes-btn";
  nukeAlertButton.className = "chat-tool-btn";
  nukeAlertButton.title = "Nukes";
  nukeAlertButton.style.display = "none";
  if (DEBUG) {
    nukeAlertButton.style.display = "";
  }
  let nukeAlertButton_i = document.createElement("i");
  nukeAlertButton_i.className = "btn-icon";
  nukeAlertButton_i.innerHTML = "☢";
  nukeAlertButton_i.style.fontStyle = "normal";
  nukeAlertButton_i.style.fontSize = "larger";
  nukeAlertButton_i.style.textAlign = "center";
  nukeAlertButton_i.style.color = "yellow";
  nukeAlertButton_i.style.opacity = 1;

  // making a button for the mutelinks alert
  let linksAlertButton = document.createElement("a");
  linksAlertButton.id = "mutelinks-btn";
  linksAlertButton.className = "chat-tool-btn";
  linksAlertButton.title = "Mutelinks";
  linksAlertButton.style.display = "none";
  if (DEBUG) {
    linksAlertButton.style.display = "inline-flex";
  }
  linksAlertButton.style.justifyContent = "center";
  linksAlertButton.style.width = "auto";
  linksAlertButton.style.cursor = "unset";
  let linksAlertButton_i = document.createElement("i");
  linksAlertButton_i.className = "btn-icon";
  linksAlertButton_i.innerHTML = "🔗";
  linksAlertButton_i.style.fontStyle = "normal";
  linksAlertButton_i.style.fontSize = "larger";
  linksAlertButton_i.style.textAlign = "center";
  linksAlertButton_i.style.opacity = 1;
  let linksAlertButton_span = document.createElement("span");
  linksAlertButton_span.className = "btn-icon";
  linksAlertButton_span.innerHTML = "";
  linksAlertButton_span.style.opacity = 1;
  linksAlertButton_span.style.left = "100%";
  linksAlertButton_span.style.color = "#FFF7F9";
  linksAlertButton_span.style.fontSize = "0.75em";
  linksAlertButton_span.style.position = "absolute";
  linksAlertButton_span.style.verticalAlign = "text-button";
  linksAlertButton_span.style.marginLeft = "0.25em";
  linksAlertButton_span.style.top = "4px";

  // make a container for the custom buttons so that we could move em together
  let utilitiesButtons = document.createElement("div");

  // appending buttons to the right area on screen
  sendAnywayButton.appendChild(sendAnywayButton_i);
  embedsButton.appendChild(embedsButton_i);
  errorAlert.appendChild(errorAlert_i);
  nukeAlertButton.appendChild(nukeAlertButton_i);
  linksAlertButton.appendChild(linksAlertButton_i);
  linksAlertButton.appendChild(linksAlertButton_span);
  chatToolsArea.prepend(embedsButton);
  chatToolsArea.prepend(sendAnywayButton);
  utilitiesButtons.appendChild(errorAlert);
  utilitiesButtons.appendChild(nukeAlertButton);
  utilitiesButtons.appendChild(linksAlertButton);
  chatWhispersArea.appendChild(utilitiesButtons);

  // creating the settings page
  // make sure we only create the nanoscroller once
  let settingsInit = false;
  // there's like a billion layers here, very annoying and ugly
  // this is the main one
  let utilSettings = document.createElement("div");
  utilSettings.id = "util-settings";
  utilSettings.className = "chat-menu right";
  document.querySelector("#chat").appendChild(utilSettings);
  // making a button to open the settings menu
  let settingsButton = document.createElement("button");
  settingsButton.id = "util-settings-btn";
  settingsButton.innerHTML = "d.gg utilities settings";
  settingsButton.addEventListener("click", () => {
    // it closes the vanilla chat settings menu first (with a click, to avoid doubleclicks later)
    document.querySelector("#chat-settings-btn").click();
    // show dgg util settings with a class change
    utilSettings.classList.toggle("active");
    // if we havent opened the dgg utils settings pane before, make it scrollable with the nanoscroller thing 
    if (!settingsInit) {
      settingsInit = true;
      $("#util-settings .nano").nanoScroller();
    }
  })
  // make sure we close the settings pane when we click on any of the other buttons in the bottom panel
  document.querySelectorAll("#chat-emoticon-btn, #chat-whisper-btn, #chat-settings-btn, #chat-users-btn").forEach((el) => {
    el.addEventListener("click", () => {
      if (utilSettings.classList.contains("active")) {
        utilSettings.classList.remove("active");
      }
    })
  })
  // make sure we close the settings pane when we click on the bottom panel itself
  document.querySelector("#chat-tools-wrap").addEventListener("click", () => {
    if (utilSettings.classList.contains("active")) {
      utilSettings.classList.remove("active");
    }
  })
  // make sure we close the settings pane when we click on chat
  document.querySelector("#chat-output-frame").addEventListener("click", () => {
    if (utilSettings.classList.contains("active")) {
      utilSettings.classList.remove("active");
    }
  })
  // append the button
  document.querySelector("#chat-settings-form").appendChild(settingsButton);
  // another layer...
  let settingsAreaOuter = document.createElement("div");
  settingsAreaOuter.className = "chat-menu-inner";
  // create the toolbar
  let utilToolbar = document.createElement("div");
  utilToolbar.className = "toolbar";
  let utilToolbarInner = document.createElement("h5");
  let utilToolbarInnerTitle = document.createElement("span");
  utilToolbarInnerTitle.innerHTML = `d.gg utilities v${GM_info.script.version}`;
  utilToolbarInner.appendChild(utilToolbarInnerTitle);
  // create the toolbar close button
  let utilToolbarInnerClose = document.createElement("i");
  utilToolbarInnerClose.className = "chat-menu-close";
  // close the settings pane when clicking on the button
  utilToolbarInnerClose.addEventListener("click", () => {
    utilSettings.classList.remove("active");
  })
  utilToolbarInner.appendChild(utilToolbarInnerClose);
  utilToolbar.appendChild(utilToolbarInner);
  settingsAreaOuter.appendChild(utilToolbar);
  // combined nanoscroller layer
  let nano = document.createElement("div");
  nano.className = "scrollable nano has-scrollbar";
  settingsAreaOuter.appendChild(nano);
  // content layer
  let nanoContent = document.createElement("div");
  nanoContent.className = "content nano-content";
  nanoContent.tabIndex = "0";
  nanoContent.style = "right: -17px;";
  nano.appendChild(nanoContent);
  // finally, our settings area
  let settingsArea = document.createElement("div");
  settingsArea.id = "util-settings-form";
  nanoContent.appendChild(settingsArea);
  utilSettings.appendChild(settingsAreaOuter);
  let title = document.createElement("h4");
  title.innerHTML = `Utilities General Settings`;
  // appending it to the settings menu
  settingsArea.appendChild(title);

  // creating an always scroll down setting
  let alwaysScrollDownGroup = document.createElement("div");
  alwaysScrollDownGroup.className = "form-group checkbox";
  let alwaysScrollDownLabel = document.createElement("label");
  alwaysScrollDownLabel.innerHTML = "Always scroll down chat on button press";
  alwaysScrollDownGroup.appendChild(alwaysScrollDownLabel);
  let alwaysScrollDownCheck = document.createElement("input");
  alwaysScrollDownCheck.name = "alwaysScrollDown";
  alwaysScrollDownCheck.type = "checkbox";
  alwaysScrollDownCheck.checked = config.alwaysScrollDown;
  alwaysScrollDownCheck.addEventListener("change", () => config.alwaysScrollDown = alwaysScrollDownCheck.checked);
  alwaysScrollDownLabel.prepend(alwaysScrollDownCheck);

  // isUsername checks if the given element is a username element (can be usernames in messages themselves or in the list of current users)
  function isUsername(element) {
    return (
      element.classList.contains("user") ||
      element.classList.contains("chat-user")
    );
  }

  function doubleClickCopyListener(event) {
    const target = event.target;

    if (!isUsername(target)) {
      return;
    }

    const username = target.text || target.textContent;

    // if the chat input has some text, and the last character isn't already a space
    if (
      textarea.value.length > 0 &&
      textarea.value.charAt(textarea.value.length - 1) != " "
    ) {
      textarea.value += " ";
    }

    textarea.value += `${username} `;
    textarea.focus();
  }

  // creating a double click to copy setting
  let doubleClickCopyGroup = document.createElement("div");
  doubleClickCopyGroup.className = "form-group checkbox";
  let doubleClickCopyLabel = document.createElement("label");
  doubleClickCopyLabel.innerHTML =
    "Double click username to append it to chat input";
  doubleClickCopyGroup.appendChild(doubleClickCopyLabel);
  let doubleClickCopyCheck = document.createElement("input");
  doubleClickCopyCheck.name = "doubleClickCopy";
  doubleClickCopyCheck.type = "checkbox";
  doubleClickCopyCheck.checked = config.doubleClickCopy;
  doubleClickCopyCheck.addEventListener("change", () => {
    config.doubleClickCopy = doubleClickCopyCheck.checked;
    window.removeEventListener("dblclick", doubleClickCopyListener);
    if (config.doubleClickCopy) {
      // if a username is double clicked copy it to the chat input
      window.addEventListener("dblclick", doubleClickCopyListener);
    }
  });
  if (config.doubleClickCopy) {
    // if a username is double clicked copy it to the chat input
    window.addEventListener("dblclick", doubleClickCopyListener);
  }
  doubleClickCopyLabel.prepend(doubleClickCopyCheck);

  let ogtitle = undefined;
  try {
    ogtitle = window.parent.document.title;
  } catch (e) {
    console.warn(`[WARNING] [dgg-utils] script might be running in cross-origin frame, can't get the og title of the stream, the "change title on live" feature wont work - ${e}`)
  }

  let checkLive = (node) => {
    if (node.textContent === "LIVE") {
      if (!window.parent.document.title.includes("LIVE")) {
        ogtitle = window.parent.document.title;
        window.parent.document.title = `LIVE - ${ogtitle}`;
      } 
    } else {
      window.parent.document.title = ogtitle;
    }
  };

  // make an observer that checks for steve going live
  let liveObserver = new MutationObserver((mutations) => {
    for (let mutation of mutations) {
      for (let node of mutation.addedNodes) {
        if (livePill != undefined) {
          checkLive(node);
        }
      }
    }
  });

  // creating a change title on live setting
  let changeTitleOnLiveGroup = document.createElement("div");
  changeTitleOnLiveGroup.className = "form-group checkbox";
  let changeTitleOnLiveLabel = document.createElement("label");
  changeTitleOnLiveLabel.innerHTML = "Change tab title when Destiny is live";
  changeTitleOnLiveGroup.appendChild(changeTitleOnLiveLabel);
  let changeTitleOnLiveCheck = document.createElement("input");
  changeTitleOnLiveCheck.name = "changeTitleOnLive";
  changeTitleOnLiveCheck.type = "checkbox";
  changeTitleOnLiveCheck.checked = config.changeTitleOnLive;
  changeTitleOnLiveCheck.addEventListener("change", () => {
    config.changeTitleOnLive = changeTitleOnLiveCheck.checked;
    if (config.changeTitleOnLive && livePill != undefined) {
      liveObserver.observe(livePill, {
        childList: true,
      });
    } else {
      liveObserver.disconnect();
    }
  });
  if (config.changeTitleOnLive && livePill != undefined) {
    liveObserver.observe(livePill, {
      childList: true,
    });
  } else {
    liveObserver.disconnect();
  }
  if (config.changeTitleOnLive && livePill != undefined) {
    checkLive(livePill);
  }
  changeTitleOnLiveLabel.prepend(changeTitleOnLiveCheck);

  // creating an embed icon selector setting
  let embedIconStyleGroup = document.createElement("div");
  embedIconStyleGroup.className = "form-group";
  let embedIconStyleLabel = document.createElement("label");
  embedIconStyleLabel.innerHTML = "Embed Button Style";
  embedIconStyleLabel.title = "Select how the embed button looks";
  embedIconStyleLabel.htmlFor = "embedIconStyleSelect";
  embedIconStyleGroup.appendChild(embedIconStyleLabel);
  let embedIconStyleSelect = document.createElement("select");
  embedIconStyleSelect.id = "embedIconStyleSelect";
  embedIconStyleSelect.name = "embedIconStyleSelect";
  embedIconStyleSelect.className = "form-control";

  let embedIconStyleOption1 = document.createElement("option");
  embedIconStyleOption1.value = 1;
  embedIconStyleOption1.innerHTML = "SVG icon";
  embedIconStyleSelect.appendChild(embedIconStyleOption1);

  let embedIconStyleOption2 = document.createElement("option");
  embedIconStyleOption2.value = 2;
  embedIconStyleOption2.innerHTML = "Original movie clapper";
  embedIconStyleSelect.appendChild(embedIconStyleOption2);

  let embedIconStyleOption3 = document.createElement("option");
  embedIconStyleOption3.value = 3;
  embedIconStyleOption3.innerHTML = "Movie clapper with 0 saturation";
  embedIconStyleSelect.appendChild(embedIconStyleOption3);

  let embedIconStyleOption4 = document.createElement("option");
  embedIconStyleOption4.value = 4;
  embedIconStyleOption4.innerHTML = "Movie clapper outline";
  embedIconStyleSelect.appendChild(embedIconStyleOption4);

  embedIconStyleSelect.value = config.embedIconStyle;
  embedIconStyleSelect.addEventListener("change", () => {
    config.embedIconStyle = parseInt(embedIconStyleSelect.value);
    switch (config.embedIconStyle) {
      case 1:
        embedsButton_i.innerHTML = "";
        embedsButton_i.style.backgroundImage = `url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8' standalone='no'%3F%3E%3Csvg width='25' height='25' viewBox='-25 -10 150 150' version='1.1' id='svg5' xml:space='preserve' xmlns='http://www.w3.org/2000/svg' xmlns:svg='http://www.w3.org/2000/svg'%3E%3Cdefs id='defs2' /%3E%3Cpath style='opacity:1;fill:%23ffffff;fill-opacity:1;stroke-width:0.406658' d='m 92.631299,98.472455 c 0,3.664485 -3.18611,6.614595 -7.14375,6.614595 H 10.399791 c -3.9576372,0 -7.0776042,-3.01626 -7.0776042,-6.680745 0,-8.21058 0.06729,-51.199364 0.06729,-57.368996 L 92.635479,40.896992' id='lower' /%3E%3Crect style='opacity:1;fill:%23ffffff;fill-opacity:1;stroke-width:0.334081' id='upper' width='89.762489' height='14.542242' x='-6.0129457' y='22.639624' transform='matrix(0.96526009,-0.26129094,0.25636721,0.96657946,0,0)' /%3E%3C/svg%3E%0A")`;
        break;

      case 2:
        embedsButton_i.innerHTML = "🎬";
        embedsButton_i.style.backgroundImage = "none";
        embedsButton_i.style.filter = "";
        embedsButton_i.style.color = "";
        embedsButton_i.style.textShadow = "";
        break;

      case 3:
        embedsButton_i.innerHTML = "🎬";
        embedsButton_i.style.backgroundImage = "";
        embedsButton_i.style.filter = "saturate(0)";
        embedsButton_i.style.color = "";
        embedsButton_i.style.textShadow = "";
        break;

      case 4:
        embedsButton_i.innerHTML = "🎬";
        embedsButton_i.style.backgroundImage = "";
        embedsButton_i.style.filter = "";
        embedsButton_i.style.color = "transparent";
        embedsButton_i.style.textShadow = "0 0 white";
        break;
    }
  });

  embedIconStyleGroup.appendChild(embedIconStyleSelect);

  // creating a show last steve vod setting
  let showLastVODGroup = document.createElement("div");
  showLastVODGroup.className = "form-group checkbox";
  let showLastVODLabel = document.createElement("label");
  showLastVODLabel.innerHTML = "Show Destiny's last vod when you check embeds";
  showLastVODGroup.appendChild(showLastVODLabel);
  let showLastVODCheck = document.createElement("input");
  showLastVODCheck.name = "showLastVOD";
  showLastVODCheck.type = "checkbox";
  showLastVODCheck.checked = config.showLastVOD;
  showLastVODCheck.addEventListener("change", () => config.showLastVOD = showLastVODCheck.checked);
  showLastVODLabel.prepend(showLastVODCheck);

  // creating a show embeds on connect setting
  let embedsOnLaunchGroup = document.createElement("div");
  embedsOnLaunchGroup.className = "form-group checkbox";
  let embedsOnLaunchLabel = document.createElement("label");
  embedsOnLaunchLabel.innerHTML = "Automatically show embeds on chat connect";
  embedsOnLaunchGroup.appendChild(embedsOnLaunchLabel);
  let embedsOnLaunchCheck = document.createElement("input");
  embedsOnLaunchCheck.name = "embedsOnLaunch";
  embedsOnLaunchCheck.type = "checkbox";
  embedsOnLaunchCheck.checked = config.embedsOnLaunch;
  embedsOnLaunchCheck.addEventListener("change", () => config.embedsOnLaunch = embedsOnLaunchCheck.checked);
  embedsOnLaunchLabel.prepend(embedsOnLaunchCheck);

  // creating a latest embeds value setting
  let lastEmbedsGroup = document.createElement("div");
  lastEmbedsGroup.className = "form-group checkbox";
  let lastEmbedsLabel = document.createElement("label");
  lastEmbedsLabel.innerHTML = "Show 5 latest embeds, instead of top 5";
  lastEmbedsGroup.appendChild(lastEmbedsLabel);
  let lastEmbedsCheck = document.createElement("input");
  lastEmbedsCheck.name = "lastEmbeds";
  lastEmbedsCheck.type = "checkbox";
  lastEmbedsCheck.checked = config.lastEmbeds;
  lastEmbedsCheck.addEventListener("change", () => config.lastEmbeds = lastEmbedsCheck.checked);
  lastEmbedsLabel.prepend(lastEmbedsCheck);

  // creating a show last embeds if none in x minutes setting
  let lastIfNoneGroup = document.createElement("div");
  lastIfNoneGroup.className = "form-group checkbox";
  let lastIfNoneLabel = document.createElement("label");
  lastIfNoneLabel.innerHTML =
    "Show 5 latest embeds if no one embedded anything recently";
  lastIfNoneGroup.appendChild(lastIfNoneLabel);
  let lastIfNoneCheck = document.createElement("input");
  lastIfNoneCheck.name = "lastIfNone";
  lastIfNoneCheck.type = "checkbox";
  lastIfNoneCheck.checked = config.lastIfNone;
  lastIfNoneCheck.addEventListener("change", () => config.lastIfNone = lastIfNoneCheck.checked);
  lastIfNoneLabel.prepend(lastIfNoneCheck);

  // creating an embed time value setting
  let embedTimeGroup = document.createElement("div");
  embedTimeGroup.className = "form-group row";
  let embedTimeLabel = document.createElement("label");
  embedTimeLabel.innerHTML = "Embed Time Span";
  embedTimeLabel.title = "Show embeds from the last amount of minutes that this is set to";
  embedTimeLabel.style.marginBottom = 0;
  embedTimeGroup.appendChild(embedTimeLabel);
  let embedTimeArea = document.createElement("input");
  embedTimeArea.name = "embedTimeArea";
  embedTimeArea.type = "number";
  embedTimeArea.className = "form-control";
  embedTimeArea.max = 60;
  embedTimeArea.min = 5;
  embedTimeArea.placeholder = "5 to 60 minutes";
  embedTimeArea.value = config.embedTime;
  embedTimeArea.style.width = "120px";
  embedTimeArea.style.marginLeft = ".6em";
  embedTimeArea.addEventListener("change", () => config.embedTime = embedTimeArea.value);
  embedTimeGroup.appendChild(embedTimeArea);

  // creating an twitch embed formatting setting
  let twitchEmbedFormatGroup = document.createElement("div");
  twitchEmbedFormatGroup.className = "form-group";
  let twitchEmbedFormatLabel = document.createElement("label");
  twitchEmbedFormatLabel.innerHTML = "Twitch Embed Formatting";
  twitchEmbedFormatLabel.title = "Select how to format the Twitch embeds";
  twitchEmbedFormatLabel.htmlFor = "embedFormatSelect";
  twitchEmbedFormatGroup.appendChild(twitchEmbedFormatLabel);
  let twitchEmbedFormatSelect = document.createElement("select");
  twitchEmbedFormatSelect.id = "embedFormatSelect";
  twitchEmbedFormatSelect.name = "embedFormatSelect";
  twitchEmbedFormatSelect.className = "form-control";

  let twitchEmbedFormatOption1 = document.createElement("option");
  twitchEmbedFormatOption1.value = 1;
  twitchEmbedFormatOption1.innerHTML = "#twitch/xqcow";
  twitchEmbedFormatSelect.appendChild(twitchEmbedFormatOption1);

  let twitchEmbedFormatOption2 = document.createElement("option");
  twitchEmbedFormatOption2.value = 2;
  twitchEmbedFormatOption2.innerHTML =
    "#twitch/xqcow (BEST ONE ONLY TOP CRAZED ALWAYS TODAY OK MAYBE YES RIGHT NOW...)";
  twitchEmbedFormatSelect.appendChild(twitchEmbedFormatOption2);

  twitchEmbedFormatSelect.value = config.twitchEmbedFormat;
  twitchEmbedFormatSelect.addEventListener("change", () => config.twitchEmbedFormat = parseInt(twitchEmbedFormatSelect.value));

  twitchEmbedFormatGroup.appendChild(twitchEmbedFormatSelect);

  // creating an yt embed formatting setting
  let youtubeEmbedFormatGroup = document.createElement("div");
  youtubeEmbedFormatGroup.className = "form-group";
  let youtubeEmbedFormatLabel = document.createElement("label");
  youtubeEmbedFormatLabel.innerHTML = "YouTube Embed Formatting";
  youtubeEmbedFormatLabel.title = "Select how to format the YouTube embeds";
  youtubeEmbedFormatLabel.htmlFor = "embedFormatSelect";
  youtubeEmbedFormatGroup.appendChild(youtubeEmbedFormatLabel);
  let youtubeEmbedFormatSelect = document.createElement("select");
  youtubeEmbedFormatSelect.id = "embedFormatSelect";
  youtubeEmbedFormatSelect.name = "embedFormatSelect";
  youtubeEmbedFormatSelect.className = "form-control";

  let youtubeEmbedFormatOption1 = document.createElement("option");
  youtubeEmbedFormatOption1.value = 1;
  youtubeEmbedFormatOption1.innerHTML = "#youtube/6RQA9GZprqM";
  youtubeEmbedFormatSelect.appendChild(youtubeEmbedFormatOption1);

  let youtubeEmbedFormatOption2 = document.createElement("option");
  youtubeEmbedFormatOption2.value = 2;
  youtubeEmbedFormatOption2.innerHTML = "#youtube/6RQA9GZprqM (Destiny)";
  youtubeEmbedFormatSelect.appendChild(youtubeEmbedFormatOption2);

  let youtubeEmbedFormatOption3 = document.createElement("option");
  youtubeEmbedFormatOption3.value = 3;
  youtubeEmbedFormatOption3.innerHTML =
    "#youtube/6RQA9GZprqM (Debating JonTron)";
  youtubeEmbedFormatSelect.appendChild(youtubeEmbedFormatOption3);

  let youtubeEmbedFormatOption4 = document.createElement("option");
  youtubeEmbedFormatOption4.value = 4;
  youtubeEmbedFormatOption4.innerHTML = "#youtube/Destiny";
  youtubeEmbedFormatSelect.appendChild(youtubeEmbedFormatOption4);

  let youtubeEmbedFormatOption5 = document.createElement("option");
  youtubeEmbedFormatOption5.value = 5;
  youtubeEmbedFormatOption5.innerHTML = "#youtube/Debating JonTron";
  youtubeEmbedFormatSelect.appendChild(youtubeEmbedFormatOption5);

  youtubeEmbedFormatSelect.value = config.youtubeEmbedFormat;
  youtubeEmbedFormatSelect.addEventListener("change", () => config.youtubeEmbedFormat = parseInt(youtubeEmbedFormatSelect.value));

  youtubeEmbedFormatGroup.appendChild(youtubeEmbedFormatSelect);

  // creating an phrase textarea color setting
  let phraseColorGroup = document.createElement("div");
  phraseColorGroup.className = "form-group row";
  let phraseColorLabel = document.createElement("label");
  phraseColorLabel.innerHTML = "Text area color on banned phrase";
  phraseColorLabel.title =
    "The color that text area changes when you type a banned phrase";
  phraseColorLabel.style.marginBottom = 0;
  phraseColorGroup.appendChild(phraseColorLabel);
  let phraseColorArea = document.createElement("input");
  phraseColorArea.name = "phraseColorArea";
  phraseColorArea.type = "text";
  phraseColorArea.className = "form-control";
  phraseColorArea.placeholder = configItems.phraseColor.defaultValue;
  phraseColorArea.value = config.phraseColor;
  phraseColorArea.style.marginLeft = ".6em";
  phraseColorArea.style.width = "60px";
  phraseColorArea.style.backgroundColor = `#${config.phraseColor}`;
  phraseColorArea.addEventListener("change", () => {
    if (phraseColorArea.value.length > 0) {
      config.phraseColor = phraseColorArea.value;
		phraseColorArea.style.backgroundColor = `#${config.phraseColor}`;
    } else {
      config.phraseColor = configItems.phraseColor.defaultValue;
    }
  });
  phraseColorGroup.appendChild(phraseColorArea);

  // creating an nuke textarea color setting
  let nukeColorGroup = document.createElement("div");
  nukeColorGroup.className = "form-group row";
  let nukeColorLabel = document.createElement("label");
  nukeColorLabel.innerHTML = "Text area color on nuked phrase";
  nukeColorLabel.title =
    "The color that text area changes when you type a nuked phrase";
  nukeColorLabel.style.marginBottom = 0;
  nukeColorGroup.appendChild(nukeColorLabel);
  let nukeColorArea = document.createElement("input");
  nukeColorArea.name = "nukeColorArea";
  nukeColorArea.type = "text";
  nukeColorArea.className = "form-control";
  nukeColorArea.placeholder = configItems.nukeColor.defaultValue;
  nukeColorArea.value = config.nukeColor;
  nukeColorArea.style.marginLeft = ".6em";
  nukeColorArea.style.width = "60px";
  nukeColorArea.style.backgroundColor = `#${config.nukeColor}`;
  nukeColorArea.addEventListener("change", () => {
    if (nukeColorArea.value.length > 0) {
      config.nukeColor = nukeColorArea.value;
		nukeColorArea.style.backgroundColor = `#${config.nukeColor}`;
    } else {
      config.nukeColor = configItems.nukeColor.defaultValue;
    }
  });
  nukeColorGroup.appendChild(nukeColorArea);

  // creating a setting to color the textarea if mutelinks is on and you typed a link
  let colorOnMutelinksGroup = document.createElement("div");
  colorOnMutelinksGroup.className = "form-group checkbox";
  let colorOnMutelinksLabel = document.createElement("label");
  colorOnMutelinksLabel.innerHTML = "Color the text area if you type a link when mutelinks is on (not every link gets detected)";
  colorOnMutelinksLabel.title =
    "Keep in mind that it doesn't detect every single possible link, so be careful anyway";
  colorOnMutelinksGroup.appendChild(colorOnMutelinksLabel);
  let colorOnMutelinksCheck = document.createElement("input");
  colorOnMutelinksCheck.name = "colorOnMutelinks";
  colorOnMutelinksCheck.type = "checkbox";
  colorOnMutelinksCheck.checked = config.colorOnMutelinks;
  colorOnMutelinksCheck.addEventListener("change", () => config.colorOnMutelinks = colorOnMutelinksCheck.checked);
  colorOnMutelinksLabel.prepend(colorOnMutelinksCheck);

  // creating an phrase textarea color setting
  let mutelinksColorGroup = document.createElement("div");
  mutelinksColorGroup.className = "form-group row";
  let mutelinksColorLabel = document.createElement("label");
  mutelinksColorLabel.innerHTML = "Text area color when mutelinks is on";
  mutelinksColorLabel.title =
    "The color that text area changes when mutelinks is on";
  mutelinksColorLabel.style.marginBottom = 0;
  mutelinksColorGroup.appendChild(mutelinksColorLabel);
  let mutelinksColorArea = document.createElement("input");
  mutelinksColorArea.name = "mutelinksColorArea";
  mutelinksColorArea.type = "text";
  mutelinksColorArea.className = "form-control";
  mutelinksColorArea.placeholder = configItems.mutelinksColor.defaultValue;
  mutelinksColorArea.value = config.mutelinksColor;
  mutelinksColorArea.style.marginLeft = ".6em";
  mutelinksColorArea.style.width = "60px";
  mutelinksColorArea.style.backgroundColor = `#${config.mutelinksColor}`;
  mutelinksColorArea.addEventListener("change", () => {
    if (mutelinksColorArea.value.length > 0) {
      config.mutelinksColor = mutelinksColorArea.value;
		mutelinksColorArea.style.backgroundColor = `#${config.mutelinksColor}`;
    } else {
      config.mutelinksColor = configItems.mutelinksColor.defaultValue;
    }
  });
  mutelinksColorGroup.appendChild(mutelinksColorArea);

  // creating a custom phrases setting
  let customPhrasesGroup = document.createElement("div");
  customPhrasesGroup.className = "form-group row";
  let customPhrasesLabel = document.createElement("label");
  customPhrasesLabel.innerHTML = "Custom Alert Phrases";
  customPhrasesLabel.title =
    "Phrases that will color the input area red if you type them in";
  customPhrasesGroup.appendChild(customPhrasesLabel);
  let customPhrasesArea = document.createElement("textarea");
  customPhrasesArea.style.resize = "vertical";
  customPhrasesArea.className = "form-control";
  customPhrasesArea.placeholder = "Comma separated ... (regex not supported)";
  customPhrasesArea.value =
    config.customPhrases == "[]" ? "" : config.customPhrases;
  customPhrasesArea.addEventListener("change", () => {
    let val = customPhrasesArea.value.split(",");
    if (customPhrasesArea.value.length > 0) {
      config.customPhrases = val;
    } else {
      config.customPhrases = configItems.customPhrases.defaultValue;
    }
  });
  customPhrasesGroup.appendChild(customPhrasesArea);

  // creating a custom soft phrases setting
  let customPhrasesSoftGroup = document.createElement("div");
  customPhrasesSoftGroup.className = "form-group row";
  let customPhrasesSoftLabel = document.createElement("label");
  customPhrasesSoftLabel.innerHTML = "Custom Soft Alert Phrases";
  customPhrasesSoftLabel.title =
      "Phrases that will color the input area red if you type them in (exact match)";
  customPhrasesSoftGroup.appendChild(customPhrasesSoftLabel);
  let customPhrasesSoftArea = document.createElement("textarea");
  customPhrasesSoftArea.style.resize = "vertical";
  customPhrasesSoftArea.className = "form-control";
  customPhrasesSoftArea.placeholder =
      "Comma separated ... (regex not supported)";
  customPhrasesSoftArea.value =
      config.customPhrasesSoft == "[]" ? "" : config.customPhrasesSoft;
  customPhrasesSoftArea.addEventListener("change", () => {
      let val = customPhrasesSoftArea.value.split(",");
      if (customPhrasesSoftArea.value.length > 0) {
          config.customPhrasesSoft = val;
      } else {
          config.customPhrasesSoft =
              configItems.customPhrasesSoft.defaultValue;
      }
  });
  customPhrasesSoftGroup.appendChild(customPhrasesSoftArea);
  
  // creating an custom phrase textarea color setting
  let customColorGroup = document.createElement("div");
  customColorGroup.className = "form-group row";
  let customColorLabel = document.createElement("label");
  customColorLabel.innerHTML = "Text area color on custom phrase";
  customColorLabel.title =
    "The color that text area changes when you type a custom phrase";
  customColorLabel.style.marginBottom = 0;
  customColorGroup.appendChild(customColorLabel);
  let customColorArea = document.createElement("input");
  customColorArea.name = "customColorArea";
  customColorArea.type = "text";
  customColorArea.className = "form-control";
  customColorArea.placeholder = configItems.customColor.defaultValue;
  customColorArea.value = config.customColor;
  customColorArea.style.marginLeft = ".6em";
  customColorArea.style.width = "60px";
  customColorArea.style.backgroundColor = `#${config.customColor}`;
  customColorArea.addEventListener("change", () => {
    if (customColorArea.value.length > 0) {
      config.customColor = customColorArea.value;
		customColorArea.style.backgroundColor = `#${config.customColor}`;
    } else {
      config.customColor = configItems.customColor.defaultValue;
    }
  });
  customColorGroup.appendChild(customColorArea);

  // creating an custom soft phrase textarea color setting
  let customSoftColorGroup = document.createElement("div");
  customSoftColorGroup.className = "form-group row";
  let customSoftColorLabel = document.createElement("label");
  customSoftColorLabel.innerHTML = "Text area color on custom soft phrase";
  customSoftColorLabel.title =
      "The color that text area changes when you type a custom soft phrase";
  customSoftColorLabel.style.marginBottom = 0;
  customSoftColorGroup.appendChild(customSoftColorLabel);
  let customSoftColorArea = document.createElement("input");
  customSoftColorArea.name = "customSoftColorArea";
  customSoftColorArea.type = "text";
  customSoftColorArea.className = "form-control";
  customSoftColorArea.placeholder = configItems.customSoftColor.defaultValue;
  customSoftColorArea.value = config.customSoftColor;
  customSoftColorArea.style.marginLeft = ".6em";
  customSoftColorArea.style.width = "60px";
  customSoftColorArea.style.backgroundColor = `#${config.customSoftColor}`;
  customSoftColorArea.addEventListener("change", () => {
      if (customSoftColorArea.value.length > 0) {
          config.customSoftColor = customSoftColorArea.value;
          customSoftColorArea.style.backgroundColor = `#${config.customSoftColor}`;
      } else {
          config.customSoftColor = configItems.customSoftColor.defaultValue;
      }
  });
  customSoftColorGroup.appendChild(customSoftColorArea);

  // make an observer that checks for embeds
  let embedObserver = new MutationObserver((mutations) => {
    if (config.youtubeEmbedFormat != 1 && mutations.length < 3) {
      for (let mutation of mutations) {
        for (let node of mutation.addedNodes) {
          if (node.matches("div.msg-chat.msg-user")) {
            node
              .querySelectorAll(".externallink.bookmarklink")
              .forEach((embedNode) => {
                let embedString = embedNode.text;
                let embedSplit = embedString.split("/");
                let platform = embedSplit[0];
                let id = embedSplit[1];

                switch (platform) {
                  case "#youtube":
                    GM.xmlHttpRequest({
                      method: "GET",
                      url: `https://www.youtube.com/oembed?format=json&url=https://youtu.be/${id}`,
                      onload: (response) => {
                        if (errorAlert.style.display == "") {
                          errorAlert.style.display = "none";
                        }
                        if (response.status == 200) {
                          let data = JSON.parse(response.response);
                          if ("title" in data && "author_name" in data) {
                            let title = data["title"];
                            let channel = data["author_name"];
                            switch (config.youtubeEmbedFormat) {
                              case 2:
                                embedNode.text = `${platform}/${id} (${channel})`;
                                break;
                              case 3:
                                embedNode.text = `${platform}/${id} (${title})`;
                                break;
                              case 4:
                                embedNode.text = `${platform}/${channel}`;
                                break;
                              case 5:
                                embedNode.text = `${platform}/${title}`;
                                break;
                            }
                          }
                        } else {
                          console.error(`[ERROR] [dgg-utils] couldn't get the youtube oEmbed data - HTTP status code: ${response.status} - ${response.statusText}`);
                        }
                      },
                      onerror: () => {
                        errorAlert.style.display = "";
                        console.error(`[ERROR] [dgg-utils] couldn't get the youtube oEmbed data - HTTP error`);
                      },
                      ontimeout: () => {
                        errorAlert.style.display = "";
                        console.error(`[ERROR] [dgg-utils] couldn't get the youtube oEmbed data - HTTP timeout`);
                      }
                    });
                    break;
                }
              });
          }
        }
      }
    }
  });

  // creating an edit embeds setting
  let editEmbedsGroup = document.createElement("div");
  editEmbedsGroup.className = "form-group checkbox";
  let editEmbedsLabel = document.createElement("label");
  editEmbedsLabel.innerHTML =
    "Format YouTube embeds directly in messages according to Utilities settings";
  editEmbedsGroup.appendChild(editEmbedsLabel);
  let editEmbedsCheck = document.createElement("input");
  editEmbedsCheck.name = "editEmbeds";
  editEmbedsCheck.type = "checkbox";
  editEmbedsCheck.checked = config.editEmbeds;
  editEmbedsCheck.addEventListener("change", () => {
    config.editEmbeds = editEmbedsCheck.checked;
    if (config.editEmbeds) {
      embedObserver.observe(chatlines, {
        childList: true,
      });
    } else {
      embedObserver.disconnect();
    }
  });
  if (config.editEmbeds) {
    embedObserver.observe(chatlines, {
      childList: true,
    });
  } else {
    embedObserver.disconnect();
  }
  editEmbedsLabel.prepend(editEmbedsCheck);

  // creating a setting to prevent enter from working if you have a banned phrase in the message
  let preventEnterGroup = document.createElement("div");
  preventEnterGroup.className = "form-group checkbox";
  let preventEnterLabel = document.createElement("label");
  preventEnterLabel.innerHTML =
    "Prevent Enter from working if you have a banned phrase in the message";
  preventEnterGroup.appendChild(preventEnterLabel);
  let preventEnterCheck = document.createElement("input");
  preventEnterCheck.name = "preventEnter";
  preventEnterCheck.type = "checkbox";
  preventEnterCheck.checked = config.preventEnter;
  preventEnterCheck.addEventListener("change", () => config.preventEnter = preventEnterCheck.checked);
  preventEnterLabel.prepend(preventEnterCheck);

  // creating hide invidual flairs setting
  const flairs = getAllFlairIds();
  // creates flair1-flair50
  function getAllFlairIds() {
    const flairIds = [];
    for (let i = 1; i <= 50; i++) {
      flairIds.push(`flair${i}`);
    }
    // Add other flair names
    flairIds.push("bot");
    return flairIds;
  }
  // removes any flairs, previously created, that don't have style rules associated with them
  function removeUnusedFlairs() {
    const toRemove = [];
    for (let f of hideFlairsList.children) {
      if (getComputedStyle(f).backgroundImage == "none") {
        toRemove.push(f);
      }
    }
    for (let f of toRemove) {
      f.remove();
    }
  }
  function flairToButton(flair) {
    const isHidden = config.hiddenFlairs.includes(flair);
    return `<span class="flair-selector flair ${flair} ${
      isHidden ? "hide-flair" : ""
    }" data-flair-id="${flair}"></span>`;
  }
  function toggleFlair(target) {
    if (!target.classList.contains("flair-selector")) return;
    const hideFlair = target.classList.toggle("hide-flair");
    const targetFlairId = target.dataset.flairId;
    // Save to config
    if (hideFlair) {
      // Add flair to hide list
      config.hiddenFlairs = [...config.hiddenFlairs, targetFlairId];
    } else {
      // Remove flair from hide list
      config.hiddenFlairs = config.hiddenFlairs.filter((f) => f !== targetFlairId);
    }
    // Change CSS to hide chosen flairs
    addFlairHidingStyles();
  }
  function addFlairHidingStyles() {
    const styleId = "vyneer-util-hide-flair-style";
    let styleElem = document.getElementById(styleId);
    if (styleElem === null) {
      styleElem = document.createElement("style");
      styleElem.id = styleId;
      document.head.appendChild(styleElem);
    }
    styleElem.innerHTML = config.hiddenFlairs.reduce(
      (prev, curr) => prev + `.msg-chat .flair.${curr} { display: none; }\n`,
      ""
    );
  }
  const hideFlairsGroup = document.createElement("div");
  hideFlairsGroup.className = "form-group row";
  const hideFlairsLabel = document.createElement("label");
  hideFlairsLabel.classList.add("hide-flairs-label");
  hideFlairsLabel.innerHTML = "Hide Individual Flairs";
  hideFlairsLabel.title = "Select flairs to hide (Click to expand)";
  const hideFlairsList = document.createElement("div");
  hideFlairsList.classList.add("hide-flairs-list");
  hideFlairsList.innerHTML = flairs.reduce(
    (prev, curr) => prev + flairToButton(curr),
    ""
  );
  hideFlairsList.addEventListener("click", (e) => toggleFlair(e.target));
  hideFlairsLabel.addEventListener("click", (e) =>
    hideFlairsList.classList.toggle(
      "expanded",
      hideFlairsLabel.classList.toggle("expanded")
    )
  );
  hideFlairsGroup.appendChild(hideFlairsLabel);
  hideFlairsGroup.appendChild(hideFlairsList);
  settingsCss += `
    .hide-flairs-label {
      position: relative;
      cursor: pointer;
    }
    .hide-flairs-label:hover {
      filter: brightness(1.5);
    }
    .hide-flairs-label::after {
      content: '›';
      margin-left: 5px;
      font-size: 150%;
      position: absolute;
      top: -6px;
      font-weight: bold;
      transition: transform 100ms ease-in-out;
    }
    .hide-flairs-label.expanded::after {
      transform: translate(2px, 2px) rotate(90deg);
    }
    .hide-flairs-list {
      margin: 0px 10px;
      display: grid;
      grid-template-columns: repeat(10, 1fr);
      gap: 4px;
      transition: transform 200ms ease-in-out;
      transform-origin: top center;
      overflow: hidden;
    }
    .hide-flairs-list:not(.expanded) {
      transform: scaleY(0);
      height: 0;
    }
    .flair-selector {
      display: inline-block;
      margin: 2px;
      cursor: pointer;
    }
    .flair-selector:hover {
      opacity: 0.75;
    }
    .flair-selector.hide-flair::after {
      content: '❌';
      position: absolute;
    }
  `;
  addFlairHidingStyles();
  // Wait 2 seconds for CSS to load to test/remove unused flairs
  setTimeout(removeUnusedFlairs, 2000); // it would be nice to have a better way to get flairs

  // creating a setting to toggle mentioned being stuck to top of window when scrolled past
  const stickyMentionsGroup = document.createElement("div");
  stickyMentionsGroup.className = "form-group checkbox";
  const stickyMentionsLabel = document.createElement("label");
  stickyMentionsLabel.innerHTML = "Stick recent mentions to top of chat";
  stickyMentionsLabel.title = "Keeps recent mentions stuck to top of chat when scrolled past";
  stickyMentionsGroup.appendChild(stickyMentionsLabel);
  const stickyMentionsCheck = document.createElement("input");
  stickyMentionsCheck.name = "stickyMentions";
  stickyMentionsCheck.type = "checkbox";
  stickyMentionsCheck.checked = config.stickyMentions;
  function toggleStickyMentions(toggle) {
    document
      .getElementById("chat-win-main")
      .classList
      .toggle("vyneer-util-sticky-mentions-on", toggle);
  }
  stickyMentionsCheck.addEventListener("change", () => {
    config.stickyMentions = stickyMentionsCheck.checked;
    toggleStickyMentions(config.stickyMentions);
  });
  stickyMentionsLabel.prepend(stickyMentionsCheck);
  settingsCss += `
    #chat-win-main.vyneer-util-sticky-mentions-on .msg-highlight {
      position: sticky;
      top: 0px;
      z-index: 121;
      border-bottom-style: inset;
      border-bottom-width: 2px;
      border-bottom-color: #080808;
    }
  `;
  toggleStickyMentions(config.stickyMentions);

  // Ignored phrases
  const ignoredPhrasesGroup = document.createElement("div");
  ignoredPhrasesGroup.className = "form-group checkbox";
  const ignoredPhrasesLabel = document.createElement("label");
  ignoredPhrasesLabel.innerHTML = "Ignore Phrases";
  ignoredPhrasesLabel.title = "Messages containing these phrases will be hidden";
  ignoredPhrasesGroup.appendChild(ignoredPhrasesLabel);
  const ignoredPhrasesCheck = document.createElement("input");
  ignoredPhrasesCheck.name = "ignorePhrases";
  ignoredPhrasesCheck.type = "checkbox";
  ignoredPhrasesCheck.checked = config.ignorePhrases;
  ignoredPhrasesLabel.prepend(ignoredPhrasesCheck);
  const ignoredPhrasesArea = document.createElement("textarea");
  ignoredPhrasesArea.style.resize = "vertical";
  ignoredPhrasesArea.className = "form-control";
  ignoredPhrasesArea.placeholder = "Comma separated ... (regex not supported)";
  ignoredPhrasesArea.value = config.ignoredPhraseList == "[]" ? "" : config.ignoredPhraseList.join(", ");
  ignoredPhrasesGroup.appendChild(ignoredPhrasesArea);

  // Functions //
  function toggleIgnoredPhrases() {
    document
      .getElementById("chat-win-main")
      .classList
      .toggle("vyneer-util-ignored-phrases-on", config.ignorePhrases);

    // Observe or disconnect mutation observer
    if (config.ignorePhrases && config.ignoredPhraseList.length > 0) {
      ignoredPhrasesObserver.observe(chatlines, {
        childList: true,
      });
    } else {
      ignoredPhrasesObserver.disconnect();
    }

    // Go through chat messages that observer might have missed while disconnected or if phrase list changed
    markMessagesContainingIgnoredPhrases(chatlines.children, config.ignoredPhraseList);
  }
  function markMessagesContainingIgnoredPhrases(messages, ignoredPhrases) {
    for (let i = 0; i < messages.length; i++) {
      let ignored = false;
      const messageText = messages[i]
        .getElementsByClassName("text")[0]
        ?.innerText
        ?.toLowerCase();
      if (messageText) {
        for (let j = 0; j < ignoredPhrases.length; j++) {
          if (messageText.includes(ignoredPhrases[j])) {
            ignored = true;
            break;
          }
        }
      }
      messages[i].classList.toggle("ignored-phrase", ignored);
    }
  }

  // Event listeners //
  ignoredPhrasesCheck.addEventListener("change", e => {
    config.ignorePhrases = ignoredPhrasesCheck.checked;
    toggleIgnoredPhrases();
  });
  ignoredPhrasesArea.addEventListener("change", () => {
    const phrases = ignoredPhrasesArea.value.split(",");
    if (ignoredPhrasesArea.value.length > 0) {
      phrasesCleaned = phrases
        .map(p => p.trim().toLowerCase())
        .filter(p => p !== "");
      config.ignoredPhraseList = phrasesCleaned;
    } else {
      config.ignoredPhraseList = configItems.ignoredPhraseList.defaultValue;
    }
    toggleIgnoredPhrases();
  });

  // Mutation Observer setup
  const ignoredPhrasesObserver = new MutationObserver((mutations) => {
    for (let i = 0; i < mutations.length; i++) {
      const addedNodes = mutations[i].addedNodes;
      markMessagesContainingIgnoredPhrases(addedNodes, config.ignoredPhraseList);
    }
  });
  toggleIgnoredPhrases();

  settingsCss += `
    #chat-win-main.vyneer-util-ignored-phrases-on > .chat-lines > .msg-chat.ignored-phrase:not(.msg-own) {
      display: none;
    }
  `;

  // Add our settings' styles to the document
  const settingsStyles = document.createElement("style");
  settingsStyles.id = "vyneer-util-styles";
  settingsStyles.innerHTML = settingsCss;
  document.head.appendChild(settingsStyles);

  // appending all the settings to our area
  settingsArea.appendChild(alwaysScrollDownGroup);
  settingsArea.appendChild(doubleClickCopyGroup);
  let embedsTitle = document.createElement("h4");
  embedsTitle.innerHTML = "Utilities Embeds Settings";
  settingsArea.appendChild(changeTitleOnLiveGroup);
  settingsArea.appendChild(stickyMentionsGroup);
  settingsArea.appendChild(embedIconStyleGroup);
  settingsArea.appendChild(hideFlairsGroup);
  settingsArea.appendChild(embedsTitle);
  settingsArea.appendChild(showLastVODGroup);
  settingsArea.appendChild(embedsOnLaunchGroup);
  settingsArea.appendChild(lastEmbedsGroup);
  settingsArea.appendChild(lastIfNoneGroup);
  settingsArea.appendChild(embedTimeGroup);
  settingsArea.appendChild(twitchEmbedFormatGroup);
  settingsArea.appendChild(youtubeEmbedFormatGroup);
  let phrasesTitle = document.createElement("h4");
  phrasesTitle.innerHTML = "Utilities Phrases Settings";
  settingsArea.appendChild(phrasesTitle);
  settingsArea.appendChild(colorOnMutelinksGroup);
  settingsArea.appendChild(phraseColorGroup);
  settingsArea.appendChild(nukeColorGroup);
  settingsArea.appendChild(mutelinksColorGroup);
  settingsArea.appendChild(customPhrasesGroup);
  settingsArea.appendChild(customPhrasesSoftGroup);
  settingsArea.appendChild(customColorGroup);
  settingsArea.appendChild(customSoftColorGroup);
  let experimentalTitle = document.createElement("h4");
  experimentalTitle.innerHTML = "Utilities Experimental Settings";
  experimentalTitle.style.marginBottom = "0px";
  let experimentalSubTitle = document.createElement("h4");
  experimentalSubTitle.innerHTML = "May impact performance!";
  experimentalSubTitle.style.color = "orangered";
  experimentalSubTitle.style.marginTop = "0px";
  settingsArea.appendChild(experimentalTitle);
  settingsArea.appendChild(experimentalSubTitle);
  settingsArea.appendChild(ignoredPhrasesGroup);
  settingsArea.appendChild(preventEnterGroup);
  settingsArea.appendChild(editEmbedsGroup);

  // https://www.npmjs.com/package/text-ellipsis
  // cut off a string if too long
  function textEllipsis(
    str,
    maxLength,
    { side = "end", ellipsis = "..." } = {}
  ) {
    if (str.length > maxLength) {
      switch (side) {
        case "start":
          return ellipsis + str.slice(-(maxLength - ellipsis.length));
        case "end":
        default:
          return str.slice(0, maxLength - ellipsis.length) + ellipsis;
      }
    }
    return str;
  }

  // formatter for embed links
  // https://github.com/destinygg/chat-gui/blob/master/assets/chat/js/formatters.js
  class EmbedUrlFormatter {
    constructor() {
      this.bigscreenPath = "/bigscreen";
      this.bigscreenregex = new RegExp(
        /(^|\s)((#twitch|#twitch-vod|#twitch-clip|#youtube|(?:https:\/\/|http:\/\/|)strims\.gg(?:\/angelthump|\/facebook|\/smashcast|\/twitch-vod|\/twitch|\/ustream|\/youtube-playlist|\/youtube)?)\/(?:[A-z0-9_\-]{3,64}))\b/,
        "g"
      );

      try {
        const location = (window.top || window.parent || window).location;
        this.currentPath = location.pathname;
        this.url = (
          location.protocol +
          "//" +
          location.host +
          this.bigscreenPath +
          (location.search ? location.search : "")
        ).replace(/\/$/, "");
      } catch (e) {
        console.warn(`[WARNING] [dgg-utils] script might be running in cross-origin frame, can't get the bigscreen url, setting it to "https://www.destiny.gg/bigscreen" - ${e}`);
        this.url = "https://www.destiny.gg/bigscreen"
      }
    }

    format(str, channel, title) {
      // Open embed links in a new tab when in embedded/popout chat.
      const target =
        this.currentPath === this.bigscreenPath ? "_top" : "_blank";
      title = textEllipsis(title, 60);
      let source;
      let replacerString;
      switch (str.replace(this.bigscreenregex, "$3")) {
        case "#twitch":
          source = "https://twitch.tv/" + str.split("/")[1];
          switch (config.twitchEmbedFormat) {
            case 2:
              replacerString =
                '$1<a class="externallink bookmarklink" href="' +
                this.url +
                '$2" target="' +
                target +
                '">$2 (' +
                title +
                ')</a> <a class="externallink bookmarklink" href="' +
                source +
                '" target ="_blank">(source)</a>';
              break;
            default:
              replacerString =
                '$1<a class="externallink bookmarklink" href="' +
                this.url +
                '$2" target="' +
                target +
                '">$2</a> <a class="externallink bookmarklink" href="' +
                source +
                '" target ="_blank">(source)</a>';
              break;
          }
          break;
        case "#twitch-vod":
          source = "https://twitch.tv/videos/" + str.split("/")[1];
          switch (config.twitchEmbedFormat) {
            case 2:
              replacerString =
                '$1<a class="externallink bookmarklink" href="' +
                this.url +
                '$2" target="' +
                target +
                '">$2 (' +
                title +
                ')</a> <a class="externallink bookmarklink" href="' +
                source +
                '" target ="_blank">(source)</a>';
              break;
            default:
              replacerString =
                '$1<a class="externallink bookmarklink" href="' +
                this.url +
                '$2" target="' +
                target +
                '">$2</a> <a class="externallink bookmarklink" href="' +
                source +
                '" target ="_blank">(source)</a>';
              break;
          }
          break;
        case "#twitch-clip":
          source = "https://clips.twitch.tv/" + str.split("/")[1];
          switch (config.twitchEmbedFormat) {
            case 2:
              replacerString =
                '$1<a class="externallink bookmarklink" href="' +
                this.url +
                '$2" target="' +
                target +
                '">$2 (' +
                title +
                ')</a> <a class="externallink bookmarklink" href="' +
                source +
                '" target ="_blank">(source)</a>';
              break;
            default:
              replacerString =
                '$1<a class="externallink bookmarklink" href="' +
                this.url +
                '$2" target="' +
                target +
                '">$2</a> <a class="externallink bookmarklink" href="' +
                source +
                '" target ="_blank">(source)</a>';
              break;
          }
          break;
        case "#youtube":
          source = "https://youtu.be/" + str.split("/")[1];
          switch (config.youtubeEmbedFormat) {
            case 2:
              replacerString =
                '$1<a class="externallink bookmarklink" href="' +
                this.url +
                '$2" target="' +
                target +
                '">$2 (' +
                channel +
                ')</a> <a class="externallink bookmarklink" href="' +
                source +
                '" target ="_blank">(source)</a>';
              break;
            case 3:
              replacerString =
                '$1<a class="externallink bookmarklink" href="' +
                this.url +
                '$2" target="' +
                target +
                '">$2 (' +
                title +
                ')</a> <a class="externallink bookmarklink" href="' +
                source +
                '" target ="_blank">(source)</a>';
              break;
            case 4:
              replacerString =
                '$1<a class="externallink bookmarklink" href="' +
                this.url +
                '$2" target="' +
                target +
                '">$3/' +
                channel +
                '</a> <a class="externallink bookmarklink" href="' +
                source +
                '" target ="_blank">(source)</a>';
              break;
            case 5:
              replacerString =
                '$1<a class="externallink bookmarklink" href="' +
                this.url +
                '$2" target="' +
                target +
                '">$3/' +
                title +
                '</a> <a class="externallink bookmarklink" href="' +
                source +
                '" target ="_blank">(source)</a>';
              break;
            default:
              replacerString =
                '$1<a class="externallink bookmarklink" href="' +
                this.url +
                '$2" target="' +
                target +
                '">$2</a> <a class="externallink bookmarklink" href="' +
                source +
                '" target ="_blank">(source)</a>';
              break;
          }
          break;
        case "strims.gg":
        case "strims.gg/angelthump":
        case "strims.gg/facebook":
        case "strims.gg/smashcast":
        case "strims.gg/twitch-vod":
        case "strims.gg/twitch":
        case "strims.gg/ustream":
        case "strims.gg/youtube-playlist":
        case "strims.gg/youtube":
          return str.replace(
            this.bigscreenregex,
            '$1<a class="externallink bookmarklink" href="https://$2" target="_blank">$2</a>'
          );
      }
      return str.replace(this.bigscreenregex, replacerString);
    }
  }

  let embedForm = new EmbedUrlFormatter();

  // a lidl class to make it easier to append messages to chat
  class DGGMsg {
    constructor(str, type, stamp) {
      let msg = document.createElement("div");
      msg.className = `msg-chat ${type}`;
      let time;
      if (stamp != "") {
        time = new Date(stamp * 1000);
      } else {
        time = new Date();
      }
      let msgInnerTime = document.createElement("time");
      msgInnerTime.className = "time";
      msgInnerTime.innerHTML = time.toLocaleTimeString("en-US", timeOptions);
      let msgInnerText = document.createElement("span");
      msgInnerText.className = "text";
      msgInnerText.innerHTML = str;
      msg.appendChild(msgInnerTime);
      msg.appendChild(msgInnerText);
      chatlines.appendChild(msg);
    }

    update() {
      if (config.alwaysScrollDown) {
        chatlines.scrollTop = chatlines.scrollHeight;
      } else {
        if (window.getComputedStyle(scrollnotify).bottom != "0px") {
          chatlines.scrollTop = chatlines.scrollHeight;
        } else {
          chatlines.scrollLeft = chatlines.scrollWidth;
        }
      }
    }
  }

  // function to get phrases
  function getPhrases() {
    // download the ban/mute phrases to an array
    GM.xmlHttpRequest({
      method: "GET",
      url: "https://vyneer.me/tools/phrases?ts=1",
      onload: (response) => {
        if (errorAlert.style.display == "") {
          errorAlert.style.display = "none";
        }
        if (response.status == 200) {
          let parsedResponse = JSON.parse(response.response);
          let data = [];
          if (parsedResponse && parsedResponse.data) {
            data = parsedResponse.data;
          }
          phrasesTimestamp = parsedResponse.updatedAt;
          phrases = [];
          data.forEach((entry) => {
            cleanPhrase = entry.phrase.trim().toLowerCase();
            if (/^\/.*\/$/.test(cleanPhrase) && cleanPhrase.length > 2) {
              const regexString = cleanPhrase.slice(1, cleanPhrase.length - 1);
              const regex = new RegExp(regexString, "i");
              phrases.push(regex);
            } else {
              phrases.push(entry.phrase);
            }
          });
        } else {
          console.error(`[ERROR] [dgg-utils] couldn't get the phrase data, going to try to get phrases from mitchdev.net - URL: "https://vyneer.me/tools/phrases", HTTP status code: ${response.status} - ${response.statusText}`);
          GM.xmlHttpRequest({
            method: "GET",
            url: "https://mitchdev.net/api/dgg/list",
            headers: {
              "If-None-Match": `W/"${phrasesEtag}"`
            },
            onload: (response) => {
              if ((response.status == 304 && phrases.length == 0) || response.status == 200) {
                let data = JSON.parse(response.response);
                response.responseHeaders.split(/\r?\n/).forEach(el => {
                  const splitHeader = el.split(": ");
                  if (splitHeader[0] == "etag") {
                    phrasesEtag = splitHeader[1].substring(3, splitHeader[1].length - 1)
                  }
                });
                phrases = [];
                data.forEach((entry) => {
                  cleanPhrase = entry.phrase.trim().toLowerCase();
                  if (/^\/.*\/$/.test(cleanPhrase) && cleanPhrase.length > 2) {
                    const regexString = cleanPhrase.slice(1, cleanPhrase.length - 1);
                    const regex = new RegExp(regexString, "i");
                    phrases.push(regex);
                  } else {
                    phrases.push(entry.phrase);
                  }
                });
              } else if (response.status != 304) {
                console.error(`[ERROR] [dgg-utils] couldn't get the phrase data - URL: "https://mitchdev.net/api/dgg/list", HTTP status code: ${response.status} - ${response.statusText}`);
              }
            },
            onerror: () => {
              console.error(`[ERROR] [dgg-utils] couldn't get the phrase data - URL: "https://mitchdev.net/api/dgg/list", HTTP error`);
            },
            ontimeout: () => {
              console.error(`[ERROR] [dgg-utils] couldn't get the phrase data - URL: "https://mitchdev.net/api/dgg/list", HTTP timeout`);
            }
          });
        }
      },
      onerror: () => {
        errorAlert.style.display = "";
        console.error(`[ERROR] [dgg-utils] couldn't get the phrase data, going to try to get phrases from mitchdev.net - URL: "https://vyneer.me/tools/phrases", HTTP error`);
        GM.xmlHttpRequest({
          method: "GET",
          url: "https://mitchdev.net/api/dgg/list",
          headers: {
            "If-None-Match": `W/"${phrasesEtag}"`
          },
          onload: (response) => {
            if ((response.status == 304 && phrases.length == 0) || response.status == 200) {
              let data = JSON.parse(response.response);
              response.responseHeaders.split(/\r?\n/).forEach(el => {
                const splitHeader = el.split(": ");
                if (splitHeader[0] == "etag") {
                  phrasesEtag = splitHeader[1].substring(3, splitHeader[1].length - 1)
                }
              });
              phrases = [];
              data.forEach((entry) => {
                cleanPhrase = entry.phrase.trim().toLowerCase();
                if (/^\/.*\/$/.test(cleanPhrase) && cleanPhrase.length > 2) {
                  const regexString = cleanPhrase.slice(1, cleanPhrase.length - 1);
                  const regex = new RegExp(regexString, "i");
                  phrases.push(regex);
                } else {
                  phrases.push(entry.phrase);
                }
              });
            } else if (response.status != 304)  {
              console.error(`[ERROR] [dgg-utils] couldn't get the phrase data - URL: "https://mitchdev.net/api/dgg/list", HTTP status code: ${response.status} - ${response.statusText}`);
            }
          },
          onerror: () => {
            console.error(`[ERROR] [dgg-utils] couldn't get the phrase data - URL: "https://mitchdev.net/api/dgg/list", HTTP error`);
          },
          ontimeout: () => {
            console.error(`[ERROR] [dgg-utils] couldn't get the phrase data - URL: "https://mitchdev.net/api/dgg/list", HTTP timeout`);
          }
        });
      },
      ontimeout: () => {
        errorAlert.style.display = "";
        console.error(`[ERROR] [dgg-utils] couldn't get the phrase data, going to try to get phrases from mitchdev.net - URL: "https://vyneer.me/tools/phrases", HTTP timeout`);
        GM.xmlHttpRequest({
          method: "GET",
          url: "https://mitchdev.net/api/dgg/list",
          headers: {
            "If-None-Match": `W/"${phrasesEtag}"`
          },
          onload: (response) => {
            if ((response.status == 304 && phrases.length == 0) || response.status == 200) {
              let data = JSON.parse(response.response);
              response.responseHeaders.split(/\r?\n/).forEach(el => {
                const splitHeader = el.split(": ");
                if (splitHeader[0] == "etag") {
                  phrasesEtag = splitHeader[1].substring(3, splitHeader[1].length - 1)
                }
              });
              phrases = [];
              data.forEach((entry) => {
                cleanPhrase = entry.phrase.trim().toLowerCase();
                if (/^\/.*\/$/.test(cleanPhrase) && cleanPhrase.length > 2) {
                  const regexString = cleanPhrase.slice(1, cleanPhrase.length - 1);
                  const regex = new RegExp(regexString, "i");
                  phrases.push(regex);
                } else {
                  phrases.push(entry.phrase);
                }
              });
            } else if (response.status != 304)  {
              console.error(`[ERROR] [dgg-utils] couldn't get the phrase data - URL: "https://mitchdev.net/api/dgg/list", HTTP status code: ${response.status} - ${response.statusText}`);
            }
          },
          onerror: () => {
            console.error(`[ERROR] [dgg-utils] couldn't get the phrase data - URL: "https://mitchdev.net/api/dgg/list", HTTP error`);
          },
          ontimeout: () => {
            console.error(`[ERROR] [dgg-utils] couldn't get the phrase data - URL: "https://mitchdev.net/api/dgg/list", HTTP timeout`);
          }
        });
      }
    });
  }

  getPhrases();
  
  function textScanner(event) {
    // ensure we dont fire on random empty keypresses
    if (!(event.code == "ControlLeft" || event.code == "ControlRight" || event.code == "AltLeft" || event.code == "AltRight" || event.code == "ShiftLeft" || event.code == "ShiftRight" || event.code == "MetaLeft" || event.code == "MetaRight")) {
      let text = textarea.value.toLowerCase();
      let resultCustom;
      let resultCustomSoft;
      let resultLinks;
      let resultNukes;
      let result;

      if (phrases.length > 0) {
        for (let entry of phrases) {
          if (typeof(entry) === 'string') {
            if (text.indexOf(entry) != -1) {
              result = true;
              break;
          }
          } else {
            if (entry.test(text)) {
              result = true;
              break;
            }
          } 
        }
      }

      if (nukesCompiled.length > 0) {
        for (let entry of nukesCompiled) {
          if (typeof(entry) === 'string') {
            if (text.indexOf(entry) != -1) {
              resultNukes = true;
              break;
          }
          } else {
            if (entry.test(text)) {
              resultNukes = true;
              break;
            }
          } 
        }
      }

      if (mutelinks && config.colorOnMutelinks) {
        for (let entry of mutelinksChecklist) {
          if (text.indexOf(entry) != -1) {
            resultLinks = true;
            break;
          }
        }
      }

      if (config.customPhrases.length > 0) {
        for (let entry of config.customPhrases) {
          if (text.indexOf(entry) != -1) {
            resultCustom = true;
            break;
          }
        }
      }

      if (config.customPhrasesSoft.length > 0) {
        resultCustomSoft = config.customPhrasesSoft.find((entry) => {
            let regex = new RegExp(`\\b${entry}\\b`);
            if (regex.test(text)) {
                return true;
            } else {
                return false;
            }
        });
      }

      if (result != undefined) {
        foundPhraseOrNuke = true;
        textarea.style.backgroundColor = `#${config.phraseColor}`;
        document.body.style.setProperty("--flashing-color", `#${config.phraseColor}`);
        if (config.preventEnter) {
          sendAnywayButton.style.display = "";
        }
      } else if (resultLinks != undefined) {
        foundPhraseOrNuke = true;
        textarea.style.backgroundColor = `#${config.mutelinksColor}`;
        document.body.style.setProperty("--flashing-color", `#${config.mutelinksColor}`);
        if (config.preventEnter) {
          sendAnywayButton.style.display = "";
        }
      } else if (resultCustom != undefined) {
        foundPhraseOrNuke = true;
        textarea.style.backgroundColor = `#${config.customColor}`;
        document.body.style.setProperty("--flashing-color", `#${config.customColor}`);
        if (config.preventEnter) {
          sendAnywayButton.style.display = "";
        } 
      } else if (resultCustomSoft != undefined) {
        foundPhraseOrNuke = true;
        textarea.style.backgroundColor = `#${config.customSoftColor}`;
        document.body.style.setProperty(
            "--flashing-color",
            `#${config.customSoftColor}`
        );
        if (config.preventEnter) {
            sendAnywayButton.style.display = "";
        }
      } else if (resultNukes != undefined) {
        foundPhraseOrNuke = true;
        textarea.style.backgroundColor = `#${config.nukeColor}`;
        document.body.style.setProperty("--flashing-color", `#${config.nukeColor}`);
        if (config.preventEnter) {
          sendAnywayButton.style.display = "";
        }
      } else {
        foundPhraseOrNuke = false;
        if (textarea.style.backgroundColor != "") {
          textarea.style.backgroundColor = "";
        }
        if (config.preventEnter) {
          sendAnywayButton.style.display = "none";
        }
      }
    }
  }

  let pasted = false;

  // next 2 event listeners are for detecting pastes
  // because right-click -> paste doesnt get detected by keyup
  textarea.addEventListener("paste", () => {
    pasted = true;
  });
  
  textarea.addEventListener("input", (e) => {
    if (pasted) {
      textScanner(e);
      pasted = false;
    }
  });
  
  // adding an event listener to chat's input box
  // every time you press a key it checks whether your text has spooky phrases in it
  textarea.addEventListener("keyup", (e) => {
      textScanner(e);
  });

  // function to simplify appending embeds
  function serveEmbeds(data, emb, ifnone) {
    if (data.length > 0) {
      data.forEach((entry) => {
        if (!emb) {
          new DGGMsg(
            `${embedForm.format(entry.link, entry.channel, entry.title)} (${
              entry.count
            } ${entry.count == 1 ? "embed" : "embeds"})`,
            "msg-status msg-historical",
            ""
          ).update();
        } else {
          new DGGMsg(
            embedForm.format(entry.link, entry.channel, entry.title),
            "msg-status msg-historical",
            entry.timestamp
          ).update();
        }
      });
    } else {
      if (!emb) {
        if (!ifnone) {
          new DGGMsg(
            `Looks like nobody embedded anything in the last ${config.embedTime} minutes.`,
            "msg-error",
            ""
          ).update();
        } else {
          new DGGMsg(
            `Looks like nobody embedded anything in the last ${config.embedTime} minutes, showing you the last embeds instead.`,
            "msg-error",
            ""
          ).update();
          GM.xmlHttpRequest({
            method: "GET",
            url: `https://vyneer.me/tools/embeds/last`,
            onload: (response) => {
              if (errorAlert.style.display == "") {
                errorAlert.style.display = "none";
              }
              if (response.status == 200) {
                let data = JSON.parse(response.response);
                if (config.lastEmbeds) {
                  data = data.reverse();
                }
                serveEmbeds(data, true, false);
              } else {
                new DGGMsg(`Couldn't get the embeds data, check the console for more details.`, "msg-error", "").update();
                console.error(`[ERROR] [dgg-utils] couldn't get the embeds data - URL: "https://vyneer.me/tools/embeds/last", HTTP status code: ${response.status} - ${response.statusText}`);
              }
            },
            onerror: () => {
                new DGGMsg(`Couldn't get the embeds data, check the console for more details.`, "msg-error", "").update();
                console.error(`[ERROR] [dgg-utils] couldn't get the embeds data - HTTP error`);
            },
            ontimeout: () => {
                new DGGMsg(`Couldn't get the embeds data, check the console for more details.`, "msg-error", "").update();
                console.error(`[ERROR] [dgg-utils] couldn't get the embeds data - HTTP timeout`);
            }
          });
        }
      } else {
        new DGGMsg(
          `Looks like there's no data regarding the last embeds.`,
          "msg-error",
          ""
        ).update();
      }
    }
  }

  // adding an event listener to the new embeds button
  // once you press it it fetches embeds from vyneer.me and displays them in chat
  embedsButton.addEventListener("click", () => {
    embeds();
  });

  // function to show embeds
  function embeds() {
    let embedUrl;

    if (!config.lastEmbeds) {
      new DGGMsg(
        `Getting top 5 embeds in the last ${config.embedTime} minutes...`,
        "msg-info",
        ""
      ).update();
      embedUrl = `https://vyneer.me/tools/embeds?t=${config.embedTime}`;
    } else {
      new DGGMsg(`Getting last 5 embeds...`, "msg-info", "").update();
      embedUrl = `https://vyneer.me/tools/embeds/last`;
    }

    GM.xmlHttpRequest({
      method: "GET",
      url: embedUrl,
      onload: (response) => {
        if (response.status == 200) {
          let embedData = JSON.parse(response.response);
          if (config.lastEmbeds) {
            embedData = embedData.reverse();
          }
          if (config.showLastVOD) {
            GM.xmlHttpRequest({
              method: "GET",
              url: "https://vyneer.me/tools/ytvods",
              onload: (response) => {
                let vodData = [];
                if (response.status == 200) {
                  vodData = JSON.parse(response.response);
                  if (vodData.length > 0) {
                    new DGGMsg(`Last Destiny VOD - ${embedForm.format(`#youtube/${vodData[0].id}`, "Destiny", vodData[0].title)}`, "msg-status msg-historical", "").update();
                  } else {
                    new DGGMsg(`Couldn't get the VOD data, check the console for more details.`, "msg-error", "").update();
                    console.error(`[ERROR] [dgg-utils] couldn't get the VOD data - the VOD db is empty`);
                  }
                } else {
                  new DGGMsg(`Couldn't get the VOD data, check the console for more details.`, "msg-error", "").update();
                  console.error(`[ERROR] [dgg-utils] couldn't get the VOD data - HTTP status code: ${response.status} - ${response.statusText}`);
                }
                serveEmbeds(embedData, config.lastEmbeds, config.lastIfNone);
              },
              onerror: () => {
                new DGGMsg(`Couldn't get the VOD data, check the console for more details.`, "msg-error", "").update();
                console.error(`[ERROR] [dgg-utils] couldn't get the VOD data - HTTP error`);
              },
              ontimeout: () => {
                new DGGMsg(`Couldn't get the VOD data, check the console for more details.`, "msg-error", "").update();
                console.error(`[ERROR] [dgg-utils] couldn't get the VOD data - HTTP timeout`);
              }
            });
          } else {
            serveEmbeds(embedData, config.lastEmbeds, config.lastIfNone);
          }
        } else {
          new DGGMsg(`Couldn't get the embeds data, check the console for more details.`, "msg-error", "").update();
          console.error(`[ERROR] [dgg-utils] couldn't get the embeds data - URL: ${embedUrl}, HTTP status code: ${response.status} - ${response.statusText}`);
        }
      },
      onerror: () => {
        new DGGMsg(`Couldn't get the embeds data, check the console for more details.`, "msg-error", "").update();
        console.error(`[ERROR] [dgg-utils] couldn't get the embeds data - HTTP error`);
      },
      ontimeout: () => {
        new DGGMsg(`Couldn't get the embeds data, check the console for more details.`, "msg-error", "").update();
        console.error(`[ERROR] [dgg-utils] couldn't get the VOD data - HTTP timeout`);
      }
    });
  }

  // function to see get latest timestamps of nukes/phrases/mutelinks
  function getNukesMutesPhrasesTimestamps() {
    GM.xmlHttpRequest({
      method: "GET",
      url: "https://vyneer.me/tools/nmptimestamps",
      onload: (response) => {
        if (errorAlert.style.display == "") {
          errorAlert.style.display = "none";
        }
        if (response.status == 200) {
          if (!DEBUG) {
             data = JSON.parse(response.response);
          }
          if (nukesTimestamp !== data.nukes) {
            getNukes();
          }

          if (mutelinksTimestamp !== data.mutelinks) {
            getMutelinks();
          }

          if (phrasesTimestamp !== data.phrases) {
            getPhrases();
          }
        } else {
          console.error(`[ERROR] [dgg-utils] couldn't get the nukes/mutelinks/phrases timestamps - HTTP status code: ${response.status} - ${response.statusText}`);
        }
      }
    });
  }

  // function to get nukes
  function getNukes() {
    GM.xmlHttpRequest({
      method: "GET",
      url: "https://vyneer.me/tools/nukes?ts=1",
      onload: (response) => {
        let parsedResponse = {};
        let data = [];
        if (DEBUG) {
          data = DEBUG_NUKE_DATA;
        }
        nukes = [];
        nukesCompiled = [];
        if (response.status == 200) {
          if (!DEBUG) {
            parsedResponse = JSON.parse(response.response);
            if (parsedResponse && parsedResponse.data) {
              data = parsedResponse.data;
            }
          }
          nukesTimestamp = parsedResponse.updatedAt;
          if (data.length > 0) {
            let nukeAlertButtonTooltip = "";
            data.forEach((entry) => {
              nukes.push(entry);
              nukeAlertButtonTooltip += `${entry.word} (${entry.type} for ${entry.duration})\n`;
              let cleanNuke = entry.word.trim().toLowerCase();
              if (/^\/.*\/$/.test(cleanNuke) && cleanNuke.length > 2) {
                const regexString = cleanNuke.slice(1, cleanNuke.length - 1);
                const regex = new RegExp(regexString, "i");
                nukesCompiled.push(regex);
              } else {
                nukesCompiled.push(entry.word);
              }
            });
            nukeAlertButton.style.display = "";
            if (nukeAlertButtonTooltip) {
              nukeAlertButton.title = nukeAlertButtonTooltip;
            } else {
              nukeAlertButton.title = "Nukes";
            }
          } else {
            if (nukeAlertButton.style.display != "none") {
              nukeAlertButton.style.display = "none";
              nukeAlertButton.title = "Nukes";
              if (DEBUG) {
                nukeAlertButton.style.display = "";
              }
            }
          }
        } else {
          console.error(`[ERROR] [dgg-utils] couldn't get the nuke data - HTTP status code: ${response.status} - ${response.statusText}`);
        }
      },
      onerror: () => {
        errorAlert.style.display = "";
        console.error(`[ERROR] [dgg-utils] couldn't get the nuke data - HTTP error`);
      },
      ontimeout: () => {
        errorAlert.style.display = "";
        console.error(`[ERROR] [dgg-utils] couldn't get the nuke data - HTTP timeout`);
      }
    });
  }

  // function to get nukes and mutelinks
  function getMutelinks() {
    GM.xmlHttpRequest({
      method: "GET",
      url: "https://vyneer.me/tools/mutelinks?ts=1",
      onload: (response) => {
        if (errorAlert.style.display == "") {
          errorAlert.style.display = "none";
        }
        let parsedResponse = {};
        let data = [];
        if (DEBUG) {
          data = DEBUG_LINKS_DATA;
        }
        if (response.status == 200) {
          if (!DEBUG) {
            parsedResponse = JSON.parse(response.response);
            if (parsedResponse && parsedResponse.data) {
              data = parsedResponse.data;
            }
          }
          mutelinksTimestamp = parsedResponse.updatedAt;
          if (data[0] && data[0].status == "on") {
            mutelinks = true;
            linksAlertButton.style.display = "inline-flex";
            linksAlertButton.title = `Links mentioning ${data[0].user} WILL get you muted (${data[0].duration}).`;
            linksAlertButton_span.innerHTML = "on";
          } else if (data[0] && data[0].status == "all") {
            mutelinks = true;
            linksAlertButton.style.display = "inline-flex";
            linksAlertButton.title = `ANY link WILL get you muted (${data[0].duration}).`;
            linksAlertButton_span.innerHTML = "all";
          } else if (data[0] && data[0].status == "off") {
            mutelinks = false;
            if (linksAlertButton.style.display != "none") {
              linksAlertButton.style.display = "none";
              linksAlertButton.title = "Mutelinks";
            }
          }
        } else {
          console.error(
            `[ERROR] [dgg-utils] couldn't get the mutelinks data - HTTP status code: ${response.status} - ${response.statusText}`
          );
        }
      },
      onerror: () => {
        errorAlert.style.display = "";
        console.error(`[ERROR] [dgg-utils] couldn't get the mutelinks data - HTTP error`);
      },
      ontimeout: () => {
        errorAlert.style.display = "";
        console.error(`[ERROR] [dgg-utils] couldn't get the mutelinks data - HTTP timeout`);
      }
    });
  }

  getNukes();
  getMutelinks();

  setInterval(() => {
    getNukesMutesPhrasesTimestamps();
  }, 15000);

  // make an observer move nuke/mutelinks buttons based on amount of whispers
  let marginObserver = new MutationObserver((mutations) => {
    utilitiesButtons.style.marginLeft = `${mutations[0].target.offsetWidth}px`;
  });
  marginObserver.observe(
    document.querySelector("#chat-whisper-unread-indicator"),
    { characterData: false, attributes: false, childList: true, subtree: false }
  );

  // adding an event listener to the nukes button
  // once you press it it fetches nukes from vyneer.me and displays them in chat
  nukeAlertButton.addEventListener("click", () => {
    new DGGMsg(`Showing current nukes...`, "msg-info", "").update();

    if (nukes.length > 0) {
      nukes.forEach((result) => {
        new DGGMsg(
          `${result.word} (${result.type.toString().toLowerCase()}d for ${
            result.duration
          })`,
          "msg-status msg-historical",
          ""
        ).update();
      });
    } else {
      new DGGMsg(
        `Looks like there's no data regarding the nukes.`,
        "msg-error",
        ""
      ).update();
    }
  });
}
