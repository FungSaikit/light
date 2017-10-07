window.onscroll = function () {
    topLocation = document.documentElement.scrollTop || document.body.scrollTop;
    if (topLocation < 100) {
        if (flag == 1){
            searchbar.style.borderBottom = "none";
            searchIMG0.src = "./IMG/search_bar/class_white.png";
            searchIMG1.src = "./IMG/search_bar/cs_white.png";
            searchInputIMG0.src = "./IMG/search_bar/search_white.png";
            searchInputIMG1.src = "./IMG/search_bar/clear_white.png";
            searchFrame.style.border = "1px solid white";
            searchInput.className = "searchinput0";
            flag = 0;
        }
        searchbar.style.backgroundColor = "rgba(255, 255, 255, " + (0.1 + topLocation / 400) + ")";
    } else {
        if (flag == 0) {
            searchbar.style.borderBottom = "1px solid lightgray";
            searchIMG0.src = "./IMG/search_bar/class_black.png";
            searchIMG1.src = "./IMG/search_bar/cs_black.png";
            searchInputIMG0.src = "./IMG/search_bar/search_black.png";
            searchInputIMG1.src = "./IMG/search_bar/clear_black.png";
            searchFrame.style.border = "1px solid dimgrey";
            searchInput.className = "searchinput1";
            flag = 1;
            searchbar.style.backgroundColor = "rgba(255, 255, 255, 0.8)";
        }
    }
}

