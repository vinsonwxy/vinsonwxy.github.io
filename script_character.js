
function choose_ship01() {
    // document.getElementById('ship01').innerHTML = '<img src="assets_customized/ship01select.png">';
    document.getElementById(('ring1')).style.display = "inline";
    unchoose_ship02();
    unchoose_ship03();
    unchoose_ship04();
}

function choose_ship02() {
    // document.getElementById('ship02').innerHTML = '<img src="assets_customized/ship02select.png">';
    document.getElementById(('ring2')).style.display = "inline";
    unchoose_ship01();
    unchoose_ship03();
    unchoose_ship04();
}

function choose_ship03() {
    // document.getElementById('ship03').innerHTML = '<img src="assets_customized/ship03select.png">';
    document.getElementById(('ring3')).style.display = "inline";
    unchoose_ship01();
    unchoose_ship02();
    unchoose_ship04();
}

function choose_ship04() {
    // document.getElementById('ship04').innerHTML = '<img src="assets_customized/ship04select.png">';
    document.getElementById(('ring4')).style.display = "inline";
    unchoose_ship01();
    unchoose_ship02();
    unchoose_ship03();
}

function unchoose_ship01() {
    // document.getElementById('ship01').innerHTML = '<img src="assets_customized/ship01.png">';
    document.getElementById(('ring1')).style.display = "none";
}

function unchoose_ship02() {
    // document.getElementById('ship02').innerHTML = '<img src="assets_customized/ship02.png">';
    document.getElementById(('ring2')).style.display = "none";
}

function unchoose_ship03() {
    // document.getElementById('ship03').innerHTML = '<img src="assets_customized/ship03.png">';
    document.getElementById(('ring3')).style.display = "none";
}

function unchoose_ship04() {
    // document.getElementById('ship04').innerHTML = '<img src="assets_customized/ship04.png">';
    document.getElementById(('ring4')).style.display = "none";
}