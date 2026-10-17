import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const [mobiles, setMobiles] = useState([]);

    const navigate = useNavigate();

    const api = import.meta.env.VITE_API_URL;
    useEffect(() => {
        const getMobiles = async () => {
            const response = await fetch(`${api}/mobiles`);
            const data = await response.json();
            if (response.ok) {
                setMobiles(data);
                return;
            }
            alert(`error in getting all mobiles ${data.message}`);
        };
        getMobiles();
    }, [api]);
    const handleClick = () => {
        navigate("/create-mobile");
    }
    return (
        <div className="home">
            <button onClick={handleClick}>create mobile</button>
            {mobiles.map((mobile) => (
                <div className="mobile" key={mobile._id}>
                    <div className="title">{mobile.title}</div>
                    <div className="description">{mobile.description}</div>
                    <div className="price">{mobile.price}</div>
                    <div className="colour">{mobile.colour}</div>
                    <hr />
                </div>
            ))}
        </div>
    );
}
