// for homework, use for loop
// if/else to meet criteria

var ele = document.body.querySelector(".box");

var list = [
    {
        name:"Bob",
        damage:2,
        health:10,
        warrior:true
    },
    {
        name:"Jerry",
        damage:1,
        health:12,
        warrior:true
    },
    {
        name:"Mavis",
        damage:2,
        health:10,
        warrior:true
    },
    {
        name:"Morty",
        damage:4,
        health:10,
        warrior:true
    },
    {
        name:"Shorty",
        damage:10,
        health:3,
        warrior:false
    },
    {
        name:"Porty",
        damage:1,
        health:14,
        warrior:true
    },{
        name:"Perry",
        damage:2,
        health:9,
        warrior:true
    },
    {
        name:"Larry",
        damage:2,
        health:17,
        warrior:false
    }
];

for(var i = 0; i < list.length; i++) {
    var newEle = document.createElement("div");
    var nameEle = document.createElement("h2");
    var damageEle = document.createElement("h4");
    var healthEle = document.createElement("h4");
    if(list[i].damage >= 2 && list[i].health >= 10 && list[i].warrior == true) {
        nameEle.innerHTML = "Name: " + list[i].name;
        healthEle.innerHTML = "Health: " + list[i].health;
        damageEle.innerHTML = "Damage: " + list[i].damage;
    }
    if(list[i].name.includes("a")) {
        nameEle.classList.add("red");
        damageEle.classList.add("red");
        healthEle.classList.add("red");
    }
    newEle.appendChild(nameEle);
    newEle.appendChild(damageEle);
    newEle.appendChild(healthEle);
    ele.appendChild(newEle); // MUST HAVE CHILD IN APPEND
    // doing the above makes them on separate lines, no commas
}