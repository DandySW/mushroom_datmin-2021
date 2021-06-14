var lists = document.querySelectorAll("li .attribute1-unclick");
for (list in lists) {
    lists[list].onclick = function () {
        var clicked = document.querySelectorAll(".attribute1-click")[0];
        if (this.className == "attribute1-unclick") {
            if (clicked) clicked.className = "attribute1-unclick";
            this.className = "attribute1-click";

            var text = this.innerHTML;
            var dicti = { Bell: 0, Conical: 1, Convex: 2, Flat: 3 };
            document.getElementById("cap_shape").value = dicti[text];
        }
    }
}

var lists = document.querySelectorAll("li .attribute2-unclick");
for (list in lists) {
    lists[list].onclick = function () {
        var clicked = document.querySelectorAll(".attribute2-click")[0];
        if (this.className == "attribute2-unclick") {
            if (clicked) clicked.className = "attribute2-unclick";
            this.className = "attribute2-click";

            var text = this.innerHTML;
            var dicti = { Fibrous: 0, Grooves: 1, Scaly: 2, Smooth: 3 };
            document.getElementById("cap_surface").value = dicti[text];
        }
    }
}

var lists = document.querySelectorAll("li .attribute3-unclick");
for (list in lists) {
    lists[list].onclick = function () {
        var clicked = document.querySelectorAll(".attribute3-click")[0];
        if (this.className == "attribute3-unclick") {
            if (clicked) clicked.className = "attribute3-unclick";
            this.className = "attribute3-click";

            var text = this.innerHTML;
            var dicti = { Brown: 0, Buff: 1, Cinnamon: 2, Gray: 3, Green: 4, Pink: 5, Purple: 6, Red: 7, White: 8, Yellow: 9 };
            document.getElementById("cap_color").value = dicti[text];
        }
    }
}

var lists = document.querySelectorAll("li .attribute4-unclick");
for (list in lists) {
    lists[list].onclick = function () {
        var clicked = document.querySelectorAll(".attribute4-click")[0];
        if (this.className == "attribute4-unclick") {
            if (clicked) clicked.className = "attribute4-unclick";
            this.className = "attribute4-click";

            var text = this.innerHTML;
            var dicti = { Bruises: 0, No: 1 };
            document.getElementById("bruises").value = dicti[text];
        }
    }
}

var lists = document.querySelectorAll("li .attribute5-unclick");
for (list in lists) {
    lists[list].onclick = function () {
        var clicked = document.querySelectorAll(".attribute5-click")[0];
        if (this.className == "attribute5-unclick") {
            if (clicked) clicked.className = "attribute5-unclick";
            this.className = "attribute5-click";

            var text = this.innerHTML;
            var dicti = { Almond: 0, Anise: 1, Creosote: 2, Fishy: 3, Foul: 4, Musty: 5, None: 6, Pungent: 7, Spicy: 8 };
            document.getElementById("odor").value = dicti[text];
        }
    }
}

var lists = document.querySelectorAll("li .attribute6-unclick");
for (list in lists) {
    lists[list].onclick = function () {
        var clicked = document.querySelectorAll(".attribute6-click")[0];
        if (this.className == "attribute6-unclick") {
            if (clicked) clicked.className = "attribute6-unclick";
            this.className = "attribute6-click";

            var text = this.innerHTML;
            var dicti = { Attached: 0, Descending: 1, Free: 2, Notched: 3 };
            document.getElementById("gill_attachment").value = dicti[text];
        }
    }
}

var lists = document.querySelectorAll("li .attribute7-unclick");
for (list in lists) {
    lists[list].onclick = function () {
        var clicked = document.querySelectorAll(".attribute7-click")[0];
        if (this.className == "attribute7-unclick") {
            if (clicked) clicked.className = "attribute7-unclick";
            this.className = "attribute7-click";

            var text = this.innerHTML;
            var dicti = { Close: 0, Crowded: 1, Distant: 2 };
            document.getElementById("gill_spacing").value = dicti[text];
        }
    }
}

var lists = document.querySelectorAll("li .attribute8-unclick");
for (list in lists) {
    lists[list].onclick = function () {
        var clicked = document.querySelectorAll(".attribute8-click")[0];
        if (this.className == "attribute8-unclick") {
            if (clicked) clicked.className = "attribute8-unclick";
            this.className = "attribute8-click";

            var text = this.innerHTML;
            var dicti = { Broad: 0, Narrow: 1 };
            document.getElementById("gill_size").value = dicti[text];
        }
    }
}

var lists = document.querySelectorAll("li .attribute9-unclick");
for (list in lists) {
    lists[list].onclick = function () {
        var clicked = document.querySelectorAll(".attribute9-click")[0];
        if (this.className == "attribute9-unclick") {
            if (clicked) clicked.className = "attribute9-unclick";
            this.className = "attribute9-click";

            var text = this.innerHTML;
            var dicti = { Black: 0, Brown: 1, Buff: 2, Chocolate: 3, Gray: 4, Green: 5, Orange: 6, Pink: 7, Purple: 8, Red: 9, White: 10, Yellow: 11 };
            document.getElementById("gill_color").value = dicti[text];
        }
    }
}

var lists = document.querySelectorAll("li .attribute10-unclick");
for (list in lists) {
    lists[list].onclick = function () {
        var clicked = document.querySelectorAll(".attribute10-click")[0];
        if (this.className == "attribute10-unclick") {
            if (clicked) clicked.className = "attribute10-unclick";
            this.className = "attribute10-click";

            var text = this.innerHTML;
            var dicti = { Enlarging: 0, Tapering: 1 };
            document.getElementById("stalk_shape").value = dicti[text];
        }
    }
}

var lists = document.querySelectorAll("li .attribute11-unclick");
for (list in lists) {
    lists[list].onclick = function () {
        var clicked = document.querySelectorAll(".attribute11-click")[0];
        if (this.className == "attribute11-unclick") {
            if (clicked) clicked.className = "attribute11-unclick";
            this.className = "attribute11-click";

            var text = this.innerHTML;
            var dicti = { Bulbous: 0, Club: 1, Cup: 2, Equal: 3, Rhizomorphs: 4, Rooted: 5 };
            document.getElementById("stalk_root").value = dicti[text];
        }
    }
}

var lists = document.querySelectorAll("li .attribute12-unclick");
for (list in lists) {
    lists[list].onclick = function () {
        var clicked = document.querySelectorAll(".attribute12-click")[0];
        if (this.className == "attribute12-unclick") {
            if (clicked) clicked.className = "attribute12-unclick";
            this.className = "attribute12-click";

            var text = this.innerHTML;
            var dicti = { Fibrous: 0, Scaly: 1, Silky: 2, Smooth: 3 };
            document.getElementById("stalk_surface_above_ring").value = dicti[text];
        }
    }
}

var lists = document.querySelectorAll("li .attribute13-unclick");
for (list in lists) {
    lists[list].onclick = function () {
        var clicked = document.querySelectorAll(".attribute13-click")[0];
        if (this.className == "attribute13-unclick") {
            if (clicked) clicked.className = "attribute13-unclick";
            this.className = "attribute13-click";

            var text = this.innerHTML;
            var dicti = { Fibrous: 0, Scaly: 1, Silky: 2, Smooth: 3 };
            document.getElementById("stalk_surface_below_ring").value = dicti[text];
        }
    }
}

var lists = document.querySelectorAll("li .attribute14-unclick");
for (list in lists) {
    lists[list].onclick = function () {
        var clicked = document.querySelectorAll(".attribute14-click")[0];
        if (this.className == "attribute14-unclick") {
            if (clicked) clicked.className = "attribute14-unclick";
            this.className = "attribute14-click";

            var text = this.innerHTML;
            var dicti = { Brown: 0, Buff: 1, Cinnamon: 2, Gray: 3, Orange: 4, Pink: 5, Red: 6, White: 7, Yellow: 8 };
            document.getElementById("stalk_color_above_ring").value = dicti[text];
        }
    }
}

var lists = document.querySelectorAll("li .attribute15-unclick");
for (list in lists) {
    lists[list].onclick = function () {
        var clicked = document.querySelectorAll(".attribute15-click")[0];
        if (this.className == "attribute15-unclick") {
            if (clicked) clicked.className = "attribute15-unclick";
            this.className = "attribute15-click";

            var text = this.innerHTML;
            var dicti = { Brown: 0, Buff: 1, Cinnamon: 2, Gray: 3, Orange: 4, Pink: 5, Red: 6, White: 7, Yellow: 8 };
            document.getElementById("stalk_color_belowove_ring").value = dicti[text];
        }
    }
}

var lists = document.querySelectorAll("li .attribute16-unclick");
for (list in lists) {
    lists[list].onclick = function () {
        var clicked = document.querySelectorAll(".attribute16-click")[0];
        if (this.className == "attribute16-unclick") {
            if (clicked) clicked.className = "attribute16-unclick";
            this.className = "attribute16-click";

            var text = this.innerHTML;
            var dicti = { Partial: 0, Universal: 1 };
            document.getElementById("veil_type").value = dicti[text];
        }
    }
}

var lists = document.querySelectorAll("li .attribute17-unclick");
for (list in lists) {
    lists[list].onclick = function () {
        var clicked = document.querySelectorAll(".attribute17-click")[0];
        if (this.className == "attribute17-unclick") {
            if (clicked) clicked.className = "attribute17-unclick";
            this.className = "attribute17-click";

            var text = this.innerHTML;
            var dicti = { Brown: 0, Orange: 1, White: 2, Yellow: 3 };
            document.getElementById("veil_color").value = dicti[text];
        }
    }
}

var lists = document.querySelectorAll("li .attribute18-unclick");
for (list in lists) {
    lists[list].onclick = function () {
        var clicked = document.querySelectorAll(".attribute18-click")[0];
        if (this.className == "attribute18-unclick") {
            if (clicked) clicked.className = "attribute18-unclick";
            this.className = "attribute18-click";

            var text = this.innerHTML;
            var dicti = { None: 0, One: 1, Two: 2 };
            document.getElementById("ring_number").value = dicti[text];
        }
    }
}

var lists = document.querySelectorAll("li .attribute19-unclick");
for (list in lists) {
    lists[list].onclick = function () {
        var clicked = document.querySelectorAll(".attribute19-click")[0];
        if (this.className == "attribute19-unclick") {
            if (clicked) clicked.className = "attribute19-unclick";
            this.className = "attribute19-click";

            var text = this.innerHTML;
            var dicti = { Cobwebby: 0, Evanescent: 1, Flaring: 2, Large: 3, One: 4, Pendant: 5, Sheathing: 6, Zone: 7 };
            document.getElementById("ring_type").value = dicti[text];
        }
    }
}

var lists = document.querySelectorAll("li .attribute20-unclick");
for (list in lists) {
    lists[list].onclick = function () {
        var clicked = document.querySelectorAll(".attribute20-click")[0];
        if (this.className == "attribute20-unclick") {
            if (clicked) clicked.className = "attribute20-unclick";
            this.className = "attribute20-click";

            var text = this.innerHTML;
            var dicti = { Black: 0, Brown: 1, Buff: 2, Chocolate: 3, Green: 4, Orange: 5, Purple: 6, White: 7, Yellow: 8 };
            document.getElementById("spore_print_color").value = dicti[text];
        }
    }
}

var lists = document.querySelectorAll("li .attribute21-unclick");
for (list in lists) {
    lists[list].onclick = function () {
        var clicked = document.querySelectorAll(".attribute21-click")[0];
        if (this.className == "attribute21-unclick") {
            if (clicked) clicked.className = "attribute21-unclick";
            this.className = "attribute21-click";

            var text = this.innerHTML;
            var dicti = { Abundant: 0, Clustered: 1, Numerous: 2, Scattered: 3, Several: 4, Solitary: 5 };
            document.getElementById("population").value = dicti[text];
        }
    }
}

var lists = document.querySelectorAll("li .attribute22-unclick");
for (list in lists) {
    lists[list].onclick = function () {
        var clicked = document.querySelectorAll(".attribute22-click")[0];
        if (this.className == "attribute22-unclick") {
            if (clicked) clicked.className = "attribute22-unclick";
            this.className = "attribute22-click";

            var text = this.innerHTML;
            var dicti = { Grasses: 0, Leaves: 1, Meadows: 2, Paths: 3, Urban: 4, Waste: 5, Woods: 6 };
            document.getElementById("habitat").value = dicti[text];
        }
    }
}


function submit() {
    document.getElementById("cap_shape").value
    document.getElementById("cap_surface").value
    document.getElementById("cap_color").value
    document.getElementById("bruises").value
    document.getElementById("odor").value
    document.getElementById("gill_attachment").value
    document.getElementById("gill_spacing").value
    document.getElementById("gill_size").value
    document.getElementById("gill_color").value
    document.getElementById("stalk_shape").value
    document.getElementById("stalk_root").value
    document.getElementById("stalk_surface_above_ring").value
    document.getElementById("stalk_surface_below_ring").value
    document.getElementById("stalk_color_above_ring").value
    document.getElementById("stalk_color_below_ring").value
    document.getElementById("veil_type").value
    document.getElementById("veil_color").value
    document.getElementById("ring_number").value
    document.getElementById("ring_type").value
    document.getElementById("spore_print_color").value
    document.getElementById("population").value
    document.getElementById("habitat").value

}