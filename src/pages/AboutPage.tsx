import React from "react";
import { useHistory } from "react-router-dom";

export const AboutPage: React.FC = () => {
    const history = useHistory();
    return (
       <>
            <h1>О нас</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores iste laboriosam incidunt eius dicta in praesentium doloremque sint asperiores odio vero vitae facilis amet, deleniti suscipit iusto aut consectetur repudiandae.</p>
            <button className="btn" onClick={() => history.push('/')}>Назад к списку дел</button>
       </>
    ); 
}