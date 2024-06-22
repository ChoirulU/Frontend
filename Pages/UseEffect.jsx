import { useState, useEffect } from "react";
import Animasi from "./Timer";
import FetchApi from "./Fetch";

function UseEffect() {
    const [harga, setHarga] = useState(0)
    const [qty, setQty] = useState(0)
    const [subTotal, setSubTotal] = useState(0)

    useEffect(() => {
        setSubTotal(subTotal => harga * qty)
    }, [qty, harga]);

    return ( 
        <>
            <div className="container" style={{ marginLeft: '2rem'}}>
                <div className="mt-8">
                    <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                        harga:
                    </label>
                    <input type="text" id="name" className="shadow appearance-none border rounded w-1/2 py-2 px-3
                                text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Masukkan nominal anda"
                        value={harga}
                        onChange={(e) => {setHarga(e.target.value) }}
                    />
                </div>
                <div className="mt-4">
                    <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                        Qty:
                    </label>
                    <input type="text" id="name" className="shadow appearance-none border rounded w-1/2 py-2 px-3
                                text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Masukkan nominal anda"
                        value={qty}
                        onChange={(e) => {setQty(e.target.value) }}
                    />
                </div>
                <p className="text-gray-600 text-sm italic mt-2">Sub Total: {subTotal}</p>
            <hr />
                <div className="font-bold font-medium text-3xl">
                    <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                        Use Effect Timer:
                    </label>
                </div>
            <Animasi />
            <hr />
                <div className="font-bold font-medium text-3xl">
                    <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                        Use Effect API Cell:
                    </label>
                </div>
            <FetchApi />
            </div>
        </>
     );
}

export default UseEffect;