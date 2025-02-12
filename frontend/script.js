function uploadFile() {
    const fileInput = document.getElementById("fileInput");
    const status = document.getElementById("status");
    const downloadLink = document.getElementById("downloadLink");
    
    if (!fileInput.files.length) {
        alert("Please select a file first.");
        return;
    }
    
    const file = fileInput.files[0];
    const formData = new FormData();
    formData.append("file", file);
    
    status.textContent = "Uploading and processing...";
    downloadLink.style.display = "none";
    
    fetch("http://localhost:5002/upload", {
        method: "POST",
        body: formData,
    })
    .then(response => response.json())
    .then(data => {
        if (data.download_url) {
            downloadLink.href = `http://localhost:5002${data.download_url}`;
            downloadLink.textContent = "Download Translated File";
            downloadLink.style.display = "block";
            status.textContent = "Translation complete!";
        } else {
            status.textContent = "Error: " + (data.error || "Unknown error");
        }
    })
    .catch(error => {
        status.textContent = "Failed to connect to the server.";
        console.error("Error:", error);
    });
}
