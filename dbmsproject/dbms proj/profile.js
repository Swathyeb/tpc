document.getElementById('edit-button').addEventListener('click', function() {
    alert('Edit functionality is not implemented yet.');
    // Here you can implement the logic to open an edit form or navigate to an edit page.
});

document.getElementById('fileInput').addEventListener('change', function(event) {
    const previewContainer = document.getElementById('previewContainer');
    previewContainer.innerHTML = ''; // Clear previous previews

    const files = event.target.files;

    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const reader = new FileReader();

        reader.onload = function(e) {
            const img = document.createElement('img');
            img.src = e.target.result;
            previewContainer.appendChild(img);
        };

        reader.readAsDataURL(file);
    }
});

document.getElementById('uploadButton').addEventListener('click', function() {
    const files = document.getElementById('fileInput').files;

    if (files.length === 0) {
        alert('Please select photos to upload.');
    } else {
        alert('Photos uploaded successfully!');
        // Here, you can add logic to upload the images to your server if needed.
    }
});

function handleFileChange(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const uploadBox = document.querySelector('.upload-box');
            const image = document.createElement('img');
            image.src = e.target.result;
            uploadBox.innerHTML = '';
            uploadBox.appendChild(image);
        };
        reader.readAsDataURL(file);
    }
}
