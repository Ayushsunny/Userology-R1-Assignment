document.addEventListener("DOMContentLoaded", function() {
    const openPopupButton = document.getElementById("openPopupButton");
    let popupCount = 1;

    openPopupButton.addEventListener("click", function() {
        createPopup(popupCount);
        popupCount = 1;
    });

    function createPopup(count) {
        const popup = document.createElement("div");
        popup.className = "popup";
        popup.id = "popup" + count;

        const popupContent = document.createElement("div");
        popupContent.className = "popupContent";
        popupContent.id = "popupContent" + count;

        const paragraph = document.createElement("p");
        paragraph.className = "popupText";
        paragraph.textContent = "Hello World " + count;

        const buttonsContainer = document.createElement("div");
        buttonsContainer.className = "popupButtons";

        const closeButton = document.createElement("button");
        closeButton.className = "popupCloseButton";
        closeButton.textContent = "Close";

        const openButton = document.createElement("button");
        openButton.className = "popupOpenButton";
        openButton.textContent = "+";

        buttonsContainer.appendChild(closeButton);
        buttonsContainer.appendChild(openButton);
        popupContent.appendChild(paragraph);
        popupContent.appendChild(buttonsContainer);
        popup.appendChild(popupContent);
        document.body.appendChild(popup);

        popup.style.display = "flex";

        closeButton.addEventListener("click", function() {
            popup.style.display = "none";
        });

        openButton.addEventListener("click", function() {
            popup.style.display = "none";
            createPopup(count + 1);
        });
    }
});