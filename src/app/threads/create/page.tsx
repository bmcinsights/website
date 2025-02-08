"use client";
import { UploadButton } from "@/utils/uploadthing";
import { useState, useEffect } from "react";
import axios from "axios";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { Button } from "@/components/ui/button";

interface Submission {
  title: string;
  text: string;
  imageUrl: string;
}

const ImageUpload = () => {
  const [imageUrl, setImageUrl] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [text, setText] = useState<string>("");
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [uploadComplete, setUploadComplete] = useState<boolean>(false);

  useEffect(() => {
    const savedSubmissions = localStorage.getItem("submissions");
    if (savedSubmissions) {
      setSubmissions(JSON.parse(savedSubmissions));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("submissions", JSON.stringify(submissions));
  }, [submissions]);

  const handleUploadComplete = (res: { url: string }[]) => {
    if (res[0]?.url) {
      setImageUrl(res[0].url);
      setUploadComplete(true);
      alert("Upload Completed");
    }
  };

  const handleUploadError = (error: Error) => {
    console.error("Upload error:", error);
    alert(`ERROR: ${error.message}`);
    setUploadComplete(false);
  };

  const handleSubmit = async () => {
    if (!title || !text) {
      alert("Please enter a title and body text.");
      return;
    }

    if (imageUrl && !uploadComplete) {
      alert("Please wait for the image upload to complete.");
      return;
    }

    const newSubmission: Submission = { title, text, imageUrl };

    try {
      const response = await axios.post("/api/dashboard", newSubmission);
      console.log("Response:", response.data);
      setSubmissions([...submissions, newSubmission]);

      setTitle("");
      setText("");
      setImageUrl("");
      setUploadComplete(false);
      alert("Submission added successfully!");
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        console.error("Axios error:", error.response?.data || error.message);
        alert(
          `Error submitting the data: ${
            error.response?.data?.error || error.message
          }`
        );
      } else {
        console.error("Unknown error:", error);
        alert("There was an error submitting the data. Please try again.");
      }
    }
  };

  return (
    <section className="container mx-auto my-12 px-4 text-text">
      <div className="mb-8">
        <h1 className="text-center text-4xl md:text-6xl my-4 font-bold text-primary">
          Create Thread
        </h1>
      </div>

      <div className="bg-secondary bg-opacity-30 dark:bg-opacity-30 rounded-2xl p-8 sm:p-10 lg:p-12 shadow-lg">
        <div className="my-8">
          <div className="relative grid w-full h-96 rounded-2xl mb-12 place-items-center bg-background dark:bg-black">
            {imageUrl ? (
              <img
                src={imageUrl}
                alt="Uploaded file preview"
                className="w-full h-full object-cover rounded-2xl"
              />
            ) : (
              <div className="w-full h-full rounded-2xl border-2 border-text border-opacity-20 flex items-center justify-center">
                <UploadButton
                  endpoint="imageUploader"
                  onClientUploadComplete={handleUploadComplete}
                  onUploadError={handleUploadError}
                  className="text-text text-opacity-60"
                />
              </div>
            )}
          </div>

          <form className="space-y-6">
            <div className="mb-4">
              <Label className="block text-sm font-medium mb-2">
                Thread Title
              </Label>
              <Input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter Thread Title"
                className="w-full p-3 rounded-lg bg-background text-text placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-primary focus:outline-none"
              />
            </div>

            <div className="mb-6">
              <Label className="block text-sm font-medium mb-2">
                Thread Body
              </Label>
              <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter Thread Body"
                rows={8}
                className="w-full p-3 rounded-lg bg-background text-text placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-primary focus:outline-none resize-none"
              />
            </div>

            <div className="pt-2">
              <Button
                onClick={(e) => {
                  e.preventDefault();
                  handleSubmit();
                }}
                disabled={!!(imageUrl && !uploadComplete)}
                className="w-full py-3 bg-primary hover:bg-primary/70 dark:bg-primary dark:hover:bg-primary/70 text-background font-medium rounded-lg transition hover:bg-opacity-75 focus:ring-2 focus:ring-primary focus:outline-none"
              >
                Create Thread
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ImageUpload;