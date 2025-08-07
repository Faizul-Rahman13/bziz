import React from "react";
import Bottom from "../Components/Bottom";

function Enquiries(){

    return(

        <>
        <div class="page-container">

        {/* <!-- Header --> */}

        <div class="page-header">
            <button class="back-btn">
                <i class="fas fa-arrow-left"></i>
            </button>
            <h1 class="page-title">Enquiries</h1>
            <div style={{width: "40px"}}></div> 
        </div>

        {/* <!-- Enquiries List --> */}

        <div class="page-body">
            <div class="enquiry-card">
                <div class="enquiry-header">
                    <div class="enquiry-name">Ramesh Kumar</div>
                    <div class="enquiry-time">Today, 10:45 AM</div>
                </div>
                <div class="enquiry-contact">
                    <div class="enquiry-phone">
                        <i class="fas fa-phone"></i> +91 98765 43210
                    </div>
                    <div class="enquiry-email">
                        <i class="fas fa-envelope"></i> ramesh@example.com
                    </div>
                </div>
                <div class="enquiry-message">
                    Interested in your PLC automation services for our new manufacturing unit. Please share more details about your offerings.
                </div>
                <div class="enquiry-actions">
                    <button class="enquiry-btn btn-call">
                        <i class="fas fa-phone"></i> Call
                    </button>
                    <button class="enquiry-btn btn-whatsapp">
                        <i class="fab fa-whatsapp"></i> WhatsApp
                    </button>
                    <button class="enquiry-btn btn-email">
                        <i class="fas fa-envelope"></i> Email
                    </button>
                </div>
            </div>

            <div class="enquiry-card">
                <div class="enquiry-header">
                    <div class="enquiry-name">Sunita Enterprises</div>
                    <div class="enquiry-time">Yesterday, 3:20 PM</div>
                </div>
                <div class="enquiry-contact">
                    <div class="enquiry-phone">
                        <i class="fas fa-phone"></i> +91 87654 32109
                    </div>
                    <div class="enquiry-email">
                        <i class="fas fa-envelope"></i> info@sunitaent.com
                    </div>
                </div>
                <div class="enquiry-message">
                    We need a quote for SCADA system installation for our water treatment plant. What are the specifications you offer?
                </div>
                <div class="enquiry-actions">
                    <button class="enquiry-btn btn-call">
                        <i class="fas fa-phone"></i> Call
                    </button>
                    <button class="enquiry-btn btn-whatsapp">
                        <i class="fab fa-whatsapp"></i> WhatsApp
                    </button>
                    <button class="enquiry-btn btn-email">
                        <i class="fas fa-envelope"></i> Email
                    </button>
                </div>
            </div>

            <div class="enquiry-card">
                <div class="enquiry-header">
                    <div class="enquiry-name">Ajay Patel</div>
                    <div class="enquiry-time">2 days ago, 11:15 AM</div>
                </div>
                <div class="enquiry-contact">
                    <div class="enquiry-phone">
                        <i class="fas fa-phone"></i> +91 76543 21098
                    </div>
                    <div class="enquiry-email">
                        <i class="fas fa-envelope"></i> ajay.patel@techsol.com
                    </div>
                </div>
                <div class="enquiry-message">
                    Looking for robotic arm integration for our assembly line. What brands do you work with? Do you provide training?
                </div>
                <div class="enquiry-actions">
                    <button class="enquiry-btn btn-call">
                        <i class="fas fa-phone"></i> Call
                    </button>
                    <button class="enquiry-btn btn-whatsapp">
                        <i class="fab fa-whatsapp"></i> WhatsApp
                    </button>
                    <button class="enquiry-btn btn-email">
                        <i class="fas fa-envelope"></i> Email
                    </button>
                </div>
            </div>

            <div class="enquiry-card">
                <div class="enquiry-header">
                    <div class="enquiry-name">Mehta Industries</div>
                    <div class="enquiry-time">3 days ago, 4:30 PM</div>
                </div>
                <div class="enquiry-contact">
                    <div class="enquiry-phone">
                        <i class="fas fa-phone"></i> +91 65432 10987
                    </div>
                    <div class="enquiry-email">
                        <i class="fas fa-envelope"></i> purchase@mehtaind.com
                    </div>
                </div>
                <div class="enquiry-message">
                    We need annual maintenance contract for our existing automation systems. Please share your AMC plans and pricing.
                </div>
                <div class="enquiry-actions">
                    <button class="enquiry-btn btn-call">
                        <i class="fas fa-phone"></i> Call
                    </button>
                    <button class="enquiry-btn btn-whatsapp">
                        <i class="fab fa-whatsapp"></i> WhatsApp
                    </button>
                    <button class="enquiry-btn btn-email">
                        <i class="fas fa-envelope"></i> Email
                    </button>
                </div>
            </div>
        </div>

        <Bottom/>
        
    </div>    

        </>
    )
}

export default Enquiries