import React from "react";
import Baiklah from './Baiklah.png';
import Efektif from './Efektif.png';
import Jawaban from './Jawaban.png';
import Masalah from './Masalah.png';
import Memaparkan from './Memaparkan.png';
import Misal from './Misal.png';
import Paparkan from './Paparkan.png';
import Perubahan from './Perubahan.png';
import Semangat from './Semangat.png';
import Solusi from './Solusi.png';
import Sudah from './Sudah.png';

import "./bot.css";

export default function Bot() {
    return (
        <body>
    <h1>Curhat Session</h1>
    <div class="home-psikolog">
        <i class="fas fa-chevron-left"></i></div>
        <center>
            <div class="semangat">
            <img src={Semangat}/></div>
        <div class="chat">
        <img src={Masalah}/></div>
    </center>
    <button type="button" class="button-belajar">
        <p class="belajar">Belajar</p>
       </button>
    <button type="button" class="button-keluarga">
        <p class="keluarga">keluarga</p>
       </button>
    <button type="button" class="button-teman">
        <p class="Teman">Teman</p>
       </button>
    <button type="button" class="button-kebiasaan">
        <p class="kebiasaan">kebiasaan</p>
       </button>
       <hr></hr>
    <div class="respon">
    <img src={Misal}/></div>
     <hr style="top:375px"></hr>
     <div class="wandi">
     <img src={Efektif}/></div>
    <button type="button" class="button-sudah">
      <p class="sudah">sudah</p>
     </button>
    <button type="button" class="button-belum">
      <p class="belum">belum</p>
     </button>
     <div class="batas">
     <hr style="top: 466px;"></hr></div>
    <div class="user">
    <img src={Jawaban}/></div>
     <div class="batas">
      <hr style="top: 520px;"></hr></div>
    <div class="bot">
    <img src={Paparkan}/></div>
    <div class="batas">
        <hr style="top: 590px;"></hr></div>
    <div class="memaparkan">
    <img src={Memaparkan}/></div>
        <div class="batas">
          <hr style="top: 643px;"></hr></div>
    <div class="bott">
    <img src={Solusi}/></div>
    <button type="button" class="button-cukup">
          <p class="cukup">cukup</p>
         </button>
    <button type="button" class="button-curhat">
          <p class="curhat">curhat lagi</p>
         </button>
         <div class="batas">
          <hr style="top: 810px;"></hr></div>
    <div class="pilihan">
    <img src={Sudah}/></div>
        <div class="batas">
          <hr style="top: 870px;"></hr></div>
      <div class="ending">
      <img src={Baiklah}/>;</div>
    <button type="button" class="button-mulai">
          <p class="mulai kembali sesi curhatmu">mulai kembali sesi curhatmu</p>
         </button>
         <div class="batas">
          <hr style="top: 1050px;"></hr></div>
         <div class="perubahan">
         <img src={Perubahan}/>;
         </div>
     <button type="button" class="button-next">
          <p class="next">next</p>
         </button>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-U1DAWAznBHeqEIlVSCgzq+c9gqGAJn5c/t99JyeKa9xxaYpSvHU5awsuZVVFIhvj" crossorigin="anonymous"></script>
  
  </body>
    );
}