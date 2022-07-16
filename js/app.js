header = document.getElementById(`main_h2`)
header[`style`][`textAlign`] = `center`;
header[`style`][`color`] = `red`;

ptag = document.getElementsByClassName(`ptags`)
for (let i = 0; i < ptag.length; i++){
    ptag[i][`innerHTML`] = `i am the new ptag`
}

all_imgs = document.querySelectorAll(`img`)
for (let i = 0; i < all_imgs.length; i++){
all_imgs[i].setAttribute(`src`, `https://images.unsplash.com/photo-1657976726689-c254c91cbd36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80`)
}

all_ptags = document.querySelectorAll(`p`)
for (let i = 0; i < all_ptags.length; i++) {
all_ptags[i][`innerHTML`](`string`).includes += `<p>ptag inside ptag? ptag ception</p>`
}