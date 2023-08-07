const butInstall = document.getElementById('buttonInstall');
let deferredInstallPrompt;
// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();

    butInstall.style.display = 'block';

    deferredInstallPrompt = event;
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    if (deferredInstallPrompt) {
        deferredInstallPrompt.prompt();

        const result = await deferredInstallPrompt.userChoice;

        if (result.outcome === 'accepted') {
            console.log(`User accepted the install prompt`);
        } else {
            console.log(`User dismissed the install prompt`);
        }

        deferredInstallPrompt = null;

        butInstall.style.display = 'none';
    }
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    console.log('App installed successfully');
});
