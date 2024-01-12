import "../www/Resume.css"

export function Resume() {


    return(
        <div className="main">
            <div>Layton Washburn</div>
            <div>Objective</div>
            <div>Education</div>
            <span>Utah State University (Major: Computer Science)</span> 
            <span>Spring 2025</span>
            <span>BYUI Online- General Studies</span>
            <span>September 2020 to December 2020</span>
            <ul>
                <div className="section-header">Internship Experience</div>
                <li>
                    <span>DOE SULI</span>
                    <span>May 2023 to July 2023</span>
                </li>
                <li>
                    <span>Pepperidge Farms: Special Projects Internship</span>
                    <span>May 2022 to January 2023</span>
                </li>
                <div className="section-header">Educational Experience</div>
                <li>Knowledge in C, Python and Java</li>
                <li>Currently taking CS 2420 and CS 2410</li>
                <li>Self-learned basic Python over Summer 2022</li>
                <li>Experience with Microsoft Office</li>
            </ul>
                <div className="section-header">Professional Experience</div>
            <ul>
                <span>Pepperidge Farms: Special Projects Internship</span>
                <span>May 2022 to January 2023</span>
                <li> 
                    Responsible for creating and amending sanitation documents for machines and sanitation 
                    procedures. Frequently interacts with Leads and Specialists to obtain vital information for 
                    building sanitation documents. Works on miscellaneous projects such as inputting data to 
                    Excel, filing paperwork and constructing reference maps of the plant. 
                </li>
                <span>Pepperidge Farms: Steam Room Attendant</span>
                <span>October 2021 to May 2022</span>
                <li>
                    Responsible for cleaning dishes, equipment and machines used in production of product, 
                    and assisting in janitor duties to maintain rooms and equipment in the plant, while 
                    abiding by the plant’s food and personal safety regulations
                </li>
                <span>City of West Richland: Seasonal Maintenance Worker</span>
                <span>April 2021 to August 2022</span>
                <li>
                    Responsible for maintaining the City of West Richland’s parks and related property. 
                    Worked with a small team to remove water and debris from storm drains.
                </li>
            </ul>
        </div>
    )
}