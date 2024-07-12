import React, { useEffect, useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
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
    // if (
    //   userType === "supervisor" ||
    //   userType === "coordenador" ||
    //   userType === "estagiario"
    // ) {
    //   if (!window.location.pathname.includes("/anamneses")) {
    //     navegarPara("/anamneses");
    //   }
    // }
  }, [userType]);

  return (
    <div className="navbar">
      <div>Enfermagem</div>
      <nav>
        <li
          onClick={() => navegarPara("/home")}
          className={`${window.location.pathname.includes("/home") && "hover-active"}`}
        >
          <span>
            <HomeIcon />
            Inicio
          </span>
        </li>
        <li
          onClick={() => navegarPara("/anamneses")}
          className={`${window.location.pathname.includes("/anamneses") && "hover-active"}`}
        >
          <span>
            <AppRegistrationIcon />
            Anamnese
          </span>
        </li>
      </nav>
      <span onClick={() => localStorage.removeItem("userType")}>Sair</span>
    </div>
  );
};

export default Navbar;
