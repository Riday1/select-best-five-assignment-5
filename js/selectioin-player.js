let count = 0;

//
document.getElementById('select-messi').addEventListener('click', function () {
    count++;
    if (count > 5) {
        alert('you cant select more than 5 player')
        return;
    }

    selectButtonAndDisableThem('select-messi')
    const elementValue = document.getElementById('messi-element').innerText
    setAppendChildToParentNode(elementValue)




})

document.getElementById("selct-naymer").addEventListener('click', function () {
    count++;
    if (count > 5) {
        alert('you cant select more than 5 player')
        return;
    }

    selectButtonAndDisableThem('selct-naymer')
    const elementValue = document.getElementById('naymer-element').innerText
    setAppendChildToParentNode(elementValue)
})


document.getElementById("select-salah").addEventListener('click', function () {
    count++;
    if (count > 5) {
        alert('you cant select more than 5 player')
        return;
    }

    selectButtonAndDisableThem('select-salah')
    const elementValue = document.getElementById('salah-element').innerText
    setAppendChildToParentNode(elementValue)
})
document.getElementById("select-Ozil").addEventListener('click', function () {
    count++;
    if (count > 5) {
        alert('you cant select more than 5 player')
        return;
    }
    selectButtonAndDisableThem('select-Ozil')
    const elementValue = document.getElementById('ozil-element').innerText
    setAppendChildToParentNode(elementValue)
})
document.getElementById("select-Mario").addEventListener('click', function () {
    count++;
    if (count > 5) {
        alert('you cant select more than 5 player')
        return;
    }
    selectButtonAndDisableThem('select-Mario')
    const elementValue = document.getElementById('mario-element').innerText
    setAppendChildToParentNode(elementValue)
})
document.getElementById("select-olavsol").addEventListener('click', function () {
    count++;
    if (count > 5) {
        alert('you cant select more than 5 player')
        return;
    }
    selectButtonAndDisableThem('select-olavsol')
    const elementValue = document.getElementById('olavsol-element').innerText
    setAppendChildToParentNode(elementValue)
})
document.getElementById("select-sami").addEventListener('click', function () {
    count++;
    if (count > 5) {
        alert('you cant select more than 5 player')
        return;
    }
    selectButtonAndDisableThem('select-sami')
    const elementValue = document.getElementById('sami-element').innerText
    setAppendChildToParentNode(elementValue)
})
document.getElementById("select-sergio").addEventListener('click', function () {
    count++;
    if (count > 5) {
        alert('you cant select more than 5 player')
        return;
    }
    selectButtonAndDisableThem('select-sergio')
    const elementValue = document.getElementById('sergio-element').innerText
    setAppendChildToParentNode(elementValue)
})
document.getElementById("select-vitor").addEventListener('click', function () {
    count++;
    if (count > 5) {
        alert('you cant select more than 5 player')
        return;
    }
    selectButtonAndDisableThem('select-vitor')
    const elementValue = document.getElementById('vitor-element').innerText
    setAppendChildToParentNode(elementValue)
})









