
// --- STEP 3: Membuat Interaksi Alert untuk Tombol Resume ---
// Pertama, kita ambil elemen tombol resume dari HTML
const resumeButton = document.getElementById('resume-btn');

// Lalu, kita tambahkan "pendengar" untuk event 'click' pada tombol tersebut
resumeButton.addEventListener('click', function() {
    // Saat tombol diklik, tampilkan sebuah alert sederhana
    alert("Coming Soon!");
});