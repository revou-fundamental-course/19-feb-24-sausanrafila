function smoothScroll(targetId) {
    const targetPosition = document.querySelector(targetId).offsetTop;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 1000; // durasi animasi scroll (ms)
    let startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
}

function handleSubmit(event) {
    event.preventDefault();

    const nama = document.getElementById('nama').value;
    const tanggal_lahir = document.getElementById('tanggal_lahir').value;
    const jenis_kelamin = document.querySelector('input[name="jenis_kelamin"]:checked').value;
    const pesan = document.getElementById('pesan').value;

    const hasilPesan = `Nama: ${nama}\nTanggal Lahir: ${tanggal_lahir}\nJenis Kelamin: ${jenis_kelamin}\nPesan: ${pesan}`;

    document.getElementById('hasil').value = hasilPesan;
}

