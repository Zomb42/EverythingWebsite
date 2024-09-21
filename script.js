const { jsPDF } = window.jspdf;

// Function to generate CV content based on the keywords
function generateCV(company, position, bonus) {
    const cvContent = `


Dear a hard-working recruiter or hiring manager at ${company},

    I am excited to apply for the ${position} role at ${company}. With a degree in computer Science and applied computational mathematics and statistics from the  University of Notre Dame and a GPA of 3.85, I bring a solid foundation in both  theoretical and  practical aspects of software development and data analysis.

    My experiences includes a wide array skills involving the application of technical skills in bringing forth solutions to real-world problems. This includes the web development of interactive features for the Riverbend Math Community, ensuring that math education could be more accessible and fun for all ages. As a retail banking intern this past summer, I processed financial transactions and also analyzed market loan data using the pandas library and python, creating financial predictions and growth models. While abroad this summer in London, I was able to demonstrate my artificial intelligence and machine learning skills in developing a state-of-the-art deep learning medical image classification model in a fullstack project. 

    As an undergraduate research assistant the past school year involved refining machine  learning models for object classification. Additionally, my consulting internship at the Lucy Family Institute for Data & Society Civic Innovation Lab allowed me to collaborate  on real-world problems and present affordable housing findings to stakeholders effectively. Through these activites I found great interest in applying the skills I have learned in  the classroom to bring forth real life impact in the greater community.

    My curiousity in tackling real-world issue also can be found outside the classroom or any  internship, as I have also worked with several friends in developing a bike-sharing solution from the ground up for its web infastructure and physical lock components. Through the construction of a physical lock with Fusion 360 and integration with an Expo frontend and MangoDB backend, I find great interest in the intersection of technicality and applicablity. 

    I am particularly drawn to ${company} because of its industry-leading advancements and its strong innovative culture. Being part of ${company} means being part of a collaborative environment where creativity and excellence are encouraged, and employees are empowered to make a real difference. I am incredibly eager to bring my skills to your team and contribute to impactful projects that shape the future of the world. ${bonus}

    Thank you so much for considering my application and the time spent reading it. I'm incredibly eager to learn more about your company. Please contact me at 574-327-5829 or dericks1real@gmail.com. 

Sincerely,
Derick Shi
    `;
    return cvContent;
}

// Function to display and download CV as a PDF
function generateAndDownloadPDF() {
    const company = document.getElementById('company').value.trim();
    const position = document.getElementById('position').value.trim();
    const bonus = document.getElementById('bonus').value.trim();
    const cvContent = generateCV(company, position, bonus);

    // Display the CV content in the output div
    const outputDiv = document.getElementById('cv-output');
    outputDiv.innerHTML = `<pre>${cvContent}</pre>`;

    // Create a new PDF document
    const pdf = new jsPDF();


    pdf.setFontSize(10); // Adjust font size as needed

// Add text to the PDF with automatic line breaks
    const margins = { top: 10, left: 10, bottom: 10 };
    const lineHeight = 5;
    let y = margins.top;
    const pageWidth = pdf.internal.pageSize.width - margins.left * 2;

// Split the text into lines that fit within the page width
    const lines = pdf.splitTextToSize(cvContent, pageWidth);

// Add lines to the PDF, ensuring text wraps properly and fits within page
    lines.forEach(line => {
    if (y + lineHeight > pdf.internal.pageSize.height - margins.bottom) {
        pdf.addPage(); // Add a new page if the text exceeds the page height
        y = margins.top; // Reset y position for new page
    }
    pdf.text(line, margins.left, y);
    y += lineHeight;
});
pdf.save('cv.pdf');
}

// Event listener for the generate and download button
document.getElementById('generate-cv').addEventListener('click', generateAndDownloadPDF);