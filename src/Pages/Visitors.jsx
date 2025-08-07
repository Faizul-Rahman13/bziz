import React from "react"
import Bottom from "../Components/Bottom"

function Visitors(){

    return(

        <>

        <div class="page-container">

        {/* <!-- Header --> */}

        <div class="page-header">
            <button class="back-btn" >
                <i class="fas fa-arrow-left"></i>
            </button>
            <h1 class="page-title">Visitors</h1>
            <div style={{width: "40px"}}></div> 
        </div>

        {/* <!-- Visitor Stats --> */}

        <div class="page-body">
            <div class="visitor-stats">
                <div class="visitor-stat">
                    <div class="stat-value">24</div>
                    <div class="stat-label">Today</div>
                </div>

                <div class="visitor-stat">
                    <div class="stat-value">1,248</div>
                    <div class="stat-label">Total</div>
                </div>
            </div>

            {/* <!-- Visitors Table --> */}

            <div class="table-container">
                <table class="table">
                    <thead>
                        <tr>
                            <th>City</th>
                            <th>Views</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <img src="https://flagcdn.com/w20/in.png" class="city-flag"/>
                                Bengaluru
                            </td>
                            <td>428</td>
                        </tr>
                        <tr>
                            <td>
                                <img src="https://flagcdn.com/w20/in.png" class="city-flag"/>
                                Mumbai
                            </td>
                            <td>312</td>
                        </tr>
                        <tr>
                            <td>
                                <img src="https://flagcdn.com/w20/in.png" class="city-flag"/>
                                Delhi
                            </td>
                            <td>198</td>
                        </tr>
                        <tr>
                            <td>
                                <img src="https://flagcdn.com/w20/in.png" class="city-flag"/>
                                Chennai
                            </td>
                            <td>156</td>
                        </tr>
                        <tr>
                            <td>
                                <img src="https://flagcdn.com/w20/in.png" class="city-flag"/>
                                Hyderabad
                            </td>
                            <td>87</td>
                        </tr>
                        <tr>
                            <td>
                                <img src="https://flagcdn.com/w20/in.png" class="city-flag"/>
                                Pune
                            </td>
                            <td>67</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        {/* <!-- Bottom Navigation --> */}

      <Bottom/>
    </div>
        
        </>
    )
}

export default Visitors



