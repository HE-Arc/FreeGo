'use strict';

let deferredInstallPrompt = null;

window.addEventListener('beforeinstallprompt', saveBeforeInstallPromptEvent);

/**
 * Event handler for beforeinstallprompt event.
 *   Saves the event & shows install button.
 *
 * @param {Event} evt
 */
function saveBeforeInstallPromptEvent(evt) {
    deferredInstallPrompt = evt;
    var toastHTML = '<span>Installer l\'app</span><button class="btn-flat toast-action" onclick=installPWA()>Install</button>';
    M.toast({ html: toastHTML });
}


/**
 * Event handler for butInstall - Does the PWA installation.
 *
 * @param {Event} evt
 */
function installPWA(evt) {
    deferredInstallPrompt.prompt();
}

window.addEventListener('appinstalled', logAppInstalled);

/**
 * Event handler for appinstalled event.
 *   Log the installation to analytics or save the event somehow.
 *
 * @param {Event} evt
 */
function logAppInstalled(evt) {
    console.log('Free Go App was installed.', evt);
}
