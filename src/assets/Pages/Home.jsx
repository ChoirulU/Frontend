import Layout from "../componen/Layout";
import Utama from "../componen/Utama";
import Button from "../componen/Button";
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/IndukMahasiswa");
    }

    return (
        <>
            <Layout>
                <Button text="Kanban" onClick={handleClick} color="blue" />
                <Utama />
            </Layout>
        </>
    );
}

export default Home;