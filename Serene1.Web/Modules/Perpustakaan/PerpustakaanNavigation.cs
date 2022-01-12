using Serenity.Navigation;
using MyPages = Serene1.Perpustakaan.Pages;

[assembly: NavigationMenu(int.MaxValue, "Perpustakaan", icon: "fa-book")]
[assembly: NavigationLink(int.MaxValue, "Perpustakaan/Buku", typeof(MyPages.BukuController), icon: "fa-book")]
[assembly: NavigationLink(int.MaxValue, "Perpustakaan/Anggota", typeof(MyPages.AnggotaController), icon: "fa-users")]
[assembly: NavigationLink(int.MaxValue, "Perpustakaan/Peminjaman", typeof(MyPages.PeminjamanController), icon: "fa-cart-arrow-down")]
[assembly: NavigationLink(int.MaxValue, "Perpustakaan/Pengembalian", typeof(MyPages.PengembalianController), icon: "fa-external-link-square")]
[assembly: NavigationLink(int.MaxValue, "Perpustakaan/Petugas", typeof(MyPages.PetugasController), icon: " fa-sitemap")]
[assembly: NavigationLink(int.MaxValue, "Perpustakaan/Rak", typeof(MyPages.RakController), icon: "fa-columns")]