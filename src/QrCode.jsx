import React, { useState } from "react";
import "./QrCode.css";

const QrCode = () => {
  const [img, setImg] = useState("");
  const [loading, setLoading] = useState(false);
  const [qrData, setQrdata] = useState("");
  const [qrSize, setQrSize] = useState("150");
  async function generateQR() {
    setLoading(true);
    try {
      const url = `https://api.qrserver.com/v1/create-qr-code/?size=${qrSize}×${qrSize}&data=${encodeURIComponent(
        qrData,
      )}`;
      setImg(url);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }
  function downloadQR() {
    fetch(img)
      .then((response) => response.blob())
      .then((blob) => {
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "qrcode.png";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      })
      .catch((error) => {
        console.error(error);
      });
  }
  return (
    <div className="app-container">
      <h1>QR Code Generator</h1>
      {loading && <p>Please wait....</p>}
      {img && <img src={img} alt="" className="qr-code-image" />}
      <div>
        <label htmlFor="dataInput" className="input-label">
          Data for QR code
        </label>
        <input
          type="text"
          id="dataInput"
          value={qrData}
          placeholder="Enter Data for QR code"
          onChange={(e) => setQrdata(e.target.value)}
        />
        <label htmlFor="sizeInput" className="input-label">
          Image size (e.g., 150):
        </label>
        <input
          type="text"
          id="dataInput"
          value={qrSize}
          onChange={(e) => setQrSize(e.target.value)}
        />
        <button
          className="generate-button"
          disabled={loading}
          onClick={generateQR}
        >
          Generate QR Code
        </button>
        <button className="download-button" onClick={downloadQR}>
          Download QR Code
        </button>
      </div>
      <p className="footer">Designed By KPS</p>
    </div>
  );
};

export default QrCode;
