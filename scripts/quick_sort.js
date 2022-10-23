function Quick() {
    //Displaying Time complexities
    document.getElementById("Time_Worst").innerText = "O(N^2)";
    document.getElementById("Time_Average").innerText = "Θ(N log N)";
    document.getElementById("Time_Best").innerText = "Ω(N log N)";

    //Displaying Space complexity
    document.getElementById("Space_Worst").innerText = "O(log N)";

    c_delay = 0;

    quick_sort(0, array_size - 1);

    enable_buttons();
}

function quick_partition(start, end) {
    var i = start + 1;
    var piv = div_sizes[start];
    div_update(divs[start], div_sizes[start], "rgb(18, 230, 209)");//updating the color

    for (var j = start + 1; j <= end; j++) {

        if (div_sizes[j] < piv) {
            div_update(divs[j], div_sizes[j], "rgb(18, 230, 209)");//updating the color

            div_update(divs[i], div_sizes[i], "blue");//updating the color
            div_update(divs[j], div_sizes[j], "blue");//updating the color
            var temp = div_sizes[i];
            div_sizes[i] = div_sizes[j];
            div_sizes[j] = temp;

            div_update(divs[i], div_sizes[i], "blue");//updating the color
            div_update(divs[j], div_sizes[j], "blue");//updating the color

            div_update(divs[i], div_sizes[i], "red");//updating the height
            div_update(divs[j], div_sizes[j], "red");//updating the height

            i += 1;
        }
    }
    div_update(divs[start], div_sizes[start], "blue");//updating the color
    div_update(divs[i - 1], div_sizes[i - 1], "blue");//updating the color

    var temp = div_sizes[start];
    div_sizes[start] = div_sizes[i - 1];
    div_sizes[i - 1] = temp;

    div_update(divs[start], div_sizes[start], "blue");//updating the height
    div_update(divs[i - 1], div_sizes[i - 1], "blue");//updating the height

    for (var t = start; t <= i; t++) {
        div_update(divs[t], div_sizes[t], "green");//updating the color
    }

    return i - 1;
}

function quick_sort(start, end) {
    if (start < end) {

        var piv_pos = quick_partition(start, end);
        quick_sort(start, piv_pos - 1);
        quick_sort(piv_pos + 1, end);
    }
}
