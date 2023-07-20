import React, {useEffect } from 'react'
import { Footer } from '../Components'
import { Link } from "react-router-dom"
const Terms = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <div className="terms-div">
                <h1>⚠️Terms and Conditions for AnimeSH :</h1>
                <ul>
                    <li><h2>Content Disclaimer:</h2>
                        AnimeSH does not store any data on its servers. The website simply provides links to data and content available on the internet. AnimeSH does not guarantee the accuracy, completeness, or legality of any content provided through the links. Users are responsible for their own use of the linked content and should abide by the respective terms and conditions of the sources.</li>
                    <li>
                        <h2>         User Information:</h2>
                        To access certain features or services on AnimeSH, users may be required to provide their email address. By providing your email address, you consent to receive communications from AnimeSH related to your account and website updates. AnimeSH will handle user information in accordance with its Privacy Policy.
                    </li>
                    <li>
                        <h2>                  Account Termination:</h2>
                        AnimeSH reserves the right to delete or terminate user accounts without any prior notice or explanation. This action may be taken if a user violates these terms and conditions or engages in any activity that is deemed harmful, illegal, or against the code of conduct.
                    </li>
                    <li>
                        <h2>                        User Code of Conduct:</h2>
                        Users of AnimeSH are expected to comply with the code of conduct and guidelines set forth by the website. Any user found guilty of breaking the code of conduct or engaging in activities that promote unhealthy behavior, harassment, discrimination, or violation of any laws will be subject to being blacklisted and denied access to the website.
                    </li>
                    <li>
                        <h2>          Intellectual Property:</h2>
                        The content, design, logo, and other materials on AnimeSH are protected by intellectual property laws and are the property of their respective owners. Users agree not to reproduce, modify, distribute, or exploit any content from the website without prior written permission from the rightful own
                    </li>
                    <li>
                        <h2>                        Limitation of Liability:</h2>
                        AnimeSH and its owners, employees, or affiliates shall not be held liable for any direct, indirect, incidental, consequential, or punitive damages arising out of the use or inability to use the website, including but not limited to loss of data, loss of profits, or any other losses.
                    </li>
                    <li>
                        <h2>   Modification of Terms and Conditions:</h2>
                        AnimeSH reserves the right to modify or update these terms and conditions at any time without prior notice. Users are advised to review the terms periodically for any changes. Continued use of the website after modifications implies acceptance of the updated terms and conditions.
                    </li>
                </ul>
                <br /><br /><br />
                <div className="wrap-terms">
                    <span>By using AnimeSH, you acknowledge that you have read, understood, and agreed to these terms and conditions. If you do not agree to any of these terms, please refrain from using the website.</span>
                    <Link to="/">Home</Link>
                </div>
            </div>
            <br /><br /><br />
            <Footer />
        </>
    )
}

export default Terms