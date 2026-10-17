import { useState } from "react"
import {useNavigate} from "react-router-dom";

export default function CreateMobile() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [color, setColor] = useState("");

    const api = import.meta.env.VITE_API_URL;

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${api}/mobiles`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    title,
                    description,
                    price: Number(price),
                    colour: color
                })
            });
            const data = await response.json();
            if(!response.ok) {
                throw new Error(data.message || "Request failed");
            }
            alert(`mobile created with title ${data.title}`);
            navigate("/");
        } catch(error) {
            alert(`error occurred: ${error.message}`);
        }
    }

    return (
        <div className="createmobile">
            <form action="" onSubmit={handleSubmit}>
                <input type="text" placeholder="enter title " value={title} onChange={e => setTitle(e.target.value)}/>
                <br />
                <br />
                <input type="text" placeholder="enter description" value={description} onChange={e => setDescription(e.target.value)}/>
                <br />
                <br />
                <input type="number" placeholder="enter price" value={price} onChange={e => setPrice(e.target.value)}/>
                <br />
                <br />
                <input type="text" placeholder="enter colour" value={color} onChange={e => setColor(e.target.value)}/>
                <br /><br />
                <button type="submit">submit</button>
            </form>
        </div>
    )
}