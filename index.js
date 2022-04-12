function getNum(){
    let num = document.getElementById('text-box').value;
    const h2 = document.getElementById("num").innerText = num;
    num = parseInt(h2)
    return num
}

function length(){
    num = getNum()
    const p = document.getElementById('length')
    metersToFeet = num * 3.28084
    metersToFeetFixed = metersToFeet.toFixed(3);
    feetToMeters = num / 3.28084
    feetToMetersFixed = feetToMeters.toFixed(3);
    
    p.innerText = num + " meters = " + metersToFeetFixed + " feet | " + num + " feet = " + feetToMetersFixed + " meters"
}

function volume(){
    num = getNum()
    const p = document.getElementById('volume')
    littersToGallons = num * 0.264171999999248
    litersToGallonsFixed = littersToGallons.toFixed(3)
    gallonsToLiters = num / 0.264171999999248
    gallonsToLitersFixed = gallonsToLiters.toFixed(3)
    
    p.innerText = num + " liters = " + litersToGallonsFixed + " gallons | " + num + " gallons = " + gallonsToLitersFixed + " liters"
}

function mass(){
    num = getNum()
    const p = document.getElementById('mass')
    kilosToPounds = num * 2.20462
    kilosToPoundsFixed = kilosToPounds.toFixed(3)
    poundsToKilos = num / 2.20462
    poundsToKilosFixed = poundsToKilos.toFixed(3)
    
    p.innerText = num + " kilos = " + kilosToPoundsFixed + " pounds | " + num + " pounds = " + poundsToKilosFixed + " kilos"
}