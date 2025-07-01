import React, { useEffect, useState } from "react";
import { updateHacker } from "src/services/HackerService";
import FileBase from "react-file-base64";
import userIcon from "src/icons/user2.png";
import Button from "src/components/buttons/Button";
import { useForm } from "react-hook-form";

const EditProfile = ({ hackerObj }) => {
  const [showEditProfile, setShowEditProfile] = useState(false);
  const [cvFile, setCvFile] = useState("");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
    trigger,
  } = useForm({
    mode: "onChange",
  });

  const [isSending, setIsLoading] = useState(false);
  const [isPfpTooLarge, setPfpTooLarge] = useState(false);
  const [isCvTooLarge, setCvTooLarge] = useState(false);
  const [hasImageChanged, setHasImageChanged] = useState(false);
  const [cvFileChanged, setcvFileChanged] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [hacker, setHacker] = useState({});
  const [pfpImage, setImage] = useState(hacker.image || userIcon);
  const [hackerLinkedin, setHackerLinkedin] = useState(hacker.linkedin || "");
  const [hackerGithub, setHackerGithub] = useState(hacker.github || "");
  const sizeOptions = [
    { value: "S", label: "S" },
    { value: "M", label: "M" },
    { value: "L", label: "L" },
    { value: "XL", label: "XL" },
    { value: "XXL", label: "XXL" },
    { value: "XXXL", label: "XXXL" },
  ];

  useEffect(() => {
    const hacker_id = localStorage.getItem("userID");
    hackerObj.id = hacker_id;
    setHacker(hackerObj);
    setImage(hackerObj.image || userIcon);
    setHackerLinkedin(hackerObj.linkedin || "");
    setHackerGithub(hackerObj.github || "");
  }, [hackerObj]);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file.type !== "application/pdf") {
      setSubmitError("Només es permeten fitxers PDF.");
      return;
    }
    const reader = new FileReader();
    reader.onloadend = () => {
      setCvTooLarge(file.size > 1024 * 1024);
      setCvFile(reader.result);
      setcvFileChanged(true);
    };
    reader.readAsDataURL(file);
  };

  const clearFile = () => {
    setCvFile("");
    setCvTooLarge(false);
    setcvFileChanged(true);
    // Clear the input field to allow selecting the same file again
    const inputElement = document.getElementById("cvinfo_file");
    if (inputElement) {
      inputElement.value = "";
    }
  };

  const onEditButtonClick = () => {
    setShowEditProfile(!showEditProfile);
  };

  const handleImageChange = (event) => {
    setHasImageChanged(true);
    setPfpTooLarge(parseFloat(event.size) > 1024);
    setImage(event.base64);
  };

  const handleImageUrlChange = (event) => {
    setHasImageChanged(true);
    setImage(event.target.value.trim());
  };

  const onSubmit = async (formData) => {
    console.log(hacker);
    const data = {
      id: hacker.id,
      shirt_size: formData.size || hacker.shirt_size,
      linkedin: formData.linkedin || hackerLinkedin,
      github: formData.github || hackerGithub,
    };
    if (hasImageChanged) {
      data.image = pfpImage;
    }
    if (cvFileChanged) {
      data.cv = cvFile;
    }

    setIsLoading(true);
    let result = await updateHacker(data);
    setIsLoading(false);

    if (result.success) {
      window.location.reload();
    } else {
      console.warn("hi ha hagut un error", result.errMssg);
      setSubmitError(result.errMssg);
    }
  };

  return (
    <>
      {hacker && (
        <div className="row align-middle mx-auto mb-3 col-12">
          {showEditProfile ? (
            <div>
              <Button secondary outline onClick={onEditButtonClick}>
                <i className="fas fa-sign-out"></i> Close
              </Button>
              <div className="text-black mt-4">
                <form className="flex flex-col gap-3">
                  <label>
                    Talla de samarreta:
                    <select
                      id="size"
                      name="size"
                      className={`py-2 min-h-10 px-2 text-base mt-2 ml-2`}
                      defaultValue={hacker.shirt_size}
                      {...register("size")}
                    >
                      {sizeOptions.map((size) => (
                        <option key={size.value} value={size.value}>
                          {size.label}
                        </option>
                      ))}
                    </select>
                  </label>

                  <label>
                    Enllaç de LinkedIn:
                    <input
                      type="text"
                      id="linkedin"
                      name="linkedin"
                      placeholder={hackerLinkedin}
                      className={`py-2 min-h-10 px-2 text-base mt-2`}
                      {...register("linkedin")}
                    />
                  </label>

                  <label>
                    Enllaç de GitHub:
                    <input
                      type="text"
                      id="github"
                      name="github"
                      placeholder={hackerGithub}
                      className={`py-2 min-h-10 px-2 text-base mt-2`}
                      {...register("github")}
                    />
                  </label>

                  <label className="image-input-container">
                    Adjunta el teu CV (Opcional):
                    <input
                      type="file"
                      id="cvinfo_file"
                      name="cvinfo_file"
                      accept="application/pdf"
                      onChange={handleFileChange}
                    />
                    {cvFile && (
                      <div className="">
                        <span className="file-name">{cvFile.name}</span>
                        <Button primary onClick={clearFile}>
                          &#10005;
                        </Button>
                      </div>
                    )}
                    {isCvTooLarge && (
                      <label htmlFor="cvinfo_file" className="text-red-600">
                        El fitxer seleccionat supera el límit permès de 1MB.
                      </label>
                    )}
                  </label>

                  <div className="w-full">
                    <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border border-gray-300">
                      <img
                        src={pfpImage || userIcon}
                        alt="Profile"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <label className="w-full mb-4">
                      Image URL:
                      <input
                        type="text"
                        id="imageUrl"
                        name="imageUrl"
                        onChange={handleImageUrlChange}
                        className="w-full"
                      />
                    </label>
                    <div className="image-input-container">
                      <FileBase
                        type="file"
                        id="avatarInput"
                        multiple={false}
                        onDone={handleImageChange}
                      />
                    </div>
                    {isPfpTooLarge && (
                      <label htmlFor="avatarInput" className="text-red-600">
                        El fitxer seleccionat supera el límit permès de 1MB.
                      </label>
                    )}
                  </div>
                  <div className="w-full flex flex-col mb-5">
                    <Button
                      className="text-white bg-primaryHackeps hover:bg-primaryHackepsDark transition ease-in-out delay-100 min-h-10"
                      onClick={handleSubmit(onSubmit)}
                    >
                      {" "}
                      Actualitzar dades
                    </Button>
                    <p className="text-red-400 mt-2">{submitError}</p>
                  </div>
                </form>
              </div>
            </div>
          ) : (
            <Button outline secondary onClick={onEditButtonClick}>
              <i className="fas fa-pen-to-square"></i> Editar perfil
            </Button>
          )}
        </div>
      )}
    </>
  );
};

export default EditProfile;
