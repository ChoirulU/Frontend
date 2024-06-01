import React, { useState } from "react";

const EventHandling = () => {
    const [name, setName] = useState('');
    const [selectedOption, setSelectOption] = useState('');
    const [gender, setGender] = useState('');
    const [chkAkademik, setChkAkademik] = useState(false);
    const [chkNonAkademik, setChkNonAkademik] = useState(false);

    function handleNameChange(event) {
        setName(event.target.value);
    }

    function handleOptionChange(event) {
        setSelectOption(event.target.value);
    }

    function handleGenderChange(event) {
        setGender(event.target.value);
    }

    return (
        <div className="container mt-4 ml-4">
            <h3 className="text-2x1 font-bold">Form Pendaftaran</h3>
            <hr className="my-2" />
            
            <div className="flex flex-row mt-4">
                <div className="w-1/2">
                    <div className="mt-4">
                        <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                            Nama:
                        </label>
                        <input
                            type="text" id="name" className="shadow appearance-none border rounded w-1/2 py-2 px-3
                                text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Masukkan nama Anda"
                            value={name}
                            onChange={handleNameChange}
                        />
                    </div>

                    <div className="mt-5">
                        <label htmlFor="program-studi" className="block text-gray-700 font-bold mb-2">
                            Program Studi:
                        </label>
                        <select
                            id="program-studi"
                            className="shadow appearance-none border rounded w-1/2 py-2 px-3
                                text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            value={selectedOption}
                            onChange={handleOptionChange}
                        >
                            <option value="S1 Teknik Informatika">S1 Teknik Informatika</option>
                            <option value="S1 Sistem Informasi">S1 Sistem Informasi</option>
                            <option value="D3 Manajemen Informatika">D3 Manajemen Informatika</option>
                        </select>
                    </div>

                    <div className="mt-6">
                        <span className="block text-gray-700 font-bold mb-2">Gender:</span>
                        <div className="flex flex-row items-center">
                            <label className="inline-flex items-center mr-6">
                                <input
                                    type="radio"
                                    className="form-radio text-indigo-600"
                                    name="gender"
                                    value="Pria"
                                    checked={gender === 'Pria'}
                                    onChange={handleGenderChange}
                                />
                                <span className="ml-2">Pria</span>
                            </label>
                            <label className="inline-flex items-center mr-6">
                                <input
                                    type="radio"
                                    className="form-radio text-indigo-600"
                                    name="gender"
                                    value="Wanita"
                                    checked={gender === 'Wanita'}
                                    onChange={handleGenderChange}
                                />
                                <span className="ml-2">Wanita</span>
                            </label>
                        </div>
                    </div>

                    <div className="mt-7">
                        <h3 className="text-2x1 font-semi-bold">Form Pendaftaran</h3>
                        <hr className="my-2" />
                        <div className="mb-4">
                            <label htmlFor="" className="block text-sm font-medium">Prestasi</label><br />
                            <div className="flex items-center">
                                <input type="checkbox" name="chkAkademik" id="chkAkademik"
                                    className="form-checkbox"
                                    checked={chkAkademik}
                                    onChange={(e) => setChkAkademik(e.target.checked)} />
                                <label htmlFor="chkAkademik" className="ml-2">Presentasi Akademik</label>
                            </div>
                            <div className="flex items-center mt-2">
                                <input type="checkbox" name="chkNonAkademik" id="chkNonAkademik"
                                    className="form-checkbox"
                                    checked={chkNonAkademik}
                                    onChange={(e) => setChkNonAkademik(e.target.checked)} />
                                <label htmlFor="chkNonAkademik" className="ml-2">Presentasi Non Akademik</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-1/2 md:w-7/12 pl-4">
                    <h3 className="text-2x1 font-bold">Resume</h3>
                    <hr className="my-2" />
                    <h5 className="mb-2">Nama: {name}</h5>
                    <h5 className="mb-2">Prodi: {selectedOption}</h5>
                    <h5 className="mb-2">Gender: {gender}</h5>
                    <h5 className="mb-2">Prestasi Akademik: {chkAkademik ? "Ada" : " -"}</h5>
                    <h5 className="mb-2">Prestasi Non Akademik: {chkNonAkademik ? "Ada" : " -"}</h5>
                    <hr />
                </div>
            </div>
        </div>
    );
}

export default EventHandling;
