const enchantments = [
  {
    "name": "Protection",
    "on": ["helmet", "chestplate", "leggings", "boots"],
    "max": 4, "book": 1
  },
  {
    "name": "Fire Protection",
    "on": ["helmet", "chestplate", "leggings", "boots"],
    "max": 4, "book": 1
  },
  {
    "name": "Feather Falling",
    "on": ["boots"],
    "max": 4, "book": 1
  },
  {
    "name": "Blast Protection",
    "on": ["helmet", "chestplate", "leggings", "boots"],
    "max": 4, "book": 2
  },
  {
    "name": "Projectile Protection",
    "on": ["helmet", "chestplate", "leggings", "boots"],
    "max": 4, "book": 1
  },
  {
    "name": "Thorns",
    "on": ["helmet", "chestplate", "leggings", "boots"],
    "max": 3, "book": 4
  },
  {
    "name": "Respiration",
    "on": ["helmet"],
    "max": 3, "book": 2
  },
  {
    "name": "Depth Strider",
    "on": ["boots"],
    "max": 3, "book": 2
  },
  {
    "name": "Aqua Affinity",
    "on": ["helmet"],
    "max": 1, "book": 2
  },
  {
    "name": "Sharpness",
    "on": ["sword", "axe"],
    "max": 5, "book": 1
  },
  {
    "name": "Smite",
    "on": ["sword", "axe", "mace"],
    "max": 5, "book": 1
  },
  {
    "name": "Bane of Arthropods",
    "on": ["sword", "axe", "mace"],
    "max": 5, "book": 1
  },
  {
    "name": "Knockback",
    "on": ["sword"],
    "max": 2, "book": 1
  },
  {
    "name": "Fire Aspect",
    "on": ["sword", "mace"],
    "max": 2, "book": 2
  },
  {
    "name": "Looting",
    "on": ["sword"],
    "max": 3, "book": 2
  },
  {
    "name": "Efficiency",
    "on": ["axe", "shovel", "hoe", "pickaxe", "shears"],
    "max": 5, "book": 1
  },
  {
    "name": "Silk Touch",
    "on": ["axe", "shovel", "hoe", "pickaxe"],
    "max": 1, "book": 4
  },
  {
    "name": "Unbreaking",
    "on": ["sword", "axe", "shovel", "hoe", "pickaxe",
           "shears",
           "helmet", "chestplate", "leggings", "boots",
           "bow", "crossbow", "trident", "shield",
           "elytra", "rod", "mace"],
    "max": 3, "book": 1
  },
  {
    "name": "Fortune",
    "on": ["axe", "shovel", "hoe", "pickaxe"],
    "max": 3, "book": 2
  },
  {
    "name": "Power",
    "on": ["bow"],
    "max": 5, "book": 1
  },
  {
    "name": "Punch",
    "on": ["bow"],
    "max": 2, "book": 2
  },
  {
    "name": "Flame",
    "on": ["bow"],
    "max": 1, "book": 2
  },
  {
    "name": "Infinity",
    "on": ["bow"],
    "max": 1, "book": 4
  },
  {
    "name": "Luck of the Sea",
    "on": ["rod"],
    "max": 3, "book": 2
  },
  {
    "name": "Lure",
    "on": ["rod"],
    "max": 3, "book": 2
  },
  {
    "name": "Frost Walker",
    "on": ["boots"],
    "max": 2, "book": 2
  },
  {
    "name": "Mending",
    "on": ["sword", "axe", "shovel", "hoe", "pickaxe",
           "shears",
           "helmet", "chestplate", "leggings", "boots",
           "bow", "crossbow", "trident", "shield",
           "elytra", "rod", "mace"],
    "max": 1, "book": 2
  },
  {
    "name": "Curse of Binding",
    "on": ["helmet", "chestplate", "leggings", "boots", "elytra"],
    "max": 1, "book": 4
  },
  {
    "name": "Curse of Vanishing",
    "on": ["sword", "axe", "shovel", "hoe", "pickaxe",
           "shears",
           "helmet", "chestplate", "leggings", "boots",
           "bow", "crossbow", "trident", "shield",
           "elytra", "rod", "mace"],
    "max": 1, "book": 4
  },
  {
    "name": "Impaling",
    "on": ["trident"],
    "max": 5, "book": 2
  },
  {
    "name": "Riptide",
    "on": ["trident"],
    "max": 3, "book": 2
  },
  {
    "name": "Loyalty",
    "on": ["trident"],
    "max": 3, "book": 1
  },
  {
    "name": "Channeling",
    "on": ["trident"],
    "max": 1, "book": 4
  },
  {
    "name": "Multishot",
    "on": ["crossbow"],
    "max": 1, "book": 2
  },
  {
    "name": "Piercing",
    "on": ["crossbow"],
    "max": 4, "book": 1
  },
  {
    "name": "Quick Charge",
    "on": ["crossbow"],
    "max": 3, "book": 1
  },
  {
    "name": "Soul Speed",
    "on": ["boots"],
    "max": 3, "book": 4
  },
  {
    "name": "Sweeping Edge",
    "on": ["sword"],
    "max": 3, "book": 2
  },
  {
    "name": "Swift Sneak",
    "on": ["leggings"],
    "max": 3, "book": 4
  },
  {
    "name": "Wind Burst",
    "on": ["mace"],
    "max": 3, "book": 2
  },
  {
    "name": "Density",
    "on": ["mace"],
    "max": 5, "book": 1
  },
  {
    "name": "Breach",
    "on": ["mace"],
    "max": 4, "book": 2
  }
];
const groups = [
  ["Sharpness", "Smite", "Bane of Arthropods"],
  ["Fortune", "Silk Touch"],
  ["Protection", "Fire Protection", "Blast Protection", "Projectile Protection"],
  ["Depth Strider", "Frost Walker"],
  ["Infinity", "Mending"],
  ["Multishot", "Piercing"],
  ["Loyalty", "Riptide"],
  ["Channeling", "Riptide"],
  ["Silk Touch", "Looting"],
  ["Silk Touch", "Luck of the Sea"],
];

function repairCost(anvilUses){
  return (2 ** anvilUses) - 1;
}

function roman(number){
  const dict = { 1: "I", 2: "II", 3: "III", 4: "IV", 5: "V"};
  return dict[number];
}

let logs;
function msg(error, ...entries) {
  let tx = "";
  if (error) tx += "<span class=r>";
  tx += entries.map(e => {
    if((typeof e === "object") && (e !== null))
      return JSON.stringify(e);
    else
      return e;
  }).join(" ");
  if(error) tx += "</span>";
  tx += "<br>";
  logs.innerHTML += tx;
  logs.scrollTop = logs.scrollHeight;
}
function log(...entries) {
  msg(false, ...entries);
}

let errored = false;
function error(...entries) {
  if(!errored) {
    alert("An error occured, check the logs");
    errored = true;
  }
  msg(true, ...entries);
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
  select.selectedIndex = -1;
  
  const togBtn = document.getElementById("toggleLogs");
  togBtn.onclick = () => {
    logs.classList.toggle("hide");
  };

  change();
}

function change() {
  result.innerHTML = "";

  item = select.value;
  magic = { };

  const table = document.getElementById("ench");
  table.innerHTML = "";

  for (let enchantment of enchantments) {
    if(!enchantment.on.includes(item)) continue;
    const row = document.createElement("tr");
    const text = document.createElement("td");
    text.innerHTML = enchantment.name;
    row.appendChild(text);
    const butt = document.createElement("td");
    for (let i = 1; i <= enchantment.max; i ++) {
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

function click(name, i, max) {
  const id = name.split(" ").join("_");

  for (let j = 1; j <= max; j ++) {
    const el = document.getElementById(id + j);
    el.classList.remove("selected");
  }

  if (i) {
    const el = document.getElementById(id + i);
    el.classList.add("selected");
    magic[name] = i;
  } else {
    delete magic[name];
  }
}


class Node {
  constructor(left, right, leaf) {
    this.left = left;
    this.right = right;
    this.leaf = leaf;
    this.item = null;
    this.ench = [];
  }
}

function gen_shapes(n) {
  if (n == 1) {
    return [null];
  }
  const shapes = [];
  for (let l = 0; l < n; l++) {
    const r = n - l;
    for (const left of gen_shapes(l)) {
      for (const right of gen_shapes(r)) {
        shapes.push([left, right]);
      }
    }
  }
  return shapes;
}

function build_tree(shape) {
  if (shape == null) {
    return new Node(null, null, true);
  }
  return new Node(build_tree(shape[0]), build_tree(shape[1]), false)
}

function collect_leafs(node, count, factors) {
  count = count ?? 0;
  factors = factors ?? [];
  if (node.leaf) {
    factors.push(count);
  } else {
    collect_leafs(node.left, count, factors)
    collect_leafs(node.right, count + 1, factors)
  }
  return factors;
}

function compute_internal(node) {
  if (node.leaf) return [0, 0];
  const [dl, cl] = compute_internal(node.left);
  const [dr, cr] = compute_internal(node.right);
  return [Math.max(dl, dr) + 1, cl + cr + repairCost(dl) + repairCost(dr)];
}

function total_cost(shape, numbers) {
  const tree = build_tree(shape);
  const factors = collect_leafs(tree);
  factors.sort((a, b) => a - b);
  const num = [...numbers];
  num.sort((a, b) => b - a);
  let leaf_cost = 0;
  for (let i = 0; i < numbers.length; i++) {
    leaf_cost += factors[i] * num[i];
  }
  const [_, internal] = compute_internal(tree);
  return leaf_cost + internal;
}

function find_tree(numbers) {
  const N = numbers.length;
  let best_cost = Infinity;
  let best_shape = null;
  for (const shape of gen_shapes(N)) {
    const cost = total_cost(shape, numbers);
    if (cost < best_cost) {
      best_cost = cost;
      best_shape = shape;
    }
  }
  return [best_cost, build_tree(best_shape)]
}

function pic(node) {
  const img = document.createElement("img");
  img.src = "images/" + node.item + ".gif";
  return img;
}

function make() {
  logs.innerHTML = "";
  result.innerHTML = "";
  errored = false;

  if (Object.keys(magic).length == 0) return;

  const start = new Date();
  log("Searching for enchantments...");
  const enchants = [];
  for (let enchant in magic) {
    const enchantment = enchantments.filter(
      en => en.name == enchant
    )[0];

    let level = "";
    let lvl = magic[enchant];
    if(enchantment.max != 1)
      level = " " + (roman(lvl) ?? lvl);

    log("Found", enchantment.name + level);

    if((lvl > enchantment.max) || (lvl < 1)){
      error("Level not in allowed range");
      return;
    }

    if (!enchantment.on.includes(item)) {
      error("Not available for this item");
      return;
    }

    enchants.push({
      "e": enchant + level,
      "value": enchantment.book * lvl
    });

  }

  let conflict = false;
  for (let group of groups) {
    const filter = Object.keys(magic).filter(
      en => group.includes(en)
    );
    const count = filter.length;
    if (count >= 2) {
      error(
        "Enchantments conflict found:", filter.join(", ")
      );
      conflict = true;
    }
  }
  if (conflict) return;
  log("No conflicts found");

  const sorted = enchants.sort((a, b) => a.value - b.value);
  log("Working with enchant costs", enchants.map(e => e.value).join(" "));

  log("Searching for optimal binary tree...");
  const [tcost, tree] = find_tree([...sorted.map(e => e.value), 100]);

  log("Total cost: ", tcost);
  log("Generating output...");

  const en = [...sorted, 100];
  function fill_tree(node) {
    if (node.leaf) {
      const e = en.shift();
      if (e == 100) {
        node.item = item;
      } else {
        node.item = "book";
        node.ench.push(e);
      }
    } else {
      const [_, re] = fill_tree(node.right);
      const [li, le] = fill_tree(node.left);
      node.item = li;
      node.ench.push(...le, ...re);
    }
    return [node.item, node.ench];
  }
  fill_tree(tree);

  function print_tree(node) {
    if (node.leaf) {
      return 0;
    }
    const lc = print_tree(node.left);
    const rc = print_tree(node.right);
    const cost = repairCost(lc) + repairCost(rc) + node.right.ench.reduce((a, b) => a + b.value, 0);
    
    const row = document.createElement("tr");

    const leftEl = document.createElement("td");
    leftEl.appendChild(pic(node.left));
    leftEl.innerHTML += "<br>";
    const leftTxt = document.createElement("span");
    leftTxt.innerHTML = node.left.ench.map(e => e.e).join("<br>");
    leftEl.appendChild(leftTxt);
    row.appendChild(leftEl);

    const rightEl = document.createElement("td");
    rightEl.appendChild(pic(node.right));
    rightEl.innerHTML += "<br>";
    const rightTxt = document.createElement("span");
    rightTxt.innerHTML = node.right.ench.map(e => e.e).join("<br>");
    rightEl.appendChild(rightTxt);
    row.appendChild(rightEl);

    const xpEl = document.createElement("td");
    const xpImg = document.createElement("img");
    xpImg.src = "images/xp.gif";
    xpEl.appendChild(xpImg);
    xpEl.innerHTML += "<br>";
    const xpTxt = document.createElement("span");
    xpTxt.innerHTML = cost + " level" + (cost == 1 ? "" : "s");
    xpEl.appendChild(xpTxt);
    row.appendChild(xpEl);

    result.appendChild(row);
    
    return Math.max(lc, rc) + 1;
  }
  print_tree(tree);

  const row = document.createElement("tr");

  const leftEl = document.createElement("td");
  const leftTxt = document.createElement("span");
  leftTxt.innerHTML = "Result";
  leftEl.appendChild(leftTxt);
  row.appendChild(leftEl);

  const rightEl = document.createElement("td");
  rightEl.appendChild(pic(tree));
  rightEl.innerHTML += "<br>";
  const rightTxt = document.createElement("span");
  rightTxt.innerHTML = tree.ench.map(e => e.e).join("<br>");
  rightEl.appendChild(rightTxt);
  row.appendChild(rightEl);

  const xpEl = document.createElement("td");
  const xpImg = document.createElement("img");
  xpImg.src = "images/xp.gif";
  xpEl.appendChild(xpImg);
  xpEl.innerHTML += "<br>";
  const xpTxt = document.createElement("span");
  xpTxt.innerHTML = tcost + " level" + (tcost == 1 ? "" : "s");
  xpEl.appendChild(xpTxt);
  row.appendChild(xpEl);

  result.appendChild(row);

  log("Done in", new Date() - start, "miliseconds");
}
