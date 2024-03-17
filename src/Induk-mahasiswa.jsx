import {Mahasiswa, Button} from "./assets/componen/Mahasiswa";

// const IndukMahasiswa = () => {
//     return ( 
//         <div>
//             <Mahasiswa absen="Mahasiswa 1" />
//             <Mahasiswa absen="Mahasiswa 2" />
//             <Mahasiswa absen="Mahasiswa 3" />
//         </div>
//      );
// }
 
// export default IndukMahasiswa;


//String+number
// const IndukMahasiswa = () => {
//     const nama = "umam";
//     const nim = 1945;
//     const matkul = "Desain Grafis"
//     return ( 
//         <div>
//             <Mahasiswa nama = {nama}
//             nim = {nim}
//             matkul = {matkul} />
//         </div>
//      );
// }
 
// export default IndukMahasiswa;


//Boolean
// const IndukMahasiswa = () => {
//     const nama = "umam";
//     const nim = 1945;
//     const matkul = "Desain Grafis"
//     return ( 
//         <div>
//             <Mahasiswa nama = {nama}
//             nim = {nim}
//             matkul = {matkul} 
//             absen = {true}
//             />
//             <hr />
//             <Mahasiswa nama="Asep"
//             nim = "1945"
//             matkul = "Software Modeling"
//             absen = {true}
//             />
//             <hr />
//         </div>
//      );
// }
 
// export default IndukMahasiswa;


//Array
// const IndukMahasiswa = () => {
//     const lulus = {
//         "nama" : "umam",
//         "nim"  : "1945",
//         "semester" : "4",
//         "matkul" : "Desain Grafis",
//         "absen" : true
//     };
//     const lulus1 = {
//         "nama" : "asep",
//         "nim"  : "2024",
//         "semester" : "6",
//         "matkul" : "Software Modeling",
//         "absen" : true
//     };
//     const nim = ["1945", "2024"]
//     const semeseter = ["4", "6"]

//     return ( 
//         <div>
//             <Mahasiswa nim={nim} semeseter={semeseter} lulus={lulus}/>
//             <Mahasiswa nim={nim} semeseter={semeseter} lulus={lulus1}/>
//         </div>
//      );
// }
 
// export default IndukMahasiswa;


//object
// function IndukMahasiswa() {
//     const mahasiswaData = {jurusan:"Teknik Informatika", kelas:"SP 4.1"};
//     return ( 
//         <Mahasiswa data={mahasiswaData} />
//      );
// }

// export default IndukMahasiswa;


//function button
// function App() {
//     function heandleClick(){
//         alert('Tombol diklik');
//     }
//     return <Button onClick={heandleClick} />;
// }

// export default App;


//function edit
function IndukMahasiswa() {
    const mahasiswaData = {jurusan: 'Algoritma', kelas: 'SM 4.2'};

    function heandleClick() {
        alert('Tombol diklik!');
    }

    return ( 
        <div>
            <Mahasiswa data = {mahasiswaData} />
            <button onClick = {heandleClick}>Klik Tautan Ini</button>
        </div>
     );
}

export default IndukMahasiswa;
