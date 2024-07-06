document.addEventListener('DOMContentLoaded', function () {
    var modal = document.getElementById("detailModal");
    var closeButton = document.querySelector(".custom-modal-close");

    function showModal(name, singer, lyrics, composer, arranger, button1Text, button2Text, button1Link, button2Link) {
        document.getElementById("fileName").innerText = name;
        document.getElementById("originalSinger").innerText = singer;
        document.getElementById("lyrics").innerText = lyrics;
        document.getElementById("composer").innerText = composer;
        document.getElementById("arranger").innerText = arranger;
        var button1 = document.getElementById("button1");
        var button2 = document.getElementById("button2");
        button1.innerText = button1Text;
        button1.href = button1Link;
        button1.target = "_blank"; // 外部鏈接
        button2.innerText = button2Text;
        button2.href = button2Link;
        button2.target = "_blank"; // 外部鏈接
        modal.style.display = "block";
    }

    document.querySelectorAll('.file-explorer-row').forEach(function(row) {
        row.addEventListener('click', function() {
            var name = this.querySelector('.file-explorer-item:nth-child(1)').innerText;
            var singer = this.getAttribute('data-singer');
            var lyrics = this.getAttribute('data-lyrics');
            var composer = this.getAttribute('data-composer');
            var arranger = this.getAttribute('data-arranger');
            var button1Text = this.getAttribute('data-button1');
            var button2Text = this.getAttribute('data-button2');
            var button1Link = this.getAttribute('data-button1-link');  // 新增這行
            var button2Link = this.getAttribute('data-button2-link');  // 新增這行
    
            showModal(name, singer, lyrics, composer, arranger, button1Text, button2Text, button1Link, button2Link);
        });
    });

    closeButton.onclick = function() {
        modal.style.display = "none";
    }

    window.addEventListener('click', function(event) {
        if (!modal.contains(event.target) && modal.style.display === "block" && !event.target.closest('.file-explorer-row')) {
            modal.style.display = "none";
        }
    });
});