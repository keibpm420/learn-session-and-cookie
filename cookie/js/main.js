const manageUtmSourceCookie = () => {
    const params = new URLSearchParams(window.location.search);
    const utmSourceFromUrl = params.get("utm_source");

    const getCookie = (name) => {
        const cookies = document.cookie.split("; ");
        for (const cookie of cookies) {
            const [key, value] = cookie.split("=");
            if (key === name) {
                return value;
            }
        }
        return null;
    };

    if (utmSourceFromUrl) {
        document.cookie = "utm_source=" + utmSourceFromUrl + "; max-age=2592000; path=/";
    }

    const utmSourceFromCookie = getCookie("utm_source");

    const utmSourceField = document.querySelector(".js-utm-source");
    if (utmSourceField && utmSourceFromCookie) {
        utmSourceField.value = utmSourceFromCookie;
    }
};

manageUtmSourceCookie();
