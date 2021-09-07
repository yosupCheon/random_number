const rand_num = Math.floor(Math.random() * 10);
window.onload = function() {
    var rand = document.getElementById('test');
    rand.addEventListener('click', function (){
            document.write(rand_num);
        }
    )
}