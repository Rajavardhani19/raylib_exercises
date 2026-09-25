// function meet(ship1, ship2) {
//   if (ship1 === ship2) {
//     return 1;
//   }
//   return 1 + meet(ship1gate(ship1), ship2gate(ship2));
// }
// function ship1gate(ship1) {
//   if (ship1 === 4) {
//     return (ship1 = 1);
//   }
//   return ship1 + 1;
// }
// function ship2gate(ship2) {
//   if (ship2 === 5) {
//     return (ship1 = 1);
//   }
//   return ship2 + 1;
// }
// function meet(ship1, ship2) {
//   if (ship1 === ship2) {
//     return 1;
//   }

//   return 1 + meet(ship1 === 4 ? 1 : ship1 + 1, ship2 === 5 ? 1 : ship2 + 1);
// }
// //

// meet("", "", 0);
function meet(ship1, ship2) {
  if (ship1 === ship2) {
    return 0;
  }
  return 1 + meet(ship1gate(ship1), ship2gate(ship2));
}
function ship1gate(gate) {
  if (gate === "aurora") {
    return "ember";
  } else if (gate === "ember") {
    return "nebula";
  } else if (gate === "nebula") {
    return "rift";
  } else {
    return "aurora";
  }
}
function ship2gate(gate) {
  if (gate === "ember") {
    return "nebula";
  } else if (gate === "obisidian") {
    return "eclipse";
  } else if (gate === "nebula") {
    return "rift";
  } else if (gate === "rift") {
    return "obisidian";
  } else {
    return "ember";
  }
}
// function meet(ship1gate, ship2gate) {
//   if (ship1gate === ship2gate) {
//     return 0;
//   }
//   return 1 + gateChange(ship1gate, ship2gate);
// }
// function gateChange(gate1, gate2) {
//   if (gate1 === "aurora") {
//     gate1 = "ember";
//   } else if (gate1 === "ember") {
//     gate1 = "nebula";
//   } else if (gate1 === "nebula") {
//     gate1 = "rift";
//   } else {
//     gate1 = "aurora";
//   }

//   if (gate2 === "ember") {
//     gate2 = "nebula";
//   } else if (gate2 === "nebula") {
//     gate2 = "rift";
//   } else if (gate2 === "rift") {
//     gaet2 = "obisidian";
//   } else if (gate2 === "obisidian") {
//     gate2 = "eclipse";
//   } else {
//     gate2 = "ember";
//   }

//   return meet(gate1, gate2);
// }
console.log(meet("aurora", "ember"));
