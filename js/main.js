const initializeModal = () => {
    const modal = document.querySelector(".js-modal");
    const closeButton = document.querySelector(".js-close-button");

    const modalOpeningKeyframes = { opacity: [0, 1] };
    const modalClosingKeyframes = { opacity: [1, 0] };

    const modalOptions = {
        duration: 150,
        easing: "ease",
        fill: "forwards",
    };

    if (!modal || !closeButton) return;

    const openModal = () => {
        modal.showModal();
        modal.animate(modalOpeningKeyframes, modalOptions);
    };

    const closeModal = () => {
        const closingAnim = modal.animate(modalClosingKeyframes, modalOptions);
        closingAnim.onfinish = () => modal.close();
    };

    closeButton.addEventListener("click", (e) => {
        closeModal();
    });

    modal.addEventListener("cancel", (e) => {
        e.preventDefault();
        closeModal();
    });

    if (!sessionStorage.getItem("modalShown")) {
        setTimeout(() => {
            openModal();
            sessionStorage.setItem("modalShown", "true");
        }, 5000);
    }
};

initializeModal();
