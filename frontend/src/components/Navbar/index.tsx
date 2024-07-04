import React, { useEffect, useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import ChecklistIcon from "@mui/icons-material/Checklist";
import ReorderIcon from "@mui/icons-material/Reorder";
import "./styles.css";
import { useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const [userType, setUserType] = useState("");

  function navegarPara(local: string): void {
    navigate(`${local}?type=${userType}`);
  }

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const type = queryParams.get("type");

    if (type) {
      setUserType(type);
      localStorage.setItem("userType", type);
    } else {
      const storedType = localStorage.getItem("userType");
      if (storedType) {
        setUserType(storedType);
      }
    }
  }, [window.location.search]);

  useEffect(() => {
    if (
      userType === "supervisor" &&
      (window.location.pathname.includes("alcantara") ||
        window.location.pathname.includes("vitor"))
    ) {
      navegarPara("/gustavo");
    }
    if (
      userType === "coordenador" &&
      (window.location.pathname.includes("maria") ||
        window.location.pathname.includes("vitor"))
    ) {
      navegarPara("/gustavo");
    }
    if (
      userType === "estagiario" &&
      (window.location.pathname.includes("maria") ||
        window.location.pathname.includes("alcantara"))
    ) {
      navegarPara("/gustavo");
    }
  }, [userType]);

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
        {(userType === "" || userType === "estagiario") && (
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

        {(userType === "" || userType === "supervisor") && (
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
        {(userType === "" || userType === "coordenador") && (
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
      <span onClick={() => localStorage.removeItem("userType")}>Sair</span>
    </div>
  );
};

export default Navbar;
