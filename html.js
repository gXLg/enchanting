const enchantments = [
  {
    "id": 0, "name": "Protection",
    "on": ["helmet", "chestplate", "leggings", "boots"],
    "max": 4, "book": 1, "item": 1
  },
  {
    "id": 1, "name": "Fire Protection",
    "on": ["helmet", "chestplate", "leggings", "boots"],
    "max": 4, "book": 1, "item": 2
  },
  {
    "id": 2, "name": "Feather Falling",
    "on": ["boots"],
    "max": 4, "book": 1, "item": 2
  },
  {
    "id": 3, "name": "Blast Protection",
    "on": ["helmet", "chestplate", "leggings", "boots"],
    "max": 4, "book": 2, "item": 4
  },
  {
    "id": 4, "name": "Projectile Protection",
    "on": ["helmet", "chestplate", "leggings", "boots"],
    "max": 4, "book": 1, "item": 2
  },
  {
    "id": 5, "name": "Thorns",
    "on": ["helmet", "chestplate", "leggings", "boots"],
    "max": 3, "book": 4, "item": 8
  },
  {
    "id": 6, "name": "Respiration",
    "on": ["helmet"],
    "max": 3, "book": 2, "item": 4
  },
  {
    "id": 7, "name": "Depth Strider",
    "on": ["boots"],
    "max": 3, "book": 2, "item": 4
  },
  {
    "id": 8, "name": "Aqua Affinity",
    "on": ["helmet"],
    "max": 1, "book": 2, "item": 4
  },
  {
    "id": 9, "name": "Sharpness",
    "on": ["sword", "axe"],
    "max": 5, "book": 1, "item": 1
  },
  {
    "id": 10, "name": "Smite",
    "on": ["sword", "axe"],
    "max": 5, "book": 1, "item": 2
  },
  {
    "id": 11, "name": "Bane of Arthropods",
    "on": ["sword", "axe"],
    "max": 5, "book": 1, "item": 2
  },
  {
    "id": 12, "name": "Knockback",
    "on": ["sword"],
    "max": 2, "book": 1, "item": 2
  },
  {
    "id": 13, "name": "Fire Aspect",
    "on": ["sword"],
    "max": 2, "book": 2, "item": 4
  },
  {
    "id": 14, "name": "Looting",
    "on": ["sword"],
    "max": 3, "book": 2, "item": 4
  },
  {
    "id": 15, "name": "Efficiency",
    "on": ["axe", "shovel", "hoe", "pickaxe", "shears"],
    "max": 5, "book": 1, "item": 1
  },
  {
    "id": 16, "name": "Silk Touch",
    "on": ["axe", "shovel", "hoe", "pickaxe"],
    "max": 1, "book": 4, "item": 8
  },
  {
    "id": 17, "name": "Unbreaking",
    "on": ["sword", "axe", "shovel", "hoe", "pickaxe",
           "shears",
           "helmet", "chestplate", "leggings", "boots",
           "bow", "crossbow", "trident", "shield",
           "elytra", "rod"],
    "max": 3, "book": 1, "item": 2
  },
  {
    "id": 18, "name": "Fortune",
    "on": ["axe", "shovel", "hoe", "pickaxe"],
    "max": 3, "book": 2, "item": 4
  },
  {
    "id": 19, "name": "Power",
    "on": ["bow"],
    "max": 5, "book": 1, "item": 1
  },
  {
    "id": 20, "name": "Punch",
    "on": ["bow"],
    "max": 2, "book": 2, "item": 4
  },
  {
    "id": 21, "name": "Flame",
    "on": ["bow"],
    "max": 1, "book": 2, "item": 4
  },
  {
    "id": 22, "name": "Infinity",
    "on": ["bow"],
    "max": 1, "book": 4, "item": 8
  },
  {
    "id": 23, "name": "Luck of the Sea",
    "on": ["rod"],
    "max": 3, "book": 2, "item": 4
  },
  {
    "id": 24, "name": "Lure",
    "on": ["rod"],
    "max": 3, "book": 2, "item": 4
  },
  {
    "id": 25, "name": "Frost Walker",
    "on": ["boots"],
    "max": 2, "book": 2, "item": 4
  },
  {
    "id": 26, "name": "Mending",
    "on": ["sword", "axe", "shovel", "hoe", "pickaxe",
           "shears",
           "helmet", "chestplate", "leggings", "boots",
           "bow", "crossbow", "trident", "shield",
           "elytra", "rod"],
    "max": 1, "book": 2, "item": 4
  },
  {
    "id": 27, "name": "Curse of Binding",
    "on": ["helmet", "chestplate", "leggings", "boots", "elytra"],
    "max": 1, "book": 4, "item": 8
  },
  {
    "id": 28, "name": "Curse of Vanishing",
    "on": ["sword", "axe", "shovel", "hoe", "pickaxe",
           "shears",
           "helmet", "chestplate", "leggings", "boots",
           "bow", "crossbow", "trident", "shield",
           "elytra", "rod"],
    "max": 1, "book": 4, "item": 8
  },
  {
    "id": 29, "name": "Impaling",
    "on": ["trident"],
    "max": 5, "book": 2, "item": 4
  },
  {
    "id": 30, "name": "Riptide",
    "on": ["trident"],
    "max": 3, "book": 2, "item": 4
  },
  {
    "id": 31, "name": "Loyalty",
    "on": ["trident"],
    "max": 3, "book": 1, "item": 1
  },
  {
    "id": 32, "name": "Channeling",
    "on": ["trident"],
    "max": 1, "book": 4, "item": 8
  },
  {
    "id": 33, "name": "Multishot",
    "on": ["crossbow"],
    "max": 1, "book": 2, "item": 4
  },
  {
    "id": 34, "name": "Piercing",
    "on": ["crossbow"],
    "max": 4, "book": 1, "item": 1
  },
  {
    "id": 35, "name": "Quick Charge",
    "on": ["crossbow"],
    "max": 3, "book": 1, "item": 2
  },
  {
    "id": 36, "name": "Soul Speed",
    "on": ["boots"],
    "max": 3, "book": 4, "item": 8
  },
  {
    "id": null, "name": "Sweeping Edge",
    "on": ["sword"],
    "max": 3, "book": 2, "item": 4
  }
];
const groups = [
  ["Sharpness", "Smite", "Bane of Arthropods"],
  ["Fortune", "Silk Touch"],
  ["Protection", "Fire Protection",
   "Blast Protection", "Projectile Protection"],
  ["Depth Strider", "Frost Walker"],
  ["Infinity", "Mending"],
  ["Multishot", "Piercing"],
  ["Loyalty", "Riptide"],
  ["Channeling", "Riptide"],
  ["Silk Touch", "Looting"],
  ["Silk Touch", "Luck of the Sea"]
];

function repairCost(anvilUses){
  return (2 ** anvilUses) - 1;
}

function roman(number){
  const dict = { 1: "I", 2: "II", 3: "III", 4: "IV", 5: "V"};
  return dict[number];
}

const structures = {
  1: {
    "data": [
         [null],
      [null,  null]
    ],
    "index": [[1, 1]],
    "weight": [1],
    "penalty": 0
  },
  2: {
    "data": [
                [null],
          [null,       null],
      [null,  null]
    ],
    "index": [[2, 1], [1, 1]],
    "weight": [1, 1],
    "penalty": 1
  },
  3: {
    "data": [
                      [null],
               [null,           null],
         [null,      null],
      [null,  null]
    ],
    "index": [[3, 1], [2, 1], [1, 1]],
    "weight": [1, 1, 1],
    "penalty": 4
  },
  4: {
    "data": [
                      [null],
               [null,           null],
         [null,      null,    null,   null],
      [null,  null]
    ],
    "index": [[2, 3], [3, 1], [2, 1], [2, 2]],
    "weight": [2, 1, 1, 1],
    "penalty": 5, "when": 6, "then": {
      "data": [
                               [null],
                       [null,           null],
                 [null,      null],
            [null,  null],
        [null,  null]
      ],
      "index": [[4, 1], [3, 1], [2, 1], [1, 1]],
      "weight": [1, 1, 1, 1],
      "penalty": 11
    }
  },
  5: {
    "data": [
                      [null],
               [null,              null],
         [null,       null,      null,   null],
      [null,  null,  null, null]
    ],
    "index": [[3, 3], [2, 3], [3, 1], [3, 2], [2, 2]],
    "weight": [2, 2, 1, 1, 1],
    "penalty": 6, "when": 6, "then": {
      "data": [
                               [null],
                       [null,           null],
                 [null,      null,   null,  null],
            [null,  null],
        [null,  null]
      ],
      "index": [[2, 3], [4, 1], [3, 1], [2, 1], [2, 2]],
      "weight": [2, 1, 1, 1, 1],
      "penalty": 12
    }
  },
  6: {
    "data": [
                            [null],
               [null,                      null],
         [null,       null,           null,     null],
      [null,  null,  null, null,   null, null]
    ],
    "index": [[3, 5], [3, 3], [2, 3], [3, 1], [3, 2], [3, 4]],
    "weight": [2, 2, 2, 1, 1, 1],
    "penalty": 9, "when": 4, "then": {
      "data": [
                               [null],
                       [null,             null],
                 [null,       null,     null,  null],
            [null,  null,  null, null],
        [null,  null]
      ],
      "index": [[3, 3], [2, 3], [4, 1], [3, 1], [2, 2], [3, 2]],
      "weight": [2, 2, 1, 1, 1, 1],
      "penalty": 13
    }
  },
  7: {
    "data": [
                              [null],
               [null,                       null],
         [null,       null,           null,       null],
      [null,  null,  null, null,   null, null,  null, null]
    ],
    "index": [[3, 7], [3, 5], [3, 6], [3, 3], [3, 1], [3, 2], [3, 4]],
    "weight": [3, 2, 2, 2, 1, 1, 1],
    "penalty": 10, "when": 4, "then": {
      "data": [
                                   [null],
                       [null,                 null],
                  [null,        null,       null,  null],
            [null,     null,   null, null],
        [null,  null, null, null]
      ],
      "index": [[4, 3], [3, 3], [2, 3], [4, 1], [4, 2], [2, 2], [3, 2]],
      "weight": [2, 2, 2, 1, 1, 1, 1],
      "penalty": 14
    }
  },
  8: {
    "data": [
                                   [null],
                     [null,                    null],
                [null,        null,         null,    null],
          [null,     null,   null, null,  null, null],
      [null,  null, null, null]
    ],
    "index": [[3, 5], [4, 3], [3, 3], [2, 3], [4, 1], [4, 2], [3, 4], [3, 2]],
    "weight": [2, 2, 2, 2, 1, 1, 1, 1],
    "penalty": 17
  },
  9: {
    "data": [
                                        [null],
                           [null,                        null],
                [null,                 null,         null,    null],
          [null,     null,         null,   null,  null, null],
      [null,  null, null, null, null, null]
    ],
    "index": [[4, 5], [3, 5], [4, 3], [3, 3], [2, 3], [4, 1], [4, 2], [3, 4], [4, 4]],
    "weight": [2, 2, 2, 2, 2, 1, 1, 1, 1],
    "penalty": 18
  }
};

let logs;
function log(...entries){
  logs.value += entries.map(e => {
    if((typeof e === "object") && (e !== null))
      return JSON.stringify(e);
    else
      return e;
  }).join(" ") + "\n";
  logs.scrollTop = logs.scrollHeight;
}

let item;
let select;
let result;
let magic = { };

window.onload = () => {

  const button = document.getElementById("makeBtn");
  button.onclick = () => { make(item, magic); };
  logs = document.getElementById("log");
  result = document.getElementById("result");

  select = document.getElementById("item");
  select.onchange = () => { change(); };

  const togBtn = document.getElementById("toggleLogs");
  togBtn.onclick = () => {
    logs.classList.toggle("hide");
  };
}

function change(){

  result.innerHTML = "";

  item = select.value;
  magic = { };

  const table = document.getElementById("ench");
  table.innerHTML = "";

  for(let enchantment of enchantments){
    if(!enchantment.on.includes(item)) continue;
    const row = document.createElement("tr");
    const text = document.createElement("td");
    text.innerHTML = enchantment.name;
    row.appendChild(text);
    const butt = document.createElement("td");
    for(let i = 1; i <= enchantment.max; i ++){
      const button = document.createElement("input");
      button.type = "button";
      button.value = roman(i);
      button.id = enchantment.name.split(" ").join("_") + i;
      button.onclick = () => {
        click(enchantment.name, i, enchantment.max);
      };
      butt.appendChild(button);
    }
    const button = document.createElement("input");
    button.type = "button";
    button.value = "-";
    button.onclick = () => {
      click(enchantment.name, 0, enchantment.max);
    };
    butt.appendChild(button);
    row.appendChild(butt);
    table.appendChild(row)
  }
}

function click(name, i, max){

  const id = name.split(" ").join("_");

  for(let j = 1; j <= max; j ++){
    const el = document.getElementById(id + j);
    el.classList.remove("selected");
  }

  if(i){
    const el = document.getElementById(id + i);
    el.classList.add("selected");
    magic[name] = i;

  } else {
    delete magic[name];
  }
}


function make(){

  logs.value = "";
  result.innerHTML = "";

  if(Object.keys(magic).length == 0) return;

  const start = new Date();
  log("Searching for enchantments...");
  const enchants = [];
  for(let enchant in magic){
    const enchantment = enchantments.filter(
      en => en.name == enchant
    )[0];

    let level = "";
    let lvl = magic[enchant];
    if(enchantment.max != 1)
      level = " " + (roman(lvl) ?? lvl);

    log("Found", enchantment.name + level);

    if((lvl > enchantment.max) || (lvl < 1)){
      log("Level not in allowed range");
      return;
    }

    if(!enchantment.on.includes(item)){
      log("Not available for this item");
      return;
    }

    enchants.push({
      "e": enchant + level,
      "value": enchantment.book * lvl
    });

  }

  let conflict = false;
  for(let group of groups){
    const filter = Object.keys(magic).filter(
      en => group.includes(en)
    );
    const count = filter.length;
    if(count >= 2){
      log(
        "Enchantments conflict found:", filter.join(", ")
      );
      conflict = true;
    }
  }
  if(conflict) return;
  log("No conflicts found");

  log("Searching for optimal binary tree...");
  let data = structures[enchants.length];
  log("Found tree with weights", data.weight.join(" "));
  if("when" in data){
    log("Found alternative")
    if(
      Math.min(...enchants.map(e => e.value)) > data.when
    ){
      data = data.then;
      log(
        "Alternative applied, new weights:",
        data.weight.join(" ")
      );
    } else {
      log("Alternative not matching");
    }
  }
  const tree = data.data;
  const sorted = enchants.sort((a, b) => a.value - b.value);

  log("Working with enchant costs", enchants.map(e => e.value).join(" "));

  log("Counting using collected data...");
  let cost = 0;
  tree[tree.length - 1][0] = [item, [], 0, 0];
  for(let i in sorted){
    const index = data.index[i];
    tree[index[0]][index[1]] = [
      "book", [sorted[i].e], 0, sorted[i].value
    ];
    cost += data.weight[i] * sorted[i].value;
  }
  log("Enchanting cost:", cost);
  log("Prior work penalty:", data.penalty);
  log("Total cost:", cost + data.penalty);

  log("Generating output...");
  function printTree(level, index){
    if(
      ((level + 1) in tree) &&
      ((index * 2) in tree[level + 1])
    ){
      const left = printTree(level + 1, index * 2);
      const right = printTree(level + 1, index * 2 + 1);
      const en = [...left[1], ...right[1]];
      const cost = repairCost(left[2]) + repairCost(right[2])
                 + right[3];
      const anvilUses = Math.max(left[2], right[2]) + 1;
      const value = left[3] + right[3];
      const middle = [left[0], en, anvilUses, value];

      const row = document.createElement("tr");

      const leftEl = document.createElement("td");
      const leftImg = document.createElement("img");
      leftImg.src = "images/" + left[0] + ".gif";
      leftEl.appendChild(leftImg);
      leftEl.innerHTML += "<br>";
      const leftTxt = document.createElement("span");
      leftTxt.innerHTML = left[1].join("<br>");
      leftEl.appendChild(leftTxt);
      row.appendChild(leftEl);

      const rightEl = document.createElement("td");
      const rightImg = document.createElement("img");
      rightImg.src = "images/" + right[0] + ".gif";
      rightEl.appendChild(rightImg);
      rightEl.innerHTML += "<br>";
      const rightTxt = document.createElement("span");
      rightTxt.innerHTML = right[1].join("<br>");
      rightEl.appendChild(rightTxt);
      row.appendChild(rightEl);

      const xpEl = document.createElement("td");
      const xpImg = document.createElement("img");
      xpImg.src = "images/xp.gif";
      xpEl.appendChild(xpImg);
      xpEl.innerHTML += "<br>";
      const xpTxt = document.createElement("span");
      xpTxt.innerHTML = cost + " levels";
      xpEl.appendChild(xpTxt);
      row.appendChild(xpEl);

      result.appendChild(row);

      return middle;
    } else {
      return tree[level][index];
    }
  }
  const last = printTree(0, 0);

  const row = document.createElement("tr");

  const leftEl = document.createElement("td");
  const leftTxt = document.createElement("span");
  leftTxt.innerHTML = "Result";
  leftEl.appendChild(leftTxt);
  row.appendChild(leftEl);

  const rightEl = document.createElement("td");
  const rightImg = document.createElement("img");
  rightImg.src = "images/" + last[0] + ".gif";
  rightEl.appendChild(rightImg);
  rightEl.innerHTML += "<br>";
  const rightTxt = document.createElement("span");
  rightTxt.innerHTML = last[1].join("<br>");
  rightEl.appendChild(rightTxt);
  row.appendChild(rightEl);

  const xpEl = document.createElement("td");
  const xpImg = document.createElement("img");
  xpImg.src = "images/xp.gif";
  xpEl.appendChild(xpImg);
  xpEl.innerHTML += "<br>";
  const xpTxt = document.createElement("span");
  xpTxt.innerHTML = cost + data.penalty + " levels";
  xpEl.appendChild(xpTxt);
  row.appendChild(xpEl);

  result.appendChild(row);

  log("Done in", new Date() - start, "miliseconds");
}
