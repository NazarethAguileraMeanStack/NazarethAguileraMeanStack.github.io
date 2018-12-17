let frontPageInfoId = "";
let frontPageInfoSourceId = "";
let frontPageInfoTitleId = "";
let mainImage = document.getElementById('top');

let slider = [
    '../images/homePageMainPic.jpg',
    '../images/HomePageMainPic2.jpg',
    '../images/HomePageMainPic3.jpg',
    '../images/HomePageMainPic4.jpg'
    ];



window.onload = function setVariables(){
    frontPageInfoId = document.getElementById("frontPageInfo");
    frontPageInfoSourceId = document.getElementById("frontPageInfoSource");
    frontPageInfoTitleId = document.getElementById("frontPageInfoTitle");
    mainImage = document.getElementById('top')
    whatIsInfo();
}

slideShow();

function whatIsInfo(){
    frontPageInfoTitleId.innerText = "What is a Developmental Disability?";    
    frontPageInfoId.innerHTML = `
                <p>A developmental disability is a disability that originates before an individual attains
                age 18 years, continues, or can be expected to continue, indefinitely, and constitutes
                a substantial disability for that individual.</p>
                <p>A "substantial disability" means the existence of significant functional limitations in
                three or more of the following areas of major life activity, as determined by a regional
                center, and as appropriate to the age of the person:</p>
                <ol>
                    <li>Self-care</li>
                    <li>Receptive and expressive language</li>
                    <li>Learning</li>
                    <li>Mobility</li>
                    <li>Self-direction</li>
                    <li>Capacity for independent living</li>
                    <li>Economic self-sufficiency</li>
                </ol>`;
    frontPageInfoSourceId.href = "http://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=WIC&sectionNum=4512.";
}


function autisticInfo(){
    frontPageInfoTitleId.innerText = "What is Autism?";    
    frontPageInfoId.innerText = "People with autistic disorder usually have significant language delays, social and communication challenges, and unusual behaviors and interests. Many people with autistic disorder also have intellectual disability. Autistic disorder is present before the age of 3 and lasts throughout a person's life, although symptoms may improve over time.";
    frontPageInfoSourceId.href = "https://www.cdc.gov/ncbddd/autism/facts.html";
}

function cerebralInfo(){
    frontPageInfoTitleId.innerText = "What is Cerebral Palsy?";    
    frontPageInfoId.innerText = "Cerebral palsy refers to a group of disorders that affect a person’s ability to move and to maintain balance and posture. It is due to a non-progressive brain abnormality, which means that it does not get worse over time, though the exact symptoms can change over a person’s lifetime. People with cerebral palsy have damage to the part of the brain...";
    frontPageInfoSourceId.href = "https://www.cdc.gov/ncbddd/cp/index.html";
}

function epilepsyInfo(){
    frontPageInfoTitleId.innerText = "What is Epilepsy?";    
    frontPageInfoId.innerText = "Epilepsy, sometimes referred to as seizure disorder, is a general term that refers to a tendency to have recurrent seizures. There are many kinds of seizures, but all involve abnormal electrical activity in the brain that causes an involuntary change in body movement of function, sensation, awareness, or behavior. Symptoms can vary...";
    frontPageInfoSourceId.href = "https://www.cdc.gov/epilepsy/index.html";
}

function retardationInfo(){
    frontPageInfoTitleId.innerText = "What is Mental Retardation?";    
    frontPageInfoId.innerText = "Intellectual disability is characterized both by a significantly below-average score on a test of mental ability or intelligence and by limitations in the ability to function in areas of daily life, such as communication, self-care, and getting along in social situations and school activities. Intellectual disability is sometimes referred to as cognitive disability...";
    frontPageInfoSourceId.href = "https://www.cdc.gov/ncbddd/actearly/pdf/parents_pdfs/IntellectualDisability.pdf";

}

function slideShow() {
    let i = 0;
    setInterval(function() {
        if (i === slider.length - 1) i = 0;
        else i++;
        mainImage.style.opacity = 0;
        setTimeout(function(){
            mainImage.style.backgroundImage = `url(${slider[i]})`;
            mainImage.style.opacity = 1;
        }, 800);
    }, 6000);
}



/* change background pics   */