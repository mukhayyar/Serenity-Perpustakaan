-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 12, 2022 at 05:02 AM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 7.4.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `perpustakaan`
--

-- --------------------------------------------------------

--
-- Table structure for table `buku`
--

CREATE TABLE `buku` (
  `kd_buku` varchar(5) NOT NULL,
  `kd_kategori` varchar(5) NOT NULL,
  `judul` varchar(40) NOT NULL,
  `kd_penulis` varchar(5) NOT NULL,
  `kd_penerbit` varchar(5) NOT NULL,
  `tahun_terbit` int(4) NOT NULL,
  `stok` int(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `buku`
--

INSERT INTO `buku` (`kd_buku`, `kd_kategori`, `judul`, `kd_penulis`, `kd_penerbit`, `tahun_terbit`, `stok`) VALUES
('12323', '98', 'lkljzxc', '989', '091', 2019, 12),
('juk', '98', 'julkljlkj', '989', '091', 2005, 6);

-- --------------------------------------------------------

--
-- Table structure for table `kategori`
--

CREATE TABLE `kategori` (
  `kd_kategori` varchar(5) NOT NULL,
  `kategori` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `kategori`
--

INSERT INTO `kategori` (`kd_kategori`, `kategori`) VALUES
('98', 'aksdjakd');

-- --------------------------------------------------------

--
-- Table structure for table `penerbit`
--

CREATE TABLE `penerbit` (
  `kd_penerbit` varchar(5) NOT NULL,
  `penerbit` varchar(20) NOT NULL,
  `alamat` varchar(35) NOT NULL,
  `no_telp` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `penerbit`
--

INSERT INTO `penerbit` (`kd_penerbit`, `penerbit`, `alamat`, `no_telp`) VALUES
('091', 'adads', 'asdkhkasdj', '1231');

-- --------------------------------------------------------

--
-- Table structure for table `penulis`
--

CREATE TABLE `penulis` (
  `kd_penulis` varchar(5) NOT NULL,
  `penulis` varchar(30) NOT NULL,
  `email` varchar(35) NOT NULL,
  `no_telp` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `penulis`
--

INSERT INTO `penulis` (`kd_penulis`, `penulis`, `email`, `no_telp`) VALUES
('989', 'asdasd', 'asdladj', '21321');

-- --------------------------------------------------------

--
-- Table structure for table `pinjam`
--

CREATE TABLE `pinjam` (
  `kd_pinjam` varchar(5) NOT NULL,
  `NIS` varchar(8) NOT NULL,
  `kd_buku` varchar(5) NOT NULL,
  `tgl_pinjam` date NOT NULL,
  `batas_pinjam` date NOT NULL,
  `tgl_kembali` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `pinjam`
--

INSERT INTO `pinjam` (`kd_pinjam`, `NIS`, `kd_buku`, `tgl_pinjam`, `batas_pinjam`, `tgl_kembali`) VALUES
('1', '08809', '12323', '2021-09-06', '2021-09-08', '2021-09-07'),
('123', '891231', 'juk', '2021-09-01', '2021-09-04', '2021-09-02'),
('2', '08809', 'juk', '2021-09-05', '2021-09-08', '2021-09-07'),
('3', '891231', '12323', '2021-09-02', '2021-09-07', '2021-09-04');

-- --------------------------------------------------------

--
-- Table structure for table `siswa`
--

CREATE TABLE `siswa` (
  `NIS` varchar(8) NOT NULL,
  `nama` varchar(30) NOT NULL,
  `alamat` varchar(35) NOT NULL,
  `no_telp` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `siswa`
--

INSERT INTO `siswa` (`NIS`, `nama`, `alamat`, `no_telp`) VALUES
('08809', 'Tsaqif', 'Ponti', '0123132'),
('891231', 'Adib', 'Lamongan', '0912312');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `buku`
--
ALTER TABLE `buku`
  ADD PRIMARY KEY (`kd_buku`),
  ADD KEY `kd_kategori` (`kd_kategori`),
  ADD KEY `kd_penulis` (`kd_penulis`),
  ADD KEY `kd_penerbit` (`kd_penerbit`);

--
-- Indexes for table `kategori`
--
ALTER TABLE `kategori`
  ADD PRIMARY KEY (`kd_kategori`);

--
-- Indexes for table `penerbit`
--
ALTER TABLE `penerbit`
  ADD PRIMARY KEY (`kd_penerbit`);

--
-- Indexes for table `penulis`
--
ALTER TABLE `penulis`
  ADD PRIMARY KEY (`kd_penulis`);

--
-- Indexes for table `pinjam`
--
ALTER TABLE `pinjam`
  ADD PRIMARY KEY (`kd_pinjam`),
  ADD KEY `kd_buku` (`kd_buku`),
  ADD KEY `NIS` (`NIS`);

--
-- Indexes for table `siswa`
--
ALTER TABLE `siswa`
  ADD PRIMARY KEY (`NIS`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `buku`
--
ALTER TABLE `buku`
  ADD CONSTRAINT `buku_ibfk_1` FOREIGN KEY (`kd_kategori`) REFERENCES `kategori` (`kd_kategori`) ON DELETE CASCADE,
  ADD CONSTRAINT `buku_ibfk_2` FOREIGN KEY (`kd_penerbit`) REFERENCES `penerbit` (`kd_penerbit`) ON DELETE CASCADE,
  ADD CONSTRAINT `buku_ibfk_3` FOREIGN KEY (`kd_penulis`) REFERENCES `penulis` (`kd_penulis`) ON DELETE CASCADE;

--
-- Constraints for table `pinjam`
--
ALTER TABLE `pinjam`
  ADD CONSTRAINT `pinjam_ibfk_1` FOREIGN KEY (`NIS`) REFERENCES `siswa` (`NIS`) ON DELETE CASCADE,
  ADD CONSTRAINT `pinjam_ibfk_2` FOREIGN KEY (`kd_buku`) REFERENCES `buku` (`kd_buku`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
