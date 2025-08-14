/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const data = [
    {
        heading: "Length (Meter/Feet)",
        unitOne: "meters",
        unitTwo: "feet",
        value: 3.281
    },
    {
        heading: "Volume (Liter/Gallon)",
        unitOne: "liters",
        unitTwo: "gallons",
        value: 0.264
    },
    {
        heading: "Mass (Kilogram/Pound)",
        unitOne: "kilos",
        unitTwo: "pounds",
        value: 2.204
    },
];

const inputValue = document.getElementById("unit-converter");
const listToShow = document.getElementById("conversion-list");
const convertBtn = document.getElementById("convert-btn");

function convert() {
 
    const ulEl = data.map(item => {
        let unitValue = item.value;
        let actualValue = parseFloat(inputValue.value) || 1;
        let firstSide = (actualValue * unitValue).toFixed(3);
        let secondSide = (actualValue / unitValue).toFixed(3);

        return `
        <ul class="list-view">
            <h3>${item.heading}</h3>
            <div>
                <p> 
                ${actualValue} ${item.unitOne} = ${firstSide} ${item.unitTwo} |  
                ${actualValue} ${item.unitTwo} = ${secondSide} ${item.unitOne}
                </p>
            </div>
        </ul>`;
    })

    listToShow.innerHTML = ulEl.join(" ");
    // inputValue.value = ""
}

convertBtn.addEventListener("click", convert);