let money = 10;
let soapBuyPrice = 1;
let soapSellPrice = 1;
let soapSellChance = 0;
let buySoapPriceModifier = 1;
let soapSellChanceModifier = 1;
let soapResoapchModifier = 1;
let soapInventory = 0;
let soapMaxInventory = 50;
let soapQuality = ["terrible", "bad", "mediocre", "so-so", "good", "amazing", "godly"];
let goals = ["Reach $15", "Kill yourself"];
let soapQualityNumber = 0;
let soapience = 0;
let soapienceMultiplier = 1;
let tutorial3showing = 0;
let marketerCount = 0;
let buyerCount = 0;
let resoapcherCount = 0;
let marketerManagerCount = 0;
let marketerManagerCount2 = 0;
let buyerManagerCount = 0;
let workersbought = 0;
let philosoaphybought = 0;
let megamarketingbought = 0;

document.getElementById("qualitysoapbad").style.display = "none";
document.getElementById("bettermarketing2row").style.display = "none";
document.getElementById("bettermarketing3row").style.display = "none";
document.getElementById("bettermarketing4row").style.display = "none";
document.getElementById("bettermarketing5row").style.display = "none";
document.getElementById("betterresoapch2row").style.display = "none";
document.getElementById("discount2row").style.display = "none";
document.getElementById("philosoaphyrow").style.display = "none";
document.getElementById("workersrow").style.display = "none";
document.getElementById("inventionrow").style.display = "none";
document.getElementById("megamarketing1row").style.display = "none";
document.getElementById("marketermanagerrow").style.display = "none";
document.getElementById("marketermanager2row").style.display = "none";

function background () {
    if (Math.floor(Math.random * 10000) === 1) {
        document.getElementById("html").style.background = url("https://img.leafcdn.tv/640/clsd/getty/c5b53d6f854944a1bc622843470d51f0");
    } else {
        document.getElementById("html").style.background = url(https://dreams.metroeve.com/wp-content/uploads/2016/12/dreams.metroeve_soap-dreams-meaning.jpg");
    }
}

function buyasoap () {
    if (money >= 1 && soapInventory < soapMaxInventory) {
        money = (money - (soapBuyPrice * buySoapPriceModifier)).toFixed(2);
        document.getElementById("money").innerHTML = "Money = $" + money;
        soapInventory++;
        document.getElementById("inventory").innerHTML = soapInventory + "/" + soapMaxInventory + " Inventory";
    }
}

function sellasoap() {
    if (soapInventory >= 1) {
        money = +money + +soapSellPrice;
        document.getElementById("money").innerHTML = "Money = $" + money;
        soapInventory--;
        document.getElementById("inventory").innerHTML = soapInventory + "/" + soapMaxInventory + " Inventory";
        if (money >= 15 && tutorial3showing === 1) {
            tutorial4appear();
            tutorial3showing = 0;
        }
    }
}

function raiseSoapPrice() {
    soapSellPrice = soapSellPrice + 0.25;
    document.getElementById("soapSellPrice").innerHTML = "Selling for: $" + soapSellPrice;
}

function lessenSoapPrice() {
    if (soapSellPrice > 0.25) {
        soapSellPrice = soapSellPrice - 0.25;
        document.getElementById("soapSellPrice").innerHTML = "Selling for: $" + soapSellPrice;
    }
}

function sellSoapChance() {
    let soapSellChance = ((soapSellPrice - soapBuyPrice) * 100) / soapSellChanceModifier;
    if (Math.floor((Math.random() * soapSellChance) + 1) === 1) {
        sellasoap();
    }
}

function research () {
    soapience = (+soapience + +soapResoapchModifier).toFixed(1);
    document.getElementById("soapience").innerHTML = soapience + " Soapience.";
    if (soapience >= 1000 && workersbought === 0) {
        document.getElementById("workersrow").style.display = "table-row";
    }
    if (soapience >= 1000 && philosoaphybought === 0) {
        document.getElementById("philosoaphyrow").style.display = "table-row";
    }
    if (soapience >= 3000 && megamarketingbought === 0) {
        document.getElementById("megamarketing1row").style.display = "table-row";
    }
}

function workersUnlock () {
    workersbought++;
    document.getElementById("workerMenu").style.display = "inline-block";
    document.getElementById("tutorial4box").style.display = "none";
    document.getElementById("workertutorial1box").style.display = "block";
}

function techUnlock () {
    document.getElementById("techMenu").style.display = "inline-block";
    document.getElementById("tutorial4box").style.display = "none";
    document.getElementById("techtutorial1box").style.display = "block";
    document.getElementById("research").style.display = "inline-block";
}

function buyMarketer () {
    if (money >= 5) {
        marketerCount++;
        money = (+money - 5).toFixed(2);
        setInterval(sellSoapChance, (1000 / marketerCount));
        document.getElementById("money").innerHTML = "Money = $" + money;
        document.getElementById("marketerCount").innerHTML = marketerCount + " workers";
        document.getElementById("marketermanagerrow").style.display = "table-row"
    }
}

function buyBuyer () {
    if (money >= 10) {
        buyerCount++;
        money = (+money - 10).toFixed(2);
        setInterval(buyasoap, (15000 / buyerCount));
        document.getElementById("money").innerHTML = "Money = $" + money;
        document.getElementById("buyerCount").innerHTML = buyerCount + " workers";
    }
}

function buyBuyerManager () {
    if (money >= 75) {
        buyerManagerCount++;
        money = (+money - 75).toFixed(2);
        setInterval(buyBuyer, (5000 / buyerManagerCount));
        document.getElementById("money").innerHTML = "Money = $" + money;
        document.getElementById("buyerManagerCount").innerHTML = buyerManagerCount + " managers";
    }
}

function buyResoapcher () {
    if (money >= 25) {
        resoapcherCount++;
        money = money - 25;
        techUnlock();
        setInterval(research, (1000 / resoapcherCount));
        document.getElementById("money").innerHTML = "Money = $" + money;
        document.getElementById("resoapchers").innerHTML = resoapcherCount + " workers";
    } 
}

function buyMarketerManager () {
    if (money >= 50) {
        marketerManagerCount++;
        money = money - 50;
        setInterval(buyMarketer, (5000 / marketerManagerCount));
        document.getElementById("money").innerHTML = "Money = $" + money;
        document.getElementById("marketermanagers").innerHTML = marketerManagerCount + " managers";
        document.getElementById("marketermanager2row").style.display = "table-row";
    }
}

function buyMarketerManager2 () {
    if (money >= 150) {
        marketerManagerCount2++;
        money = +money - 150;
        setInterval(buyMarketerManager, (5000 / marketerManagerCount2));
        document.getElementById("money").innerHTML = "Money = $" + money;
        document.getElementById("marketermanagers2").innerHTML = marketerManagerCount2 + " managers";
    }
}

function techbettermarketing1 () {
    if (soapience >= 200) {
        sellSoapChanceModifier = 1.2 * soapSellChanceModifier;
        soapience = soapience - 200;
        document.getElementById("bettermarketing1row").style.display = "none";
        document.getElementById("bettermarketing2row").style.display = "table-row";
    }
    document.getElementById("soapience").innerHTML = soapience + " Soapience.";
}

function techbettermarketing2 () {
    if (soapience >= 750) {
        sellSoapChanceModifier = 1.2 * soapSellChanceModifier;
        soapience = soapience - 750;
        document.getElementById("bettermarketing2row").style.display = "none";
        document.getElementById("bettermarketing3row").style.display = "table-row";
    }
    document.getElementById("soapience").innerHTML = soapience + " Soapience.";
}

function techbettermarketing3 () {
    if (soapience >= 2000) {
        sellSoapChanceModifier = 1.2 * soapSellChanceModifier;
        soapience = soapience - 2000;
        document.getElementById("bettermarketing3row").style.display = "none";
        document.getElementById("bettermarketing4row").style.display = "table-row";
    }
    document.getElementById("soapience").innerHTML = soapience + " Soapience.";
}

function techbettermarketing4 () {
    if (soapience >= 4000) {
        sellSoapChanceModifier = 1.2 * soapSellChanceModifier;
        soapience = soapience - 4000;
        document.getElementById("bettermarketing4row").style.display = "none";
        document.getElementById("bettermarketing5row").style.display = "table-row";
    }
    document.getElementById("soapience").innerHTML = soapience + " Soapience.";
}

function techbettermarketing5 () {
    if (soapience >= 8000) {
        sellSoapChanceModifier = 1.2 * soapSellChanceModifier;
        soapience = soapience - 8000;
        document.getElementById("bettermarketing5row").style.display = "none";
    }
    document.getElementById("soapience").innerHTML = soapience + " Soapience.";
}

function techmegamarketing1 () {
    if (soapience >= 5000) {
        sellSoapChanceModifier = 1.5 * soapSellChanceModifier;
        soapience = soapience - 5000;
        megamarketingbought++;
        document.getElementById("megamarketing1row").style.display = "none";
    }
    document.getElementById("soapience").innerHTML = soapience + " Soapience.";
}

function techphilosoaphy () {
    if (soapience >= 2000) {
        soapResoapchModifier = (3 * soapResoapchModifier).toFixed(2);
        soapience = soapience - 2000;
        philosoaphybought++;
        document.getElementById("philosoaphyrow").style.display = "none";
        document.getElementById("inventionrow").style.display = "table-row";
    }
    document.getElementById("soapience").innerHTML = soapience + " Soapience.";
}

function techdiscount1 () {
    if (soapience >= 350) {
        buySoapPriceModifier = (0.9 * buySoapPriceModifier).toFixed(2);
        soapience = soapience - 350;
        document.getElementById("discount1row").style.display = "none";
        document.getElementById("discount2row").style.display = "table-row";
        document.getElementById("soapBuyPrice").innerHTML = "Cost: " + buySoapPriceModifier;
    }
    document.getElementById("soapience").innerHTML = soapience + " Soapience.";
}

function techdiscount2 () {
    if (soapience >= 750) {
        buySoapPriceModifier = (0.9 * buySoapPriceModifier).toFixed(2);
        soapience = soapience - 750;
        document.getElementById("discount2row").style.display = "none";
        document.getElementById("soapBuyPrice").innerHTML = "Cost: " + buySoapPriceModifier;
    }
    document.getElementById("soapience").innerHTML = soapience + " Soapience.";
}

function techbetterresoapch1 () {
    if (soapience >= 500) {
        soapResoapchModifier = (2 * soapResoapchModifier).toFixed(2);
        soapience = soapience - 500;
        document.getElementById("betterresoapch1row").style.display = "none";
        document.getElementById("betterresoapch2row").style.display = "table-row";
    }
    document.getElementById("soapience").innerHTML = soapience + " Soapience.";
}

function techbetterresoapch2 () {
    if (soapience >= 1500) {
        soapResoapchModifier = (2 * soapResoapchModifier).toFixed(2);
        soapience = soapience - 1500;
        document.getElementById("betterresoapch2row").style.display = "none";
    }
    document.getElementById("soapience").innerHTML = soapience + " Soapience.";
}

function techworkers () {
    if (soapience >= 2500) {
        soapience = soapience - 2500;
        workersUnlock();
        workersbought++;
        document.getElementById("workersrow").style.display = "none";
    }
}

function techinvention () {
    if (soapience >= 5000) {
        soapience = soapience - 5000;
        soapSellChanceModifier = soapSellChanceModifier * 1.25;
        soapResoapchModifier = (soapResoapchModifier * 2).toFixed(2);
        document.getElementById("soapience").innerHTML = soapience + " Soapience.";
        document.getElementById("inventionrow").style.display = "none";
        document.getElementById("qualitysoapbad").style.display = "table-row";
    }
}

function qualitySoapBad () {
    if (soapience >= 7500) {
        soapQualityNumber++;
        document.getElementById("qualitysoapbad").style.display = "none";
        document.getElementById("soapience").innerHTML = soapience + " Soapience";
        document.getElementById("soapQuality").innerHTML = "Quality is " + soapQuality[soapQualityNumber] + ".";
    }
}

function tutorial1disappear () {
    document.getElementById("tutorial1box").style.display = "none";
    document.getElementById("tutorial2box").style.display = "block";
}

function tutorial2disappear () {
    document.getElementById("tutorial2box").style.display = "none";
    document.getElementById("tutorial3box").style.display = "block";
}

function tutorial3disappear () {
    document.getElementById("tutorial3box").style.display = "none";
    tutorial3showing = 1;
}

function tutorial4appear () {
    document.getElementById("tutorial4box").style.display = "block";
}

function workertutorial1disappear () {
    document.getElementById("workertutorial1box").style.display = "none";
}

function techtutorial1disappear () {
    document.getElementById("techtutorial1box").style.display = "none";
}

function freemuns () {
    money = +money + 10;
    document.getElementById("money").innerHTML = "Money = $" + money;
    if (money >= 15 && tutorial3showing === 1) {
            tutorial4appear();
            tutorial3showing = 0;
    }
}

function freesoapience () {
    soapience = +soapience + 1000;
    document.getElementById("soapience").innerHTML = soapience + " Soapience.";
}

document.getElementById("money").innerHTML = "Money = $" + money;
document.getElementById("inventory").innerHTML = soapInventory + "/" + soapMaxInventory + " Inventory";
document.getElementById("soapQuality").innerHTML = "Quality is " + soapQuality[soapQualityNumber] + ".";
document.getElementById("soapBuyPrice").innerHTML = "Cost: $" + soapBuyPrice;
document.getElementById("soapSellPrice").innerHTML = "Selling for: $" + soapSellPrice;
document.getElementById("soapience").innerHTML = soapience + " Soapience.";
document.getElementById("getsoap").addEventListener("click", buyasoap);
document.getElementById("sellsoap").addEventListener("click", sellSoapChance);
document.getElementById("raiseSoapPrice").addEventListener("click", raiseSoapPrice);
document.getElementById("lessenSoapPrice").addEventListener("click", lessenSoapPrice);
document.getElementById("resoapch").addEventListener("click", research)
document.getElementById("tutorial1").addEventListener("click", tutorial1disappear);
document.getElementById("tutorial2").addEventListener("click", tutorial2disappear);
document.getElementById("tutorial3").addEventListener("click", tutorial3disappear);
document.getElementById("workertutorial1").addEventListener("click", workertutorial1disappear);
document.getElementById("unlockWorkers").addEventListener("click", workersUnlock);
document.getElementById("unlockTech").addEventListener("click", techUnlock);
document.getElementById("buymarketer").addEventListener("click", buyMarketer);
document.getElementById("buyresoapcher").addEventListener("click", buyResoapcher);
document.getElementById("buymarketermanager").addEventListener("click", buyMarketerManager);
document.getElementById("buymarketermanager2").addEventListener("click", buyMarketerManager2);
document.getElementById("buybuyer").addEventListener("click", buyBuyer);
document.getElementById("techbettermarketing1").addEventListener("click", techbettermarketing1);
document.getElementById("techbettermarketing2").addEventListener("click", techbettermarketing2);
document.getElementById("techbettermarketing3").addEventListener("click", techbettermarketing3);
document.getElementById("techbettermarketing4").addEventListener("click", techbettermarketing4);
document.getElementById("techbettermarketing5").addEventListener("click", techbettermarketing5);
document.getElementById("techmegamarketing1").addEventListener("click", techmegamarketing1);
document.getElementById("techdiscount1").addEventListener("click", techdiscount1);
document.getElementById("techdiscount2").addEventListener("click", techdiscount2);
document.getElementById("techbetterresoapch").addEventListener("click", techbetterresoapch1);
document.getElementById("techbetterresoapch2").addEventListener("click", techbetterresoapch2);
document.getElementById("techphilosoaphy").addEventListener("click", techphilosoaphy);
document.getElementById("techinvention").addEventListener("click", techinvention);
document.getElementById("techworkers").addEventListener("click", techworkers);
document.getElementById("qualitysoapupgradebad").addEventListener("click", qualitySoapBad);
document.getElementById("freemoney").addEventListener("click", freemuns);
document.getElementById("freesoapience").addEventListener("click", freesoapience);
document.getElementById("techtutorial1").addEventListener("click", techtutorial1disappear);
