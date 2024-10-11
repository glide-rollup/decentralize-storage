import axios from "axios";

export const STORAGE_KEY = "vStorage:key";
// Define the Kubo API URL
const KUBO_API_URL = "http://172.93.186.161:5001/api/v0";

// Define the type for the response object from Kubo
interface KuboAddResponse {
  Hash: string;
  Name: string;
  Size: string;
}

export const uploadFiles = async (filesList: File[]): Promise<string> => {
  try {
    const formData = new FormData();
    
    // Append each file to the form data
    console.log("Files to upload:", filesList);
    filesList.forEach((file, index) => {
      formData.append(`file${index}`, file);
    });

    // Upload files to Kubo using the /add endpoint
    const response = await fetch(`${KUBO_API_URL}/add?recursive=true&wrap-with-directory=true&encoding=json`, {
      method: 'POST',
      body: formData,
      headers: {
        "Accept": "application/json",
      },
    });

    if (!response.body) {
      throw new Error("No response body from Kubo");
    }

    const reader = response.body.getReader();
    const decoder = new TextDecoder('utf-8');
    let jsonString = '';

    // Read the stream
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      jsonString += decoder.decode(value, { stream: true });
    }
    jsonString += decoder.decode(); // End the stream

    // Split the response into separate JSON objects
    const responseParts = jsonString.split('\n').filter(part => part.trim() !== '');

    // Parse each part as JSON
    const responseDataArray = responseParts.map(part => JSON.parse(part));

    // Find the directory hash (the one with an empty Name)
    const directoryHash = responseDataArray.find((item) => item.Name === "")?.Hash;
    if (directoryHash) {
      console.log("Files uploaded to Kubo:", directoryHash);
      return directoryHash;
    } else {
      throw new Error("Directory hash not found in response");
    }
  } catch (error) {
    console.error("Error uploading files to Kubo:", error);
    throw error;
  }
};