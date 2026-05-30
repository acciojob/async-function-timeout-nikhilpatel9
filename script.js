const time = document.getElementById("delay");
const text = document.getElementById("text");
const btn = document.getElementById("btn");
const outPut = document.getElementById("output");

const handleSubmit = async function() {
    const delayValue = Number(time.value);
    const textValue = text.value;

    const delayPromise = new Promise((resolve) => {
        setTimeout(() => {
            resolve(textValue);
        }, delayValue*1000); 
    });

    const data = await delayPromise;
    outPut.innerHTML = `<p>${data}</p>`;
};

btn.addEventListener('click', handleSubmit);