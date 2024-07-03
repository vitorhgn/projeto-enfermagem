import React, { useEffect, useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import ChecklistIcon from "@mui/icons-material/Checklist";
import ReorderIcon from "@mui/icons-material/Reorder";

import "./styles.css";
import { useNavigate } from "react-router-dom";

type NavbarProps = {
  //
};

const Navbar: React.FC<NavbarProps> = () => {
  const navigate = useNavigate();

  const [params, setParams] = useState("");

  function navegarPara(local: string): void {
    navigate(`${local}?=${params}`);
  }

  useEffect(() => {
    setParams(window.location.search.replace("?=", ""));
  }, [window.location]);

  useEffect(() => {
    if (
      params === "supervisor" &&
      (window.location.pathname.includes("alcantara") ||
        window.location.pathname.includes("vitor"))
    ) {
      navegarPara("/gustavo");
    }
    if (
      params === "coordenador" &&
      (window.location.pathname.includes("maria") ||
        window.location.pathname.includes("vitor"))
    ) {
      navegarPara("/gustavo");
    }
    if (
      params === "estagiario" &&
      (window.location.pathname.includes("maria") ||
        window.location.pathname.includes("alcantara"))
    ) {
      navegarPara("/gustavo");
    }
    setParams(window.location.search.replace("?=", ""));
  }, [params]);

  return (
    <div className="navbar">
      <div>Enfermagem</div>
      <nav>
        <li
          onClick={() => navegarPara("/gustavo")}
          className={`${window.location.pathname.includes("/gustavo") && "hover-active"}`}
        >
          <span>
            <HomeIcon />
            Inicio
          </span>
        </li>
        {(params === "" || params === "estagiario") && (
          <li
            onClick={() => navegarPara("/vitor")}
            className={`${window.location.pathname.includes("/vitor") && "hover-active"}`}
          >
            <span>
              <AppRegistrationIcon />
              Anamnese
            </span>
          </li>
        )}

        {(params === "" || params === "supervisor") && (
          <li
            onClick={() => navegarPara("/maria")}
            className={`${window.location.pathname.includes("/maria") && "hover-active"}`}
          >
            <span>
              <ChecklistIcon />
              Supervisionar
            </span>
          </li>
        )}
        {(params === "" || params === "coordenador") && (
          <li
            onClick={() => navegarPara("/alcantara")}
            className={`${window.location.pathname.includes("/alcantara") && "hover-active"}`}
          >
            <span>
              <ReorderIcon />
              Relatório
            </span>
          </li>
        )}
      </nav>
      <span>Sair</span>
    </div>
  );
};

export default Navbar;
