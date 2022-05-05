/* Created by: Evan Cagiannos
   Created on: April 2022
   This file contains the JS functions for index.html*/

'use strict'

/**
 * Check service worker.
 */
 if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit5-04-JS/sw.js", {
    scope: "/ICS2O-Unit5-04-JS/",
  })
}

/**
 * Input.
 */

 function buttonClicked() {

  const age = parseInt(document.getElementById('age').value)

  var monday = document.getElementById("monday")
  var tuesday = document.getElementById("tuesday")
  var wednesday = document.getElementById("wednesday")
  var thursday = document.getElementById("thursday")
  var friday = document.getElementById("friday")
  var sunday = document.getElementById("sunday")
  var saturday = document.getElementById("saturday")

  if ((tuesday.checked == true || thursday.checked == true) || (age >= 12 && age <= 21)) {
    document.getElementById("output").innerHTML =
  "You are eligible for student pricing!"
  console.log("eligible for student pricing")
  } else {
  document.getElementById("output").innerHTML =
  "You must pay regular pricing."
  console.log("not eligible for student pricing")
  }
 }
