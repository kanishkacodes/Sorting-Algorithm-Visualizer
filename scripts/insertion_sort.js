function Insertion() {
    //Displaying Time complexities
    document.getElementById("Time_Worst").innerText = "O(N^2)";
    document.getElementById("Time_Average").innerText = "Θ(N^2)";
    document.getElementById("Time_Best").innerText = "Ω(N)";

    //Displaying Space complexity
    document.getElementById("Space_Worst").innerText = "O(1)";

    c_delay = 0;

    for (var j = 0; j < array_size; j++) {
        div_update(divs[j], div_sizes[j], "rgb(18, 230, 209)");//updating the color

        var key = div_sizes[j];
        var i = j - 1;
        while (i >= 0 && div_sizes[i] > key) {
            div_update(divs[i], div_sizes[i], "blue");//updating the color
            div_update(divs[i + 1], div_sizes[i + 1], "blue");//updating the color

            div_sizes[i + 1] = div_sizes[i];

            div_update(divs[i], div_sizes[i], "blue");//updating the height
            div_update(divs[i + 1], div_sizes[i + 1], "blue");//updating the height

            div_update(divs[i], div_sizes[i], "red");//updating the color
            if (i == (j - 1)) {
                div_update(divs[i + 1], div_sizes[i + 1], "rgb(18, 230, 209)");//updating the color
            }
            else {
                div_update(divs[i + 1], div_sizes[i + 1], "red");//updating the color
            }
            i -= 1;
        }
        div_sizes[i + 1] = key;

        for (var t = 0; t < j; t++) {
            div_update(divs[t], div_sizes[t], "green");//updating the color
        }
    }
    div_update(divs[j - 1], div_sizes[j - 1], "green");//updating the color
    enable_buttons();
}
