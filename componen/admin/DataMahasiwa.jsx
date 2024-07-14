import axios from "axios";
import GetMahasiswa from "../admin/GetMahasiswa";

const DataMahasiswa = ({ data }) => {
    return ( 
        <>
            <GetMahasiswa mahasiswa={data} />
        </>
     );
}

export const getServerSideProps = async ({query}) => {
    const nim = query.nim
    //panggil API atau ambil data dari sumber eksternal

    let url = `http://localhost:4000/mahasiswa`

    if(nim) {
        url = `http://localhost:4000/mahasiswa/${nim}`
    }
    const res = await axios.get(url)
    const data = res.data

    return {
        props: {
            data,
        },
    };
}
 
export default DataMahasiswa;