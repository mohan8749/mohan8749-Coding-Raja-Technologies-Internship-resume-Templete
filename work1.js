
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('resumeForm');
    const previewContainer = document.getElementById('preview');

    
    const templateSelect = document.getElementById('templateSelect');
    templateSelect.addEventListener('change', updatePreview);

    form.addEventListener('input', updatePreview);

    
    const downloadButton = document.getElementById('downloadButton');
    downloadButton.addEventListener('click', downloadResume);
});

function updatePreview() {
    const fullName = document.getElementById('fullName').value;
    const degree = document.getElementById('degree').value;
    const jobTitle = document.getElementById('jobTitle').value;
    const skills = document.getElementById('skills').value;

    
    const templateSelect = document.getElementById('templateSelect');
    const selectedTemplate = templateSelect.value;

    const previewContainer = document.getElementById('preview');
    let templateHTML = '';

    
    if (selectedTemplate === 'modern') {
        templateHTML = `
            <div class="modern-template">
                <h2>${fullName}</h2>
                <p><strong>Degree:</strong> ${degree}</p>
                <p><strong>Job Title:</strong> ${jobTitle}</p>
                <p><strong>Skills:</strong> ${skills}</p>
            </div>
        `;
    } else if (selectedTemplate === 'classic') {
        templateHTML = `
            <div class="classic-template">
                <h2>${fullName}</h2>
                <p><strong>Degree:</strong> ${degree}</p>
                <p><strong>Job Title:</strong> ${jobTitle}</p>
                <p><strong>Skills:</strong> ${skills}</p>
            </div>
        `;
    }

    previewContainer.innerHTML = templateHTML;
}

function downloadResume() {
    const resumeContainer = document.getElementById('previewContainer');
    const options = { margin: 10, filename: 'resume.pdf', image: { type: 'jpeg', quality: 0.98 }, html2canvas: { scale: 2 } };

    
    html2pdf().from(resumeContainer).set(options).outputPdf().then(function (pdf) {
        const blob = new Blob([pdf], { type: 'application/pdf' });
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = 'resume.pdf';
        link.click();
    });
}
