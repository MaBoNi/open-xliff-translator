import os
import defusedxml.ElementTree as ET
from flask import Flask, request, send_from_directory, jsonify
import requests

app = Flask(__name__)
UPLOAD_FOLDER = "uploads"
PROCESSED_FOLDER = "processed"
LIBRETRANSLATE_URL = "http://libretranslate:5000/translate"

os.makedirs(UPLOAD_FOLDER, exist_ok=True)
os.makedirs(PROCESSED_FOLDER, exist_ok=True)

def translate_text(text, target_lang="da"):
    """Translates text using LibreTranslate."""
    payload = {"q": text, "source": "auto", "target": target_lang, "format": "text"}
    response = requests.post(LIBRETRANSLATE_URL, json=payload)
    if response.status_code == 200:
        return response.json().get("translatedText", text)
    return text  # Fallback to original text if translation fails

def translate_xliff(input_file, output_file, target_lang="da"):
    """Parses an XLIFF file, translates text, and saves the translated file."""
    tree = ET.parse(input_file)
    root = tree.getroot()
    
    for trans_unit in root.findall(".//trans-unit"):
        source = trans_unit.find("source")
        target = trans_unit.find("target")
        
        if source is not None and (target is None or not target.text):
            translated_text = translate_text(source.text, target_lang)
            if target is None:
                target = ET.SubElement(trans_unit, "target")
            target.text = translated_text
    
    tree.write(output_file, encoding="utf-8", xml_declaration=True)
    return output_file

@app.route("/upload", methods=["POST"])
def upload_file():
    if "file" not in request.files:
        return jsonify({"error": "No file part"}), 400
    
    file = request.files["file"]
    if file.filename == "":
        return jsonify({"error": "No selected file"}), 400
    
    file_path = os.path.join(UPLOAD_FOLDER, file.filename)
    file.save(file_path)
    
    output_file = os.path.join(PROCESSED_FOLDER, f"translated_{file.filename}")
    translated_file = translate_xliff(file_path, output_file)
    
    return jsonify({"message": "File processed successfully", "download_url": f"/download/{os.path.basename(translated_file)}"})

@app.route("/download/<filename>", methods=["GET"])
def download_file(filename):
    return send_from_directory(PROCESSED_FOLDER, filename, as_attachment=True)

if __name__ == "__main__":
    debug_mode = os.getenv("FLASK_DEBUG","False").lower() in ["true", "1"]
    app.run(host="0.0.0.0", port=5002, debug=debug_mode)
