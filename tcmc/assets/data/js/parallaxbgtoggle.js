let isBackgroundAnimated = localStorage.getItem("isBackgroundAnimated") === "false" ? false : true;

const dSettingStyle = document.createElement("style");
dSettingStyle.className = "settingStyle";
document.head.appendChild(dSettingStyle);

const updateStyle = () => {
  localStorage.setItem("isBackgroundAnimated", isBackgroundAnimated);
  if (!isBackgroundAnimated) {
    dSettingStyle.textContent = `#overlay, #overlay * { animation: none !important; }`;
  } else {
    dSettingStyle.textContent = "";
  }
};
updateStyle();

const dFoot = document.querySelector("#foot");
const dPrevLinks = document.querySelector("#prevlinks");
//const dGameLinks = document.querySelector("#gamelinks");

const dSettingsWrapper = document.createElement("div");
dSettingsWrapper.style = `display: flex; justify-content: space-between; flex-wrap: wrap;`;
dSettingsWrapper.appendChild(dPrevLinks);
//dSettingsWrapper.appendChild(dGameLinks);

const dSettingBgAnimWrapper = document.createElement("div");
const dSettingBgAnimCheckbox = document.createElement("input");
const dSettingBgAnimLabel = document.createElement("label");

dSettingBgAnimWrapper.style = `display: flex;`;

dSettingBgAnimCheckbox.style = `margin: 0; margin-right: 5px;`;
dSettingBgAnimCheckbox.type = "checkbox";
dSettingBgAnimCheckbox.id = "settingBgAnim";
dSettingBgAnimCheckbox.checked = isBackgroundAnimated;
dSettingBgAnimCheckbox.addEventListener("input", () => {
  isBackgroundAnimated = dSettingBgAnimCheckbox.checked;

  updateStyle();
});

dSettingBgAnimLabel.textContent = "Animated Background";
dSettingBgAnimLabel.style = `line-height: 15px; font-size: 10px; text-transform: uppercase;`;
dSettingBgAnimLabel.setAttribute("for", "settingBgAnim");

dSettingBgAnimWrapper.appendChild(dSettingBgAnimCheckbox);
dSettingBgAnimWrapper.appendChild(dSettingBgAnimLabel);

dSettingsWrapper.appendChild(dSettingBgAnimWrapper);

const dFootBrs = dFoot.querySelectorAll("br");
if (dFootBrs.length > 2) {
  dFoot.insertBefore(dSettingsWrapper, dFootBrs[dFootBrs.length - 2]);
} else {
  dFoot.appendChild(dSettingsWrapper);
}