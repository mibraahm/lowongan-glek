document.querySelector(".partner").addEventListener("click", function () {
  Swal.fire({
    title: "PARTNERSHIP",
    html: "<br><b>SYARAT & KETENTUAN :</b> <br> • Islam. <br> • Taat Beribadah. <br> • Bisa Mengaji. <br> • Umur Min 25 Tahun. <br> • Pria / Wanita. <br> • Pendidikan Min D3 Semua Jurusan. <br> • Memiliki Negosiasi Yang Kuat <br> • Pemikir Kreatif Dan Pemain Tim <br> • Memiliki Komunikasi Yang Baik. <br> • Domisili Jabodetabek. <br> • Mudah Beraptasi. <br> • Tidak Merokok & Bertato. <br><br> <b>BENEFIT :</b><br> • Uang Makan. <br> • Uang Transportasi. <br> • Tunjangan Jabatan. <br> • Tunjangan Komunikasi.<br> • BPJS Kesehatan. <br><br> <b>TANGGUNG JAWAB :</b><br> • Bekerja Dengan Mitra Eksternal Untuk Mengeksplorasi Kemungkinan Dan Integrasi Baru Dan Membuat Kemitraan Yang Saling Menguntungkan.<br> • Secara Efektif Melaksanakan Semua Inisiatif Kemitraan Dengan Mitra Dan Membangun Hubungan Strategis Jangka Panjang.<br> • Bekerja Dengan Tim Lintas Fungsi Untuk Implementasi Kemitraan Dan Integrasi Untuk Mencapai Hasil Kemitraan Yang Diinginkan.<br> • Mengukur Dampak Kemitraan Pada Bisnis.<br> • Menyelaraskan Rencana Kemitraan Dengan Tim Fungsional Terkait.<br> • Meninjau Dan Mengevaluasi Pembelajaran Dan Hasil Kemitraan",
    showCancelButton: true,
    confirmButtonText: "<a target='_blank' href='https://forms.gle/3z8mZoZWcf8i2WGf8' style='color:white; text-decoration:none'>TERTARIK</a>",
    cancelButtonText: "Kembali",
    confirmButtonColor: "#00ff55",
    cancelButtonColor: "#999",
    reverseButtons: true,
  });
});

document.querySelector(".driver").addEventListener("click", function () {
  Swal.fire({
    title: "DRIVER",
    html: "<br><b>SYARAT & KETENTUAN :</b><br> • Islam. <br> • Taat Beribadah. <br> • Bisa Mengaji. <br> • Pria <br>. • Umur Maks 35 Tahun. <br> • Lancar Mengemudi. <br> • Memiliki SIM A. <br> • Menguasai Wilayah Jabodetabek. <br> • Aktif Menata Barang Gudang. <br> • Jujur. <br> • Tidak Merokok & Bertato. <br><br> <b>BENEFIT :</b><br> • Uang Makan. <br> • Uang Transportasi. <br> • Gaji Pokok. <br><br> <b>TANGGUNG JAWAB :</b><br> • Mengantarkan Barang Sesuai Rute Yang Telah Ditentukan.<br> • Menjaga Kebersihan Dan Mampu Melakukan Perawatan Kendaraan Operasional Secara Berkala.<br> • Memeriksa Dan Memastikan Barang Sampai Ditujuan Sesuai Dengan Surat Jalan.",
    showCancelButton: true,
    confirmButtonText: "<a target='_blank' href='https://forms.gle/bWMss5PFGMbeovnn6' style='color:white; text-decoration:none'>TERTARIK</a>",
    cancelButtonText: "Kembali",
    confirmButtonColor: "#00ff55",
    cancelButtonColor: "#999",
    reverseButtons: true,
  });
});

document.querySelector(".crew").addEventListener("click", function () {
  Swal.fire({
    title: "CREW OUTLET",
    html: "<br><b>SYARAT & KETENTUAN :</b><br> • Islam. <br> • Taat Beribadah. <br> • Bisa Mengaji. <br> • Pria / Wanita. <br> • Umur Min 21 Tahun. <br> • Pendidikan Min SMA / SMK. <br> • Domisili. <br> • Memiliki Komunikasi Yang Baik. <br> • Jujur. <br> • Tidak Merokok & Bertato. <br><br> <b>BENEFIT :</b><br> • Uang Makan. <br> • Uang Transportasi. <br> • Gaji Pokok. <br><br> <b>TANGGUNG JAWAB :</b> <br> • Melaksanakan Setiap Pekerjaan Sesuai SOP Yang Ada. <br> • Dapat Memberikan Kesan Baik Kepada Customer, Rekan Kerja, Dan Atasan.<br> • Bertanggung Jawab Menjaga Kebersihan Serta Kerapihan Toko.<br> • Memprioritaskan Kepuasan Customer. <br> • Membantu Memasarkan Produk",
    showCancelButton: true,
    confirmButtonText: "<a target='_blank' href='https://forms.gle/ePt6GtJNsVTekkp66' style='color:white; text-decoration:none'>TERTARIK</a>",
    cancelButtonText: "Kembali",
    confirmButtonColor: "#00ff55",
    cancelButtonColor: "#999",
    reverseButtons: true,
  });
});

window.addEventListener("load", function () {
  var scroll = document.querySelector(".gowa");
  scroll.classList.toggle("active", window.Screen);
});
