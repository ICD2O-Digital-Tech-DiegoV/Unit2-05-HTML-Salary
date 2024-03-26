// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html
"use strict";
/**
 * This function calculates salary.
 */
function calculate() {
  // input
  let hoursWorked = parseInt(document.getElementById('hoursWorked').value)
  let hourlyRate = parseInt(document.getElementById('hourlyRate').value)

  // process
  let moneyEarned = hoursWorked * hourlyRate
  let govTax = moneyEarned * 0.18


  // output
  document.getElementById('preTaxTotal').innerHTML = ': Hours Worked ' + 'Hourly Rate'
  document.getElementById('afterTaxTotal').innerHTML += '<br>' + hoursWorked + ' * ' + hour

}