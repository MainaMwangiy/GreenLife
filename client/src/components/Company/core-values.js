import React from 'react';
import '../../App.css';
import './about.css'
// import img from '../assets/logo.svg'

export default function CoreValues() {
    return <>
        <div className="cnt-st">
            <div class="blog-post">
                <div class="blog-post-info">
                    <div class="blog-post-date">
                    </div>

                    <h2 style={{ color: "orange" }}>
                        Core Values
                    </h2 >
                    <ul id="ulstyl">
                        <li> 	Professionalism and work ethics in every service we offer</li>
                        <li>	Credibility, honesty and Integrity in our relationship and services we undertake.</li>
                        <li>	Confidentiality. We take our clients trust in us with utmost seriousness.</li>
                        <li>  Innovativeness and creativity in our services.</li>
                        <li>	Transparency and openness to our clients in our undertakings</li>

                    </ul>
                </div>

            </div>
        </div>
    </>;
}
