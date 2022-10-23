function Bubble() {
    //Dsiplaying Time complexities
    document.getElementById("Time_Worst").innerText = "O(N^2)";
    document.getElementById("Time_Average").innerText = "Θ(N^2)";
    document.getElementById("Time_Best").innerText = "Ω(N)";

    //Dsiplaying Space complexity
    document.getElementById("Space_Worst").innerText = "O(1)";

    c_delay = 0;

    for (var i = 0; i < array_size - 1; i++) {
        for (var j = 0; j < array_size - i - 1; j++) {
            div_update(divs[j], div_sizes[j], "rgb(18, 230, 209)");//updating the color

            if (div_sizes[j] > div_sizes[j + 1]) {
                div_update(divs[j], div_sizes[j], "blue");//updating the color
                div_update(divs[j + 1], div_sizes[j + 1], "blue");//updating the color

                var temp = div_sizes[j];
                div_sizes[j] = div_sizes[j + 1];
                div_sizes[j + 1] = temp;

                div_update(divs[j], div_sizes[j], "blue");//updating the color
                div_update(divs[j + 1], div_sizes[j + 1], "blue");//updating the color
            }
            div_update(divs[j], div_sizes[j], "red");//updating the color
        }
        div_update(divs[j], div_sizes[j], "green");//updating the color
    }
    div_update(divs[0], div_sizes[0], "green");//updating the color

    enable_buttons();
}
