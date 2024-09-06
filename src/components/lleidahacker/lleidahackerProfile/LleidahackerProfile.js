import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LoadSection from "src/components/hackeps/LoadSection/Loadsection";
import { getUserById } from "src/services/UserService";
import ProfilePic from "src/components/hackeps/ProfilePic/ProfilePic";
import icon from "src/assets/img/programmersen.png";
import { me } from "src/services/AuthenticationService";
import GestorContraseña from "src/components/lleidahacker/gestorContraseña/GestorContraseña";
import DadesPersonals from "src/components/lleidahacker/dadesPersonals/DadesPersonals";
import GrupList from "src/components/lleidahacker/grupList/GrupList";

//TODO: Fer el cercle del profile ja que la component actualment no esta ben feta la del profile.

const LleidahackerProfile = () => {
  let { id } = useParams();
  const [lleidaHacker, setLleidaHacker] = useState(null);
  const [loading, setLoading] = useState(true);
  const [ownUser, setOwnUser] = useState(false); //default false

  useEffect(() => {
    const fetchVariables = async () => {
      let lleidaHacker = await getUserById(id);
      setLleidaHacker(lleidaHacker);
      let ownUser = await me();
      if (ownUser.id === id) {
        setOwnUser(true);
      }
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setLoading(false);
    };
    fetchVariables();
  }, [id]);

  return (
    <div>
      {loading === true ? (
        <div>
          <LoadSection />{" "}
          {/*Cambiar despres i ficar una loading de lleidahacker */}
        </div>
      ) : (
        <div>
          <div className="header-events bg-background-patron px-10 min-h-0 bg-cover bg-no-repeat bg-center py-12 mb-10">
            <div className="flex flex-col w-full px-8">
              <div className="flex flex-row">
                <div className="align-left">
                  <ProfilePic size="big" icon={icon} />
                </div>
                <div className="self-center	flex flex-col justify-center w-full text-center">
                  <h1 className="text-4xl">Big Lolo</h1>
                  <h2 className="text-2xl">Lolomania</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col px-10">
            {ownUser === true ? (
              <>
                <div className="securityDatas mb-16">
                  <GestorContraseña />
                </div>
              </>
            ) : (
              <></>
            )}

            <div className="Dades-personals mb-16">
              <DadesPersonals datas={lleidaHacker} />
            </div>
            <div className="Grups mb-16">
              <GrupList user={id} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LleidahackerProfile;
