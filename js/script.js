/* Created by: Evan Cagiannos
   Created on: April 2022
   This file contains the JS functions for index.html*/

'use strict'

/**
 * Check service worker.
 */
 if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS20-Unit5-04-JS/sw.js", {
    scope: "/ICS20-Unit5-04-JS/",
  })
}

/**
 * Input.
 */
