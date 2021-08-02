import React from 'react';
import "./project.css"
import img from '../assets/school.jpg'

export default function FoodSecurityAndNutrition() {
    return <>
        <div className='container'>
            <div className='gb-coll'>
                <div class="st1-style">
                    <div class="st1-style-img">
                        <img src="https://i.postimg.cc/c1DvzgVD/home-page.jpg" class="card-img-top" alt="..."></img>
                    </div>
                    <div class="st1-style-info">
                        <div class="st1-style-date">
                            <span>Agroecology (seed sovereignty) </span>
                        </div>
                        <h1 class="st1-style-title">
                        </h1>
                        <p>
                            Seeds are the first link in the food chain and the repository of life’s future evolution. As such it is our inherent duty and responsibility to protect them and to pass them on to future generations. It is evident from the current trends that the indigenous fruit trees are becoming extinct with the adoption of genetically modified seeds.
                            This poses a threat to fruit biodiversity and food security if action is not taken.
                            The fruit tree sovereignty for school’s project is based on seed sovereignty for the community. The aim is to have a conserved biodiversity of fruit trees that thrive well in the region for future food security and nutrition. The genetically modified seed science presents itself in an enormous scope to our farmers being a threat to the indigenous fruit trees. It is thus wise for a collective action to have a common seed bank for our fruits.
                            The idea is to have sizeable fruit tree nursery in public schools initiated by the environment club students and have at least two indigenous fruit trees planted in the school compound. The planted trees are to grow in their indigenous state as they shall serve as the seed bank for the future generation.
                        </p>
                        <div class="mb-3">
                            <input type="text" class="form-control" id="exampleInputName" style={{ borderRadius: "1rem" }} placeholder="Type a message here to know more about the service..." aria-describedby="nameHelp"></input>
                        </div>
                        <button type="submit" class="btn btn-primary" style={{ borderRadius: "1rem", width: "100%" }}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    </>;
}
