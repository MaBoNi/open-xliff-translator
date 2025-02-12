import { useState } from "react";

export default function App() {
  const [file, setFile] = useState(null);
  const [downloadUrl, setDownloadUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a file first.");
      return;
    }
    setLoading(true);
    setError(null);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("http://localhost:5000/upload", {
        method: "POST",
        body: formData,
      });
      
      const data = await response.json();
      if (response.ok) {
        setDownloadUrl(`http://localhost:5000${data.download_url}`);
      } else {
        setError(data.error || "An error occurred");
      }
    } catch (error) {
      setError("Failed to connect to the server");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">XLIFF Translator</h1>
      <input type="file" accept=".xlf" onChange={handleFileChange} className="mb-4" />
      <button
        onClick={handleUpload}
        className="px-4 py-2 bg-blue-500 text-white rounded"
        disabled={loading}
      >
        {loading ? "Processing..." : "Upload & Translate"}
      </button>
      {error && <p className="text-red-500 mt-4">{error}</p>}
      {downloadUrl && (
        <a
          href={downloadUrl}
          download
          className="mt-4 px-4 py-2 bg-green-500 text-white rounded"
        >
          Download Translated File
        </a>
      )}
    </div>
  );
}
