fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
        if (response.status === 404) {
            console.log("Error");
        }
        return response.json();
    })
    .then((response) => {
        const filter = response.filter((value, index, array) => {
            return (
                index ===
                array.findIndex(
                    (e) =>
                        e.name === value.name &&
                        e.username === value.username &&
                        e.email === value.email
                )
            );
        });
        func(filter);
        // console.log(response);
        // console.log(filter);
    })
    .catch((error) => {
        console.log(`${error} - Problem`);
    });

const container = document.getElementById("container");
container.classList.add("container");
// const imageBox = document.getElementById("imageBox");
// imageBox.classList.add("imagebox");
// const textBox = document.getElementById("textBox");
// textBox.classList.add("textbox");

const ip = 5;
const func = (a) => {
    const areYouSureContainer = document.createElement("div");
    const areYouSureBox = document.createElement("div");
    const areYouSureTitle = document.createElement("p");
    const YesNoButtonsBox = document.createElement("div");
    const Yes = document.createElement("button");
    const No = document.createElement("button");

    // const checkBoxDiv = document.createElement("div");
    // const input = document.createElement("input");
    // const dontAskText = document.createElement("p");

    areYouSureTitle.textContent = "Are you Sure?";
    Yes.textContent = "Yes";
    No.textContent = "No";

    // dontAskText.textContent = `Don't ask me again`;

    areYouSureTitle.classList.add("areYouSureTitle");
    areYouSureBox.classList.add("areYouSureBox");

    YesNoButtonsBox.classList.add("YesNoButtonsBox");
    areYouSureContainer.classList.add("areYouSureContainer");
    // areYouSureContainer.setAttribute("id", "areYouSureContainer");
    areYouSureContainer.classList.add("hide");
    // checkBoxDiv.classList.add("checkBoxDiv");

    // areYouSureBox.style.display = "inline-block";
    areYouSureBox.appendChild(areYouSureTitle);
    YesNoButtonsBox.appendChild(Yes);
    YesNoButtonsBox.appendChild(No);
    areYouSureBox.appendChild(YesNoButtonsBox);

    // checkBoxDiv.appendChild(input);
    // input.setAttribute("type", "checkbox");
    // input.setAttribute("id", "checkbox");

    const checkbox = document.getElementById("checkbox");

    // checkBoxDiv.appendChild(dontAskText);
    // areYouSureBox.appendChild(checkBoxDiv);

    areYouSureContainer.appendChild(areYouSureBox);
    document.body.appendChild(areYouSureContainer);

    // console.log(filter);

    for (let index = 0; index < a.length; index++) {
        const element = a[index];

        // create elements
        const item = document.createElement("div");
        const imageBox = document.createElement("div");
        const textBox = document.createElement("div");

        const nameAndX = document.createElement("div");
        const X = document.createElement("p");

        const image = document.createElement("img");
        const name = document.createElement("h3");
        const username = document.createElement("h3");
        const email = document.createElement("p");

        const button = document.createElement("button");

        // set values
        image.setAttribute("src", "./images/meduza.jpeg");
        name.textContent = element.name;
        username.textContent = element.username;
        email.textContent = element.email;
        button.textContent = "Contact";
        X.textContent = "X";

        // set classes
        image.classList.add("image");
        name.classList.add("name");
        username.classList.add("username");
        email.classList.add("email");
        button.classList.add("button");
        X.classList.add("X");

        imageBox.classList.add("imagebox");
        textBox.classList.add("textbox");

        item.classList.add("item");

        nameAndX.classList.add("xIconBox");

        // append
        container.appendChild(item);

        imageBox.appendChild(image);
        nameAndX.appendChild(name);
        nameAndX.appendChild(X);
        textBox.appendChild(nameAndX);

        // textBox.appendChild(name);
        textBox.appendChild(username);
        textBox.appendChild(button);

        textBox.appendChild(email);

        item.appendChild(imageBox);
        item.appendChild(textBox);

        // events
        button.addEventListener("click", () => {
            email.classList.toggle("Show");
        });
        X.addEventListener("click", () => {
            areYouSureContainer.classList.remove("hide");
            document.body.style.overflow = "hidden";
            Yes.addEventListener("click", () => {
                item.remove();
                areYouSureContainer.classList.add("hide");
                document.body.style.overflow = "scroll";
            });
            No.addEventListener("click", () => {
                areYouSureContainer.classList.add("hide");
                document.body.style.overflow = "scroll";
            });
        });
    }
};

// const subjects = [
//     {
//         kodi: `12W`,
//         dasaxeleba: "matematika",
//         qula: 12,
//         minichebuli_krediti: 0,
//         krediti: 6,
//     },
//     {
//         kodi: `12W - b`,
//         dasaxeleba: "qartuli",
//         qula: 24,
//         minichebuli_krediti: 0,
//         krediti: 6,
//     },
//     {
//         kodi: `128H`,
//         dasaxeleba: "istoria",
//         qula: 33,
//         minichebuli_krediti: 0,
//         krediti: 6,
//     },
//     {
//         kodi: `128H`,
//         dasaxeleba: "istoria",
//         qula: 33,
//         minichebuli_krediti: 0,
//         krediti: 6,
//     },
//     {
//         kodi: `128H`,
//         dasaxeleba: "istoria",
//         qula: 33,
//         minichebuli_krediti: 0,
//         krediti: 6,
//     },
// ];
// console.log(subjects[0].length);
// const tbody = document.getElementById("tbody");

// for (let index = 0; index < subjects.length; index++) {
//     const element = subjects[index];
//     const tableRow = document.createElement("tr");

//     // const element = subjects[0][index];
//     const tableData1 = document.createElement("td");
//     const tableData2 = document.createElement("td");
//     const tableData3 = document.createElement("td");
//     const tableData4 = document.createElement("td");
//     const tableData5 = document.createElement("td");

//     const kodi = document.createElement("p");
//     kodi.textContent = element.kodi;
//     tableData1.appendChild(kodi);

//     const dasaxeleba = document.createElement("a");
//     const qula = document.createElement("p");
//     const minichebuli_krediti = document.createElement("p");
//     const krediti = document.createElement("p");

//     dasaxeleba.textContent = element.dasaxeleba;
//     dasaxeleba.setAttribute("href", "http://youtube.com");
//     dasaxeleba.setAttribute("target", "_blank");
//     qula.textContent = element.qula;
//     minichebuli_krediti.textContent = element.minichebuli_krediti;
//     krediti.textContent = element.krediti;

//     tableData2.appendChild(dasaxeleba);
//     tableData3.appendChild(qula);
//     tableData4.appendChild(minichebuli_krediti);
//     tableData5.appendChild(krediti);

//     tableRow.appendChild(tableData1);
//     tableRow.appendChild(tableData2);
//     tableRow.appendChild(tableData3);
//     tableRow.appendChild(tableData4);
//     tableRow.appendChild(tableData5);

//     tbody.appendChild(tableRow);
// }

//---------------------------------------------

const arrow = document.getElementById("arrow");
const tbody = document.querySelector("tbody");

arrow.addEventListener("click", () => {
    arrow.classList.toggle("rotate");
    tbody.classList.toggle("show1");
    // arrow.classList.toggle("rotateReverse");
});

const people = [
    {
        name: "leri",
        surname: "ugulava",
        id: {
            nickname: "blatata",
            paganiala: "verxvi",
        },
        age: 20,
    },
    {
        name: "domenti",
        surname: "chaava",
        id: {
            nickname: "blatata",
            paganiala: "verxvi",
        },
        age: 27,
    },
    {
        name: "vaxo",
        surname: "toronjadze",
        id: {
            nickname: "blatata",
            paganiala: "verxvi",
        },
        age: 43,
    },
    {
        name: "tamriko",
        surname: "glonti",
        id: {
            nickname: "blatata",
            paganiala: "verxvi",
        },
        age: 23,
    },
];

// const foreach = people.forEach((a) => console.log(a.age));

const reduce = people.reduce((acc, cur) => {
    return acc + cur.age;
}, 0);
console.log(reduce);

const checkboxBtn = document.getElementById("checkboxBtn");
const checkboxDiv = document.getElementById("checkboxDiv");

const isFruit = document.getElementById("isFruit");
const isVagetable = document.getElementById("isVagetable");
const isFastFood = document.getElementById("isFastFood");
const p = document.createElement("p");
checkboxDiv.appendChild(p);

checkboxBtn.addEventListener("click", () => {
    if (isFruit.checked) {
        p.textContent = "you checked fruit";
    } else if (isVagetable.checked) {
        p.textContent = "you checked vagetable";
    } else {
        p.textContent = "you checked fast food";
    }
});
