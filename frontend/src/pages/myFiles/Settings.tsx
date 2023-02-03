import React, { FormEvent, useEffect, useState } from "react";
import { Button, Input } from "@material-tailwind/react";
import { STORAGE_KEY } from "../../utils/storage";

export default function Settings() {
  const [apiKey, setApiKey] = useState("");
  const [savedMessageVisible, setSavedMessageVisible] = useState(false);

  useEffect(() => {
    const myKey = localStorage.getItem(STORAGE_KEY);
    if (myKey) {
      setApiKey(myKey);
    }
  }, []);

  const updateApiKey = (e: FormEvent) => {
    e.preventDefault();

    localStorage.setItem(STORAGE_KEY, apiKey);
    setSavedMessageVisible(true);

    setTimeout(() => {
      setSavedMessageVisible(false);
    }, 5000);
  }

  return (
    <>
      <h1 className={"text-4xl mb-4 font-semibold text-center"}>Settings</h1>

      <div className={"max-w-2xl mx-auto"}>
        <p className={"mb-1 mt-4"}>
          You can provide your own nft.storage API Key to store all files under your own account:
        </p>
        <form onSubmit={updateApiKey} className={"flex flex-row"}>
          <Input label="API Key"
                 className={"rounded-r-none"}
                 value={apiKey}
                 onChange={event => setApiKey(event.target.value)}
          />
          <Button type={"submit"} className="mr-2 w-32 rounded-l-none -ml-1 z-2 relative">
            <span>Save</span>
          </Button>
        </form>
        {savedMessageVisible && (
          <div className={"text-green-500 font-semibold bg-green-50 rounded-lg text-center py-4 mt-4"}>
            Your API Key successfully saved!
          </div>
        )}
      </div>

    </>
  )
}
