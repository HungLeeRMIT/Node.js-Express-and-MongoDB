/* eslint-disable*/ /* eslint-disable*/ const $5bdcc18e63fa8fe3$export$516836c6a9dfc573 = ()=>{
    const el = document.querySelector(".alert");
    if (el) el.parentElement.removeChild(el);
};
const $5bdcc18e63fa8fe3$export$de026b00723010c1 = (type, msg)=>{
    $5bdcc18e63fa8fe3$export$516836c6a9dfc573();
    const markup = `<div class="alert alert--${type}">${msg}</div>`;
    document.querySelector("body").insertAdjacentHTML("afterbegin", markup);
    window.setTimeout($5bdcc18e63fa8fe3$export$516836c6a9dfc573, 3000);
};


const $12b329720db331db$export$596d806903d1f59e = async (email, password)=>{
    try {
        const res = await axios({
            method: "POST",
            url: "http://127.0.0.1:8000/api/v1/users/login",
            data: {
                email: email,
                password: password
            }
        });
        if (res.data.status === "success") location.assign("/");
        console.log(res);
    } catch (err) {
        (0, $5bdcc18e63fa8fe3$export$de026b00723010c1)("error", err.response.data.message);
    }
};
const $12b329720db331db$export$a0973bcfe11b05c9 = async ()=>{
    try {
        const res = await axios({
            method: "GET",
            url: "http://127.0.0.1:8000/api/v1/users/logout"
        });
        if (res.data.status === "success") location.assign("/");
    } catch (err) {
        (0, $5bdcc18e63fa8fe3$export$de026b00723010c1)("error", "Error logging out! Try again.");
    }
};


/* eslint-disable */ const $7464264e645443a6$export$4c5dd147b21b9176 = (locations)=>{
    mapboxgl.accessToken = "pk.eyJ1IjoiaHVuZ2xlZS1ybWl0IiwiYSI6ImNsdjlucnR0OTBheTEya3MyejNheHIyMWgifQ.kPIDln6DvJuWSyAiE2O-CA";
    const map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/hunglee-rmit/clw7kad2h02ur01qu38csc8gw"
    });
    const bounds = new mapboxgl.LngLatBounds();
    locations.forEach((loc)=>{
        // Create marker
        const el = document.createElement("div");
        el.className = "marker";
        // Add marker
        new mapboxgl.Marker({
            element: el,
            anchor: "bottom"
        }).setLngLat(loc.coordinates).addTo(map);
        //Add popup
        new mapboxgl.Popup({
            offset: 30
        }).setLngLat(loc.coordinates).setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`).addTo(map);
        // Extend map bounds to include current location
        bounds.extend(loc.coordinates);
    });
    map.fitBounds(bounds, {
        padding: {
            top: 200,
            bottom: 150,
            left: 100,
            right: 100
        },
        maxZoom: 15,
        duration: 2000
    });
};



const $f6c9b790ed2487bc$export$e3ac7a5d19605772 = async (data, type)=>{
    try {
        const url = type === "password" ? "updateMyPassword " : "updateMe";
        const res = await axios({
            method: "PATCH",
            url: `http://127.0.0.1:8000/api/v1/users/${url}`,
            data: data
        });
        if (res.data.status === "success") (0, $5bdcc18e63fa8fe3$export$de026b00723010c1)("success", `${type.toUpperCase()} updated successfully!`);
    } catch (err) {
        (0, $5bdcc18e63fa8fe3$export$de026b00723010c1)("error", err.response.data.message);
    }
};


// DOM ELEMENTS
const $03694d79d4fdfabe$var$mapBox = document.getElementById("map");
const $03694d79d4fdfabe$var$loginForm = document.querySelector(".form--login");
const $03694d79d4fdfabe$var$logoutBtn = document.querySelector(".nav__el--logout");
const $03694d79d4fdfabe$var$userDataForm = document.querySelector(".form-user-data");
const $03694d79d4fdfabe$var$userPasswordForm = document.querySelector(".form-user-password");
// DELEGATION
if ($03694d79d4fdfabe$var$mapBox) {
    const locations = JSON.parse($03694d79d4fdfabe$var$mapBox.dataset.locations);
    (0, $7464264e645443a6$export$4c5dd147b21b9176)(locations);
}
if ($03694d79d4fdfabe$var$loginForm) $03694d79d4fdfabe$var$loginForm.addEventListener("submit", async (e)=>{
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    await (0, $12b329720db331db$export$596d806903d1f59e)(email, password);
});
if ($03694d79d4fdfabe$var$logoutBtn) $03694d79d4fdfabe$var$logoutBtn.addEventListener("click", async ()=>{
    await (0, $12b329720db331db$export$a0973bcfe11b05c9)();
});
if ($03694d79d4fdfabe$var$userDataForm) $03694d79d4fdfabe$var$userDataForm.addEventListener("submit", async (e)=>{
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    await (0, $f6c9b790ed2487bc$export$e3ac7a5d19605772)({
        name: name,
        email: email
    }, "data");
});
if ($03694d79d4fdfabe$var$userPasswordForm) $03694d79d4fdfabe$var$userPasswordForm.addEventListener("submit", async (e)=>{
    e.preventDefault();
    document.querySelector(".btn--save-password").textContent = "Updating...";
    const passwordCurrent = document.getElementById("password-current").value;
    const password = document.getElementById("password").value;
    const passwordConfirm = document.getElementById("password-confirm").value;
    await (0, $f6c9b790ed2487bc$export$e3ac7a5d19605772)({
        passwordCurrent: passwordCurrent,
        password: password,
        passwordConfirm: passwordConfirm
    }, "password");
    document.getElementById("password-current").value = "";
    document.getElementById("password").value = "";
    document.getElementById("password-confirm").value = "";
    document.querySelector(".btn--save-password").textContent = "Save password";
});


//# sourceMappingURL=bundle.js.map
