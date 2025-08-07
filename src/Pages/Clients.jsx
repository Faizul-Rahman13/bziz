import React from "react";
import { Link } from "react-router-dom";
import Bottom from "../Components/Bottom";



function Clients() {
  return (
    <div class="page-container">
        {/* <!-- Header --> */}
        <div class="page-header">
            <button class="back-btn" >
                <i class="fas fa-arrow-left"></i>
            </button>
            <h1 class="page-title">Clients</h1>
            <div style={{width: "40px"}}></div> 
        </div>

        {/* <!-- Clients List --> */}
        <div class="page-body">
            <div class="search-bar">
                <i class="fas fa-search"></i>
                <input type="text" placeholder="Search clients..."/>
            </div>

            <div class="client-card">
                <img src="https://randomuser.me/api/portraits/men/32.jpg" class="client-avatar"/>
                <div class="client-info">
                    <div class="client-name">Ramesh Kumar</div>
                    <div class="client-company">Kumar Industries</div>
                    <div class="client-contact">
                        <i class="fas fa-phone"></i> +91 98765 43210
                    </div>
                </div>
                <div class="client-status status-active">Active</div>
            </div>

            <div class="client-card">
                <img src="https://randomuser.me/api/portraits/women/44.jpg" class="client-avatar"/>
                <div class="client-info">
                    <div class="client-name">Priya Sharma</div>
                    <div class="client-company">Sharma Automation</div>
                    <div class="client-contact">
                        <i class="fas fa-phone"></i> +91 87654 32109
                    </div>
                </div>
                <div class="client-status status-active">Active</div>
            </div>

            <div class="client-card">
                <img src="https://randomuser.me/api/portraits/men/22.jpg" class="client-avatar"/>
                <div class="client-info">
                    <div class="client-name">Vikram Patel</div>
                    <div class="client-company">Patel Engineering</div>
                    <div class="client-contact">
                        <i class="fas fa-phone"></i> +91 76543 21098
                    </div>
                </div>
                <div class="client-status status-inactive">Inactive</div>
            </div>

            <div class="client-card">
                <img src="https://randomuser.me/api/portraits/women/28.jpg" class="client-avatar"/>
                <div class="client-info">
                    <div class="client-name">Anjali Mehta</div>
                    <div class="client-company">Mehta Industries</div>
                    <div class="client-contact">
                        <i class="fas fa-phone"></i> +91 65432 10987
                    </div>
                </div>
                <div class="client-status status-active">Active</div>
            </div>

            <div class="client-card">
                <img src="https://randomuser.me/api/portraits/men/45.jpg" class="client-avatar"/>
                <div class="client-info">
                    <div class="client-name">Sanjay Gupta</div>
                    <div class="client-company">Gupta Solutions</div>
                    <div class="client-contact">
                        <i class="fas fa-phone"></i> +91 94321 09876
                    </div>
                </div>
                <div class="client-status status-inactive">Inactive</div>
            </div>

            <div class="client-card">
                <img src="https://randomuser.me/api/portraits/women/32.jpg" class="client-avatar"/>
                <div class="client-info">
                    <div class="client-name">Neha Reddy</div>
                    <div class="client-company">Reddy Tech</div>
                    <div class="client-contact">
                        <i class="fas fa-phone"></i> +91 83210 98765
                    </div>
                </div>
                <div class="client-status status-active">Active</div>
            </div>
        </div>

        {/* <!-- Bottom Navigation --> */}

       <Bottom/>
       
    </div>
  );
}

export default Clients;
